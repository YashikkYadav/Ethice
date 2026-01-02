# EmailJS Setup Instructions

## Steps to Configure EmailJS for Contact Form

1. **Sign up for EmailJS**

   - Visit [EmailJS](https://www.emailjs.com/) and create an account
   - Complete the registration process

2. **Create an Email Service**

   - Go to the EmailJS Dashboard
   - Click on "Email Services" in the left sidebar
   - Click "Add New Service"
   - Select Gmail (or your preferred email provider)
   - Follow the authentication process
   - Note the Service ID for later use

3. **Create an Email Template**

   - Go to "Email Templates" in the left sidebar
   - Click "Create New Template"
   - Design your email template using the visual editor
   - Include the following variables in your template:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{phone}}` - Phone number
     - `{{company}}` - Company name
     - `{{job_title}}` - Job title
     - `{{message}}` - Message content
     - `{{to_email}}` - Recipient email (sharma@gmail.com)
   - Save the template and note the Template ID

4. **Get Your Public Key**

   - Go to "Account" in the left sidebar
   - Find your "Public Key" in the API Keys section
   - Copy this key for later use

5. **Update Environment Variables**

   - Open the `.env.local` file in your project
   - Replace the placeholder values with your actual EmailJS credentials:
     ```
     NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
     ```

6. **Test the Implementation**
   - Start your Next.js development server: `npm run dev`
   - Navigate to the contact form page
   - Fill out the form and submit
   - Check if the email is sent successfully

## Troubleshooting

- If emails are not sending, verify that all environment variables are correctly set
- Ensure that your EmailJS account has been properly configured with your email provider
- Check the browser console for any error messages
- Make sure you're using the correct Service ID and Template ID
