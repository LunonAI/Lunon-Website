# Vercel Deployment Setup

## Environment Variables

Make sure to add these environment variables in your Vercel project settings:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following:

### Required:
- `RESEND_API_KEY` - Your Resend API key (get it from https://resend.com/api-keys)

### Optional:
- `RESEND_FROM_EMAIL` - Custom "from" email address (e.g., `Lunon Website <noreply@lunon.ai>`)
  - If not set, defaults to `Lunon Website <onboarding@resend.dev>`
  - **Note:** To use a custom domain email, you need to verify your domain in Resend first

## Domain Verification (Recommended for Production)

1. Go to https://resend.com/domains
2. Add and verify your domain (`lunon.ai`)
3. Once verified, update `RESEND_FROM_EMAIL` to use your domain:
   ```
   Lunon Website <noreply@lunon.ai>
   ```

## Testing

After deploying to Vercel:
1. Visit your deployed site
2. Go to `/demo` page
3. Submit a test form
4. Check `hello@lunon.ai` inbox for the email

## API Route

The demo form uses the API route at `/api/demo-request` which:
- Validates all form inputs
- Sanitizes data to prevent XSS attacks
- Sends formatted emails via Resend
- Handles errors gracefully

