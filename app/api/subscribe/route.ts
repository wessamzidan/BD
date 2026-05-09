import { NextRequest, NextResponse } from 'next/server'

// Types
interface SubscribeRequest {
  name: string
  email: string
  source?: string
}

interface BrevoContact {
  email: string
  attributes: {
    FIRSTNAME: string
    LASTNAME: string
    SOURCE: string
  }
  listIds: number[]
  updateEnabled: boolean
}

// Environment variables
const BREVO_API_KEY = process.env.BREVO_API_KEY
const BREVO_LIST_ID = parseInt(process.env.BREVO_LIST_ID || '2')
const BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL || 'info@alrawaabit.com'
const BREVO_SENDER_NAME = process.env.BREVO_SENDER_NAME || 'الروابط - Alrawaabit'
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'wessam@alrawaabit.com'

const ERPNEXT_URL = process.env.ERPNEXT_URL
const ERPNEXT_API_KEY = process.env.ERPNEXT_API_KEY
const ERPNEXT_API_SECRET = process.env.ERPNEXT_API_SECRET

// Add contact to Brevo
async function addToBrevo(data: SubscribeRequest): Promise<{ success: boolean; error?: string }> {
  if (!BREVO_API_KEY) {
    console.log('[v0] Brevo API key not configured, skipping...')
    return { success: false, error: 'Brevo not configured' }
  }

  const nameParts = data.name.trim().split(' ')
  const firstName = nameParts[0] || ''
  const lastName = nameParts.slice(1).join(' ') || ''

  const contact: BrevoContact = {
    email: data.email,
    attributes: {
      FIRSTNAME: firstName,
      LASTNAME: lastName,
      SOURCE: data.source || 'Donald Miller Library',
    },
    listIds: [BREVO_LIST_ID],
    updateEnabled: true,
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify(contact),
    })

    if (!response.ok) {
      const error = await response.json()
      // Contact already exists is not an error
      if (error.code === 'duplicate_parameter') {
        return { success: true }
      }
      throw new Error(error.message || 'Failed to add contact to Brevo')
    }

    return { success: true }
  } catch (error) {
    console.error('[v0] Brevo error:', error)
    return { success: false, error: String(error) }
  }
}

// Send notification email via Brevo
async function sendNotificationEmail(data: SubscribeRequest): Promise<{ success: boolean; error?: string }> {
  if (!BREVO_API_KEY) {
    return { success: false, error: 'Brevo not configured' }
  }

  const emailPayload = {
    sender: {
      name: BREVO_SENDER_NAME,
      email: BREVO_SENDER_EMAIL,
    },
    to: [{ email: NOTIFICATION_EMAIL, name: 'Wessam Zidan' }],
    subject: `مشترك جديد: ${data.name}`,
    htmlContent: `
      <div dir="rtl" style="font-family: 'IBM Plex Sans Arabic', Arial, sans-serif; padding: 20px; background: #f5f5f5;">
        <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; padding: 30px;">
          <h2 style="color: #1e3a5f; margin-bottom: 20px;">مشترك جديد في مكتبة Donald Miller</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0 0 10px 0;"><strong>الاسم:</strong> ${data.name}</p>
            <p style="margin: 0 0 10px 0;"><strong>البريد الإلكتروني:</strong> ${data.email}</p>
            <p style="margin: 0;"><strong>المصدر:</strong> ${data.source || 'Donald Miller Library'}</p>
          </div>
          
          <p style="color: #666; font-size: 14px;">
            تم استلام هذا الاشتراك من موقع Donald Miller Business Library
          </p>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          
          <p style="color: #999; font-size: 12px; text-align: center;">
            الروابط - Alrawaabit | alrawaabit.com
          </p>
        </div>
      </div>
    `,
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify(emailPayload),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Failed to send notification email')
    }

    return { success: true }
  } catch (error) {
    console.error('[v0] Notification email error:', error)
    return { success: false, error: String(error) }
  }
}

