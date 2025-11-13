'use client'

import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, Html } from '@react-three/drei'
import * as THREE from 'three'

interface MoonProps {
  label: string
  tooltip: string
  color: string
  speed: number
  offset: number
  tiltX: number
  tiltZ: number
  radius: number
  renderOrder: number
}

function Moon({ label, tooltip, color, speed, offset, tiltX, tiltZ, radius, renderOrder }: MoonProps) {
  const orbitRef = useRef<THREE.Group>(null)
  const moonGroupRef = useRef<THREE.Group>(null)
  const textGroupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (orbitRef.current) {
      // Rotate the orbit around Y axis - this creates the orbital motion
      orbitRef.current.rotation.y = state.clock.getElapsedTime() * speed + offset
    }
    
    // Counter-rotate the moon group to keep it facing the same direction
    if (moonGroupRef.current && orbitRef.current) {
      moonGroupRef.current.rotation.y = -orbitRef.current.rotation.y
    }
    
    // Keep text facing upward toward viewer by over-compensating the tilt
    if (textGroupRef.current && orbitRef.current) {
      // Cancel out orbital tilts and add extra tilt to face viewer
      const orbitRotation = orbitRef.current.rotation.y
      const compensationFactor = 1.5 // Over-compensate to tilt text toward viewer
      
      // Add custom tilts for specific labels (rotate around Z axis)
      let extraTilt = 0
      if (label === "E2EE") {
        extraTilt = Math.PI / 9 // +20 degrees counter-clockwise
      } else if (label === "NIST 800") {
        extraTilt = -Math.PI / 6 // -30 degrees clockwise
      }
      
      textGroupRef.current.rotation.x = -tiltX * compensationFactor
      textGroupRef.current.rotation.y = 0
      textGroupRef.current.rotation.z = -tiltZ * compensationFactor + extraTilt
    }
  })

  return (
    <group ref={orbitRef} rotation={[tiltX, 0, tiltZ]}>
      <group ref={moonGroupRef} position={[radius, 0, 0]}>
        {/* Moon mesh */}
        <mesh>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial
            color="#525f73"
            metalness={0.1}
            roughness={0.9}
            emissive={color}
            emissiveIntensity={0.04}
          />
        </mesh>
        
        {/* 3D text - curved around moon */}
        <group ref={textGroupRef}>
          <Text
            position={[0, 0, 0.65]}
            fontSize={0.18}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.015}
            outlineColor="#000000"
            maxWidth={1.1}
            letterSpacing={0.02}
            // @ts-ignore - curveRadius is a valid prop but not in types
            curveRadius={-1.5}
          >
            {label}
          </Text>
        </group>
      </group>
    </group>
  )
}

function Planet() {
  const meshRef = useRef<THREE.Mesh>(null)
  const cloudsRef = useRef<THREE.Mesh>(null)

  return (
    <group name="centralPlanet">
      {/* Main planet body - clean sphere, no rotation */}
      <mesh ref={meshRef} name="planetSurface">
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial
          color="#1e3a5f"
          metalness={0.1}
          roughness={0.85}
          emissive="#0f172a"
          emissiveIntensity={0.15}
        />
      </mesh>
      
      {/* Cloud layer - static */}
      <mesh ref={cloudsRef} scale={1.02}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial
          color="#e2e8f0"
          transparent
          opacity={0.1}
          metalness={0}
          roughness={1}
        />
      </mesh>
      
      {/* Shield icon overlay */}
      <Html center distanceFactor={4} zIndexRange={[10, 0]}>
        <div className="relative">
          <svg
            className="w-32 h-32 text-slate-100"
            style={{ 
              filter: 'drop-shadow(0 0 14px rgba(59, 130, 246, 0.6))'
            }}
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
            />
          </svg>
        </div>
      </Html>
    </group>
  )
}

function OrbitalPath({ radius, color, tiltX, tiltZ }: { radius: number; color: string; tiltX: number; tiltZ: number }) {
  const points = []
  const segments = 128
  
  for (let i = 0; i <= segments; i++) {
    const angle = (i / segments) * Math.PI * 2
    const x = Math.cos(angle) * radius
    const z = Math.sin(angle) * radius
    points.push(new THREE.Vector3(x, 0, z))
  }
  
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
  
  return (
    <group rotation={[tiltX, 0, tiltZ]}>
      <line>
        <bufferGeometry {...lineGeometry} />
        <lineBasicMaterial 
          color={color} 
          opacity={0.35} 
          transparent 
          linewidth={1}
        />
      </line>
    </group>
  )
}

