import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { fullName, email, company, companySize, phone, message } = body

    // Validate required fields
    if (!fullName || !email || !company || !companySize || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Basic input sanitization and validation
    const sanitizedFullName = String(fullName).trim().slice(0, 200)
    const sanitizedEmail = String(email).trim().toLowerCase().slice(0, 254)
    const sanitizedCompany = String(company).trim().slice(0, 200)
    const sanitizedPhone = phone ? String(phone).trim().slice(0, 50) : ''
    const sanitizedMessage = String(message).trim().slice(0, 5000)

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(sanitizedEmail)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Send email using Resend
    // Use RESEND_FROM_EMAIL from environment variables
    const fromEmail = process.env.RESEND_FROM_EMAIL
    if (!fromEmail) {
      return NextResponse.json(
        { error: 'RESEND_FROM_EMAIL is not configured' },
        { status: 500 }
      )
    }
    
    // Escape HTML to prevent XSS in email content
    const escapeHtml = (text: string) => {
      return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
    }

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ['hello@lunon.ai'],
      replyTo: sanitizedEmail,
      subject: `New Demo Request from ${escapeHtml(sanitizedFullName)} - ${escapeHtml(sanitizedCompany)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #522396; padding-bottom: 10px;">
            New Demo Request
          </h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #522396; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${escapeHtml(sanitizedFullName)}</p>
            <p><strong>Email:</strong> <a href="mailto:${escapeHtml(sanitizedEmail)}">${escapeHtml(sanitizedEmail)}</a></p>
            ${sanitizedPhone ? `<p><strong>Phone:</strong> ${escapeHtml(sanitizedPhone)}</p>` : ''}
          </div>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #522396; margin-top: 0;">Company Details</h3>
            <p><strong>Company:</strong> ${escapeHtml(sanitizedCompany)}</p>
            <p><strong>Company Size:</strong> ${escapeHtml(String(companySize))}</p>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #522396; margin-top: 0;">Use Case</h3>
            <p style="white-space: pre-wrap;">${escapeHtml(sanitizedMessage)}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This email was sent from the Lunon website demo request form.</p>
            <p>Reply directly to this email to respond to ${escapeHtml(sanitizedFullName)}.</p>
          </div>
        </div>
      `,
      text: `
New Demo Request

Contact Information:
Name: ${sanitizedFullName}
Email: ${sanitizedEmail}
${sanitizedPhone ? `Phone: ${sanitizedPhone}` : ''}

Company Details:
Company: ${sanitizedCompany}
Company Size: ${companySize}

Use Case:
${sanitizedMessage}

---
This email was sent from the Lunon website demo request form.
Reply directly to this email to respond to ${sanitizedFullName}.
      `.trim(),
    })

    if (error) {
      console.error('Resend error:', error)
      // Provide more specific error message
      const errorMessage = error instanceof Error 
        ? error.message 
        : typeof error === 'object' && error !== null && 'message' in error
        ? String(error.message)
        : 'Failed to send email'
      
      return NextResponse.json(
        { 
          error: 'Failed to send email',
          details: errorMessage,
          // Don't expose sensitive details in production, but helpful for debugging
          hint: process.env.NODE_ENV === 'development' 
            ? 'Check RESEND_API_KEY and domain verification in Resend dashboard'
            : undefined
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('API error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Internal server error'
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      },
      { status: 500 }
    )
  }
}