// Send welcome email to subscriber
async function sendWelcomeEmail(data: SubscribeRequest): Promise<{ success: boolean; error?: string }> {
  if (!BREVO_API_KEY) {
    return { success: false, error: 'Brevo not configured' }
  }

  const firstName = data.name.split(' ')[0]

  const emailPayload = {
    sender: {
      name: BREVO_SENDER_NAME,
      email: BREVO_SENDER_EMAIL,
    },
    to: [{ email: data.email, name: data.name }],
    subject: `مرحباً ${firstName}! ملخص Donald Miller جاهز للتحميل`,
    htmlContent: `
      <div dir="rtl" style="font-family: 'IBM Plex Sans Arabic', Arial, sans-serif; padding: 20px; background: #f5f5f5;">
        <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; padding: 30px;">
          <h1 style="color: #1e3a5f; margin-bottom: 10px;">مرحباً ${firstName}!</h1>
          <p style="color: #666; font-size: 16px; line-height: 1.8;">
            شكراً لاشتراكك في مكتبة Donald Miller للبيزنس.
          </p>
          
          <div style="background: linear-gradient(135deg, #1e3a5f, #2563eb); padding: 25px; border-radius: 10px; margin: 25px 0; text-align: center;">
            <p style="color: white; margin: 0 0 15px 0; font-size: 18px;">ملخص نظام الطائرة و StoryBrand</p>
            <a href="https://donaldmiller.wessamzidan.com/download/summary.pdf" 
               style="display: inline-block; background: #d4a853; color: #1e3a5f; padding: 12px 30px; border-radius: 25px; text-decoration: none; font-weight: bold;">
              تحميل الملخص PDF
            </a>
          </div>
          
          <h3 style="color: #1e3a5f; margin-top: 30px;">تواصل معنا</h3>
          <p style="color: #666; line-height: 1.8;">
            نحن في الروابط نساعد الشركات الصغيرة على النمو من خلال الأنظمة الرقمية والتسويق.
          </p>
          
          <div style="margin: 20px 0;">
            <a href="https://wa.me/201111306090" style="display: inline-block; margin: 5px; padding: 10px 20px; background: #25D366; color: white; border-radius: 5px; text-decoration: none;">واتساب</a>
            <a href="https://www.linkedin.com/in/wessamzidan/" style="display: inline-block; margin: 5px; padding: 10px 20px; background: #0077B5; color: white; border-radius: 5px; text-decoration: none;">لينكد إن</a>
            <a href="https://cal.com/rawaabit/30min" style="display: inline-block; margin: 5px; padding: 10px 20px; background: #d4a853; color: #1e3a5f; border-radius: 5px; text-decoration: none;">احجز استشارة</a>
          </div>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          
          <p style="color: #999; font-size: 12px; text-align: center;">
            الروابط - Alrawaabit | 
            <a href="https://alrawaabit.com" style="color: #2563eb;">alrawaabit.com</a> | 
            <a href="https://wessamzidan.com" style="color: #2563eb;">wessamzidan.com</a>
          </p>
        </div>
      </div>
    `,
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify(emailPayload),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Failed to send welcome email')
    }

    return { success: true }
  } catch (error) {
    console.error('[v0] Welcome email error:', error)
    return { success: false, error: String(error) }
  }
}

// Create lead in ERPNext
async function createERPNextLead(data: SubscribeRequest): Promise<{ success: boolean; error?: string }> {
  if (!ERPNEXT_URL || !ERPNEXT_API_KEY || !ERPNEXT_API_SECRET) {
    console.log('[v0] ERPNext not configured, skipping...')
    return { success: false, error: 'ERPNext not configured' }
  }

  const nameParts = data.name.trim().split(' ')
  const firstName = nameParts[0] || ''
  const lastName = nameParts.slice(1).join(' ') || ''

  const leadData = {
    doctype: 'Lead',
    first_name: firstName,
    last_name: lastName,
    email_id: data.email,
    source: 'Website',
    lead_name: data.name,
    notes: `Source: ${data.source || 'Donald Miller Library'}\nSubscribed via website form`,
  }

  try {
    const response = await fetch(`${ERPNEXT_URL}/api/resource/Lead`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `token ${ERPNEXT_API_KEY}:${ERPNEXT_API_SECRET}`,
      },
      body: JSON.stringify(leadData),
    })

    if (!response.ok) {
      const error = await response.json()
      // Lead already exists is not a critical error
      if (error.exc_type === 'DuplicateEntryError') {
        return { success: true }
      }
      throw new Error(error.message || 'Failed to create ERPNext lead')
    }

    return { success: true }
  } catch (error) {
    console.error('[v0] ERPNext error:', error)
    return { success: false, error: String(error) }
  }
}

// Main API handler
export async function POST(request: NextRequest) {
  try {
    const body: SubscribeRequest = await request.json()

    // Validate input
    if (!body.email || !body.name) {
      return NextResponse.json(
        { success: false, error: 'الاسم والبريد الإلكتروني مطلوبان' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: 'البريد الإلكتروني غير صحيح' },
        { status: 400 }
      )
    }

    // Run all integrations in parallel
    const [brevoResult, erpResult, notificationResult, welcomeResult] = await Promise.all([
      addToBrevo(body),
      createERPNextLead(body),
      sendNotificationEmail(body),
      sendWelcomeEmail(body),
    ])

    // Log results for debugging
    console.log('[v0] Subscribe results:', {
      brevo: brevoResult.success,
      erpnext: erpResult.success,
      notification: notificationResult.success,
      welcome: welcomeResult.success,
    })

    // Return success if at least Brevo worked (primary integration)
    return NextResponse.json({
      success: true,
      message: 'تم الاشتراك بنجاح! تحقق من بريدك الإلكتروني',
      integrations: {
        brevo: brevoResult.success,
        erpnext: erpResult.success,
        notification: notificationResult.success,
        welcome: welcomeResult.success,
      },
    })
  } catch (error) {
    console.error('[v0] Subscribe API error:', error)
    return NextResponse.json(
      { success: false, error: 'حدث خطأ، حاول مرة أخرى' },
      { status: 500 }
    )
  }
}

// Health check
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    integrations: {
      brevo: !!BREVO_API_KEY,
      erpnext: !!(ERPNEXT_URL && ERPNEXT_API_KEY),
    },
  })
}