function Stars() {
  const count = 800
  const positions = new Float32Array(count * 3)
  const sizes = new Float32Array(count)
  
  // Distribute stars uniformly across full visible range  
  for (let i = 0; i < count; i++) {
    const random = Math.random()
    positions[i * 3] = (Math.random() - 0.5) * 60          // X - very wide horizontal spread
    
    // Uniform distribution across full visible range (+3 to -33) - much more coverage at bottom
    positions[i * 3 + 1] = Math.random() * -36 + 3
    
    positions[i * 3 + 2] = -Math.random() * 30 - 15        // Z - very deep behind
  }
  
  // Consistent small size for all stars
  for (let i = 0; i < count; i++) {
    sizes[i] = Math.random() * 0.02 + 0.01 // Range: 0.01 to 0.03
  }
  
  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
  
  return (
    <points>
      <bufferGeometry {...geometry} />
      <pointsMaterial 
        size={0.02} 
        color="#94a3b8" 
        transparent 
        opacity={0.6} 
        sizeAttenuation={true}
      />
    </points>
  )
}

function Scene() {
  const orbitalConfigs = [
    { tiltX: 0.1, tiltZ: 0.05, color: '#3b82f6', radius: 2.4 },     // Blue moon - inner orbit, minimal tilt
    { tiltX: 0.5, tiltZ: 0.3, color: '#8b5cf6', radius: 2.9 },      // Purple moon - outer orbit, steep tilt
    { tiltX: 0.25, tiltZ: -0.25, color: '#06b6d4', radius: 2.65 },  // Cyan moon - middle orbit, opposite tilt
  ]

  return (
    <>
      {/* Distant stars - render first (bottom layer) */}
      <Stars />
      
      {/* Softer lighting - less shadows */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[8, 6, 5]} intensity={0.8} color="#ffffff" castShadow={false} />
      <directionalLight position={[-4, -2, -3]} intensity={0.4} color="#94a3b8" castShadow={false} />
      <pointLight position={[0, 0, 0]} intensity={0.3} color="#3b82f6" distance={15} />
      
      {/* Orbital paths - commented out */}
      {/* {orbitalConfigs.map((config, i) => (
        <group key={i} position={[0, 0, 0]} renderOrder={0}>
          <OrbitalPath 
            radius={config.radius} 
            color={config.color} 
            tiltX={config.tiltX} 
            tiltZ={config.tiltZ} 
          />
        </group>
      ))} */}
      
      {/* Central planet - highest render order (always on top) */}
      <group position={[0, 0, 0]}>
        <Planet />
      </group>
      
      {/* Three moons - with staggered timing to avoid collisions */}
      <Moon
        label="SOC 2"
        tooltip="AICPA SOC 2 Ready"
        color={orbitalConfigs[0].color}
        speed={0.3}
        offset={0}
        tiltX={orbitalConfigs[0].tiltX}
        tiltZ={orbitalConfigs[0].tiltZ}
        radius={orbitalConfigs[0].radius}
        renderOrder={1}
      />
      <Moon
        label="NIST 800"
        tooltip="NIST 800-53 Aligned"
        color={orbitalConfigs[2].color}
        speed={0.24}
        offset={3.14}
        tiltX={orbitalConfigs[2].tiltX}
        tiltZ={orbitalConfigs[2].tiltZ}
        radius={orbitalConfigs[2].radius}
        renderOrder={2}
      />
      <Moon
        label="E2EE"
        tooltip="End-to-End Encryption"
        color={orbitalConfigs[1].color}
        speed={-0.27}
        offset={5.5}
        tiltX={orbitalConfigs[1].tiltX}
        tiltZ={orbitalConfigs[1].tiltZ}
        radius={orbitalConfigs[1].radius}
        renderOrder={3}
      />
      
      {/* Disable all user controls */}
      <OrbitControls
        enabled={false}
      />
    </>
  )
}

export default function SecurityOrbital3D() {
  return (
    <div className="relative w-full max-w-[650px] mx-auto overflow-visible" style={{ height: '650px' }}>
      <Canvas
        camera={{ position: [0, 3.5, 8], fov: 55 }}
        style={{ 
          background: 'transparent', 
          width: '100%', 
          height: '100%',
          overflow: 'visible'
        }}
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          preserveDrawingBuffer: true
        }}
        performance={{ min: 0.5 }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}

