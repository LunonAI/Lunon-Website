export default function LunarBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div 
        className="absolute -top-40 -right-24 h-[36rem] w-[36rem] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle at center, var(--lunar-highlight), transparent 70%)'
        }}
      />
      <div 
        className="absolute bottom-[-10rem] left-[-8rem] h-[42rem] w-[42rem] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle at center, var(--lunar-muted), transparent 75%)'
        }}
      />
    </div>
  );
}

