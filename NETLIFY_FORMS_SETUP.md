# Netlify Forms Integration Guide

This document explains the Netlify Forms integration implemented in this project.

## 🚨 CRITICAL: Hidden HTML Form Required for React/Vite

**Important**: Since this is a React app built with Vite, forms are rendered client-side using JavaScript. Netlify's build process cannot detect JavaScript-rendered forms, so we **must include a hidden static HTML form** in `index.html` that matches our React form exactly.

### Why This Is Required:
- Netlify scans HTML at build time to detect forms
- React renders forms dynamically in the browser (after build)
- The hidden HTML form acts as a "template" for Netlify
- Without it, Netlify won't know the form exists

## What Changed

### 0. Hidden HTML Form in `index.html` ⭐ MOST IMPORTANT

**Added static HTML form for Netlify detection:**
```html
<form name="get-in-touch" netlify netlify-honeypot="bot-field" hidden>
  <input type="text" name="org" />
  <input type="email" name="email" />
  <input type="text" name="person" />
  <input type="tel" name="contact" />
</form>
```

This form:
- Has `netlify` attribute (enables form handling)
- Has `netlify-honeypot="bot-field"` (spam protection)
- Has `hidden` attribute (invisible to users)
- Contains ALL field names that match the React form
- Is parsed by Netlify at build time

**Without this hidden form, Netlify Forms will NOT work!**

### 1. CTA Contact Form (`src/sections/CTA.jsx`)

**Note**: This form has been replaced with a Cal.com booking widget for scheduling consultations. If you need a contact form instead, refer to the git history.

### 2. Navbar Modal Form (`src/sections/Navbar.jsx`)

### 2. Navbar Modal Form (`src/sections/Navbar.jsx`)

**Added Netlify Forms attributes:**
- `name="get-in-touch"` - Form identifier in Netlify dashboard
- `method="POST"` - Required for form submission
- `data-netlify="true"` - Enables Netlify form detection
- `data-netlify-honeypot="bot-field"` - Spam protection
- `<input type="hidden" name="form-name" value="get-in-touch" />` - Required for AJAX submissions
- Hidden honeypot field for spam filtering

**Form fields:**
- `org` - Organization name
- `email` - Email address
- `person` - Person name
- `contact` - Contact number

**Implemented AJAX submission:**
- Shows success message in modal
- Automatically closes modal after 3 seconds
- Prevents page reload
- Displays loading state

## How Netlify Forms Work

### Automatic Detection
When you deploy to Netlify, the build process:
1. Scans your HTML for forms with `data-netlify="true"` or `netlify` attribute
2. Automatically creates form handlers
3. Stores submissions in Netlify's dashboard
4. No backend code required!

### AJAX Submissions
Both forms use the `fetch` API to submit data:
```javascript
fetch("/", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: new URLSearchParams(formData).toString(),
})
```

This approach:
- Keeps users on the page
- Allows custom success messages
- Provides better UX than full page reloads

## Setup Instructions

### 1. Deploy to Netlify
Deploy your site to Netlify using any method:
- Connect your Git repository (recommended)
- Deploy via Netlify CLI
- Drag and drop your build folder

### 2. Enable Form Detection
1. Go to your site in the Netlify dashboard
2. Navigate to **Forms** in the sidebar
3. Click **Enable form detection**
4. Redeploy your site

### 3. View Submissions
After deployment:
1. Go to **Forms** in your Netlify dashboard
2. You'll see both forms listed:
   - `contact` (CTA form)
   - `get-in-touch` (Navbar modal form)
3. Click on any form to view submissions

### 4. Configure Notifications (Optional)
Set up email notifications for new submissions:
1. Go to **Forms** → **Notifications**
2. Click **Add notification**
3. Choose **Email notification** or **Webhook**
4. Configure recipient email addresses or webhook URL
5. Save settings

## Testing

### Local Testing
Forms won't work in local development (`npm run dev`) because they require Netlify's backend. To test:
1. Build your site: `npm run build`
2. Deploy to Netlify
3. Test on the live site

### Production Testing
1. Visit your deployed site
2. Fill out and submit both forms
3. Check Netlify dashboard → Forms → Submissions
4. Verify data appears correctly

## Form Spam Protection

Netlify automatically provides spam filtering:
- **Akismet integration** - Filters spam submissions
- **Honeypot field** - Can be added for extra protection
- **reCAPTCHA** - Can be enabled if needed

To add reCAPTCHA:
```html
<div data-netlify-recaptcha="true"></div>
```

## Limitations

- Maximum 100 submissions/month on free plan
- Maximum 8 MB per submission (for file uploads)
- 30-second timeout for form submissions
- No JSON form data support (must be URL-encoded)

## Troubleshooting

### Forms not appearing in dashboard?
- Ensure `data-netlify="true"` is present
- Redeploy your site after adding forms
- Check that form detection is enabled

### Submissions not saving?
- Verify hidden `form-name` input matches form name
- Check form is using POST method
- Ensure Content-Type header is correct

### 404 on form submission?
- Make sure hidden input has correct form name
- Verify form was detected during build (check deploy logs)

## Resources

- [Netlify Forms Documentation](https://docs.netlify.com/manage/forms/setup/)
- [AJAX Form Submissions](https://docs.netlify.com/manage/forms/setup/#submit-html-forms-with-ajax)
- [Form Spam Filters](https://docs.netlify.com/manage/forms/spam-filters/)
- [Forms API](https://docs.netlify.com/api/get-started/#forms)

## Support

For issues with Netlify Forms:
1. Check [Netlify Forums](https://answers.netlify.com/)
2. Review [Troubleshooting Guide](https://docs.netlify.com/manage/forms/troubleshooting-tips/)
3. Contact Netlify Support from your dashboard
