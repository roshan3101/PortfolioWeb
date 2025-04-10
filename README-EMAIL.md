# Email Setup for Portfolio Contact Form

This document provides instructions on how to set up the email functionality for the contact form in your portfolio.

## Prerequisites

- A Gmail account
- Two-factor authentication enabled on your Gmail account

## Setting Up App Password for Gmail

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to Security
3. Under "Signing in to Google," select "App passwords"
4. Select "Mail" as the app and "Other" as the device (you can name it "Portfolio Contact Form")
5. Click "Generate"
6. Google will display a 16-character password. Copy this password.

## Configuring Environment Variables

1. Open the `.env.local` file in the root of your project
2. Replace the placeholder values with your actual email credentials:

```
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=your-16-character-app-password
```

## Important Security Notes

- Never commit your `.env.local` file to version control
- The app password is specific to this application and can be revoked at any time
- If you suspect your app password has been compromised, generate a new one and update your `.env.local` file

## Troubleshooting Gmail Authentication Issues

If you're experiencing authentication errors with Gmail:

1. **Make sure you're using an App Password**: Regular Gmail passwords won't work with Nodemailer due to Google's security policies. You must use an App Password.

2. **Check your 2FA status**: App Passwords only work when 2-Factor Authentication is enabled on your Google account.

3. **Verify your credentials**: Double-check that you've entered the correct email and App Password in your `.env.local` file.

4. **Check for typos**: Ensure there are no extra spaces or characters in your credentials.

5. **Try a different email provider**: If Gmail continues to cause issues, consider using a different email service like SendGrid, Mailgun, or Outlook.

## Testing the Contact Form

1. Start your development server with `npm run dev`
2. Navigate to the contact section of your portfolio
3. Fill out the form and submit
4. Check your email to verify that you received the message

## Production Deployment

When deploying to production:

1. Set the environment variables in your hosting platform (Vercel, Netlify, etc.)
2. Make sure your hosting provider supports serverless functions (for the API route)
3. Test the contact form in the production environment 