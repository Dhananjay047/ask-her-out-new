# 📧 EmailJS Configuration Helper

## What is EmailJS?

EmailJS is a free service that lets you send emails from your website without a backend server. Perfect for this project!

---

## 🎯 Setup Instructions

### Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Click **Sign Up** (or **Create Account**)
3. Sign up with email, Google, or GitHub
4. Verify your email

---

### Step 2: Add Email Service

1. Go to **Dashboard**
2. Click **Email Services** (left sidebar)
3. Click **Add New Service**
4. Choose your email provider:
   - **Gmail** (recommended, free tier)
   - Outlook
   - Yahoo
   - Other SMTP

#### If you choose Gmail:
- Click "Gmail"
- Connect your Gmail account
- Click "Authorize"
- Done! Your service is added

5. Copy your **Service ID** (looks like: `service_xxxxxxxxxxxxx`)

---

### Step 3: Create Email Template

1. Click **Email Templates** (left sidebar)
2. Click **Create New Template**
3. Name: `DateProposal` (or any name)
4. Subject: `Your Date Details! 💕`

In the **Email Content** section, use this template:

```
Hello! 👋

Great news! She's agreed to a date with you! 🎉

📅 Date: {{date}}
📍 Place: {{place}}

{{message}}

Now go and have an amazing time! 

Good luck! 💕
```

5. Click **Save**
6. Copy your **Template ID** (looks like: `template_xxxxxxxxxxxxx`)

---

### Step 4: Get Your API Keys

1. Go to **Account** (top right dropdown)
2. Click **API**
3. You'll see:
   - **Public Key**: Copy this (looks like: `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`)

Save these 3 values:
- ✅ Service ID
- ✅ Template ID  
- ✅ Public Key

---

## 🔐 How to Use Credentials

1. Open the app in your browser
2. You'll see a **configuration modal** on first load
3. Paste your credentials:
   - Service ID
   - Template ID
   - Public Key
   - Your email address
4. Click **Save & Continue**

The credentials are saved in your **browser's LocalStorage**, so you only need to do this once!

---

## ✉️ What the Email Contains

When she confirms a date, you'll receive an email with:
- 📅 The date she selected
- 📍 The place she chose
- 💕 A nice message
- A reminder to have an amazing time!

---

## 🛡️ Security Notes

- Your credentials are stored **only in the browser** (LocalStorage)
- They are NOT sent to any server (except EmailJS)
- EmailJS is a trusted service used by millions
- Your Gmail/email account is NOT exposed
- Each device has its own credentials

---

## 🆓 Free Tier

EmailJS free tier includes:
- ✅ 200 emails per month
- ✅ Unlimited templates
- ✅ Unlimited email addresses
- ✅ Full API access

Perfect for personal use!

---

## 🐛 Troubleshooting

### Email not sending?

1. **Check credentials are correct**
   - Service ID: `service_xxxxx...`
   - Template ID: `template_xxxxx...`
   - Public Key: Long string of characters

2. **Verify email service is connected**
   - Go to EmailJS Dashboard
   - Check Email Services shows your provider
   - Status should be "Connected"

3. **Test the template**
   - In Email Templates section
   - Click your template
   - Click "Test It" button
   - Check if test email arrives

4. **Check spam folder**
   - Sometimes emails go to spam
   - Add EmailJS to trusted contacts

### Still not working?

1. Try a different email provider (Gmail works best)
2. Check browser console for errors (F12)
3. Recreate the template from scratch
4. Verify all IDs are copied exactly

---

## 📝 Template Variables Explained

In your EmailJS template, you can use:

- `{{to_email}}` - Your email address (where you receive notifications)
- `{{date}}` - The date she selected (formatted)
- `{{place}}` - The location she chose
- `{{message}}` - Custom message from the app

---

## 🎉 You're All Set!

Once configured, every time she confirms a date, you'll instantly know! 

No more waiting and wondering - you'll get immediate email notification with all the details.

---

## 💡 Pro Tips

1. **Set up multiple templates** for different occasions
2. **Test before she uses it** - Send yourself a test
3. **Keep credentials safe** - Don't share them
4. **Monthly limit**: 200 emails is plenty for personal use

---

For more help, visit **emailjs.com** or check their **docs** section.

Good luck! 💕
