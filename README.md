# Studio Automata — Static Site

Single-page marketing site for a B2B AI automation consulting brand. Built with React 18 + Vite 5 + Tailwind CSS 3.

## Features
- Modern typographic hero with value prop & stats
- Problem framing section
- Solutions / offers cards
- Process timeline
- Credibility / proof grid
- Call to action form with Netlify Forms integration
- Modal contact form with Netlify Forms integration
- Accessible semantic HTML
- Fully responsive

## Netlify Forms Setup

This site uses [Netlify Forms](https://docs.netlify.com/manage/forms/setup/) to handle form submissions. Two forms are integrated:

### 1. Contact Form (CTA Section)
- **Form name**: `contact`
- **Fields**: First Name, Email, Company, Interest
- Located in the main contact section (`#contact`)

### 2. Get in Touch Form (Navbar Modal)
- **Form name**: `get-in-touch`
- **Fields**: Organization Name, Email, Person Name, Contact Number
- Accessible via the "Get in Touch" button in the navbar

### How It Works
1. Forms are automatically detected by Netlify during deployment
2. Both forms use AJAX submission for better UX
3. Success messages are shown inline without page refresh
4. Form submissions are available in your Netlify dashboard under **Forms**

### Viewing Submissions
After deploying to Netlify:
1. Go to your site's Netlify dashboard
2. Navigate to **Forms** in the sidebar
3. Enable form detection if not already enabled
4. View all submissions with timestamps and data

### Notifications (Optional)
You can set up email notifications or webhook integrations:
1. In Netlify UI, go to **Forms** → **Notifications**
2. Add notification for form submissions
3. Configure email addresses or webhook URLs

## Development
Install deps then run dev server:

```sh
npm install
npm run dev
```

Build production assets:
```sh
npm run build
npm run preview
```

## Customization
Adjust colors, fonts, sizing in `tailwind.config.cjs`. All sections in `src/sections/`.

## License
MIT (content is sample / placeholder). Replace with real copy & analytics scripts before launch.
