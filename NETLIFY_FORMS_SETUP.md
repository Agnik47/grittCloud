# Netlify Forms Integration Guide

This document explains the Netlify Forms integration implemented in this project.

## What Changed

### 1. CTA Contact Form (`src/sections/CTA.jsx`)

**Added Netlify Forms attributes:**
- `name="contact"` - Form identifier in Netlify dashboard
- `method="POST"` - Required for form submission
- `data-netlify="true"` - Enables Netlify form detection
- `<input type="hidden" name="form-name" value="contact" />` - Required for AJAX submissions

**Added proper name attributes to all inputs:**
- `firstName` - First name field
- `email` - Email field
- `company` - Company field
- `interest` - Interest selection dropdown

**Implemented AJAX submission:**
- Prevents page reload on submit
- Shows success message inline
- Allows users to submit multiple times
- Displays loading state while submitting

### 2. Navbar Modal Form (`src/sections/Navbar.jsx`)

**Added Netlify Forms attributes:**
- `name="get-in-touch"` - Form identifier in Netlify dashboard
- `method="POST"` - Required for form submission
- `data-netlify="true"` - Enables Netlify form detection
- `<input type="hidden" name="form-name" value="get-in-touch" />` - Required for AJAX submissions

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
