# 💌 Ask Her Out - Interactive Date Proposal Web App

A beautiful, interactive web application to ask your crush out on a date! This project uses HTML, CSS, and JavaScript with EmailJS for sending email notifications.

## 🎯 Features

- **Beautiful Letter Interface**: Click the animated letter to start the journey
- **Question Modal**: Adorable question asking "Will you go out with me?"
- **Escaping NO Button**: The NO button runs away when you try to hover over it (so she can only click YES!)
- **Date & Place Selection**: Beautiful form to select date and preferred venue
- **Email Notifications**: Get notified when she selects a date and place
- **Responsive Design**: Works perfectly on mobile and desktop
- **Smooth Animations**: Beautiful animations and transitions throughout

## 📋 App Flow

1. **First Page**: Shows a beautiful letter with a call-to-action
2. **Click Letter**: Opens modal asking "Will you go out with me?" with YES/NO buttons
3. **NO Button Escapes**: When hovering on NO, it moves to a random position
4. **Click YES**: Opens date and place selection form
5. **Select Date & Place**: Choose preferred date and venue
6. **Submit**: Email gets sent with date and place details
7. **Success Page**: Confirmation screen with date details

## 🚀 Quick Start (Local Testing)

1. Download or clone the repository
2. Open `index.html` in your web browser
3. Click the letter to begin!

**Note**: Email notifications require setup (see below)

## 📧 Setting Up Email Notifications

### Step 1: Get EmailJS Credentials

1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Go to your Dashboard
4. Navigate to **Email Services** and add a new service (Gmail, Outlook, etc.)
5. Go to **Email Templates** and create a new template with these variables:
   - `{{to_email}}` - Recipient email
   - `{{date}}` - Selected date
   - `{{place}}` - Selected place
   - `{{message}}` - Custom message

### Step 2: Get Your Credentials

- **Service ID**: Found in Email Services section
- **Template ID**: Found in Email Templates section
- **Public Key**: Found in Account → API Tokens

### Step 3: Configure the App

When you first open the app, it will prompt you for:
- Service ID
- Template ID
- Public Key
- Your Email Address

Fill these in and click "Save & Continue"

**Note**: Credentials are saved in browser's LocalStorage for convenience

## 🌐 Deploying on GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com)
2. Click **New Repository**
3. Name it `ask-her-out` (or any name)
4. Select **Public**
5. Click **Create Repository**

### Step 2: Push Your Code

Open terminal in your project folder:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Ask her out app"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/ask-her-out.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment", select:
   - **Source**: Deploy from a branch
   - **Branch**: main
   - **Folder**: / (root)
4. Click **Save**

Your app will be live at: `https://YOUR_USERNAME.github.io/ask-her-out/`

### Step 4: Share the Link

Send her the URL and she'll see your beautiful proposal app! 💕

## 📁 Project Structure

```
ask-her-out/
├── index.html       # Main HTML file
├── styles.css       # All styling
├── script.js        # All functionality
└── README.md        # This file
```

## 🎨 Customization

### Change Colors

In `styles.css`, update the gradient colors:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Change Letter Text

In `index.html`, modify the `.letter-content` section:
```html
<p class="message">
    Your custom message here...
</p>
```

### Add More Place Options

In `index.html`, add to the `#placeInput` select:
```html
<option value="Your Custom Place">🎯 Your Custom Place</option>
```

### Change Button Text

Modify button text directly in `index.html`

## 🔒 Security Notes

- Email credentials are stored in browser LocalStorage
- Never commit credentials to GitHub
- If sharing code with others, they need their own EmailJS credentials
- EmailJS has a free tier perfect for personal projects

## 💡 Tips for Success

1. **Customize the Letter**: Make it personal with your own message
2. **Test Thoroughly**: Try the app on mobile to ensure it looks good
3. **Check Email Template**: Make sure your EmailJS template is properly set up
4. **Share Confidently**: The app is fully functional and beautiful!

## 🐛 Troubleshooting

### Emails not sending?
- Check if EmailJS is configured in the app
- Verify Service ID, Template ID, and Public Key are correct
- Check your email service is verified in EmailJS dashboard

### Button positions weird on mobile?
- The app is fully responsive, but you can adjust breakpoints in CSS

### Letter not showing?
- Make sure all files are in the same directory
- Check browser console for errors (F12)

## 📱 Browser Compatibility

- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Mobile Browsers ✅

## 🌟 Features Explanation

### Escaping NO Button
The NO button uses mouse hover detection to move to a random position on the screen, making it nearly impossible to click! This adds a fun, playful element to the proposal.

### Beautiful Animations
- Floating hearts in the background
- Bouncing letter emoji
- Smooth modal transitions
- Pulsing text animations

## 📞 Support

If you encounter any issues:
1. Check the browser console (F12) for error messages
2. Verify all files are in the same directory
3. Ensure EmailJS is properly configured
4. Try clearing browser cache and refreshing

## 💕 Good Luck!

This app is designed to make your proposal memorable and fun. Customize it, make it personal, and go get that date! 

Let us know how it goes! 🎉

---

**Made with ❤️ for those brave enough to ask**
