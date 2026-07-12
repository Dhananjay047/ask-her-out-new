// ========== Initialization ==========
const letter = document.getElementById('letter');
const questionModal = document.getElementById('questionModal');
const dateModal = document.getElementById('dateModal');
const successModal = document.getElementById('successModal');
const contactModal = document.getElementById('contactModal');

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const dateForm = document.getElementById('dateForm');
const dateInput = document.getElementById('dateInput');
const placeInput = document.getElementById('placeInput');
const otherPlaceGroup = document.getElementById('otherPlaceGroup');
const otherPlace = document.getElementById('otherPlace');
const selectedOptionGroup = document.getElementById('selectedOptionGroup');
const selectedOption = document.getElementById('selectedOption');
const selectedOptionLabel = document.getElementById('selectedOptionLabel');
const restartBtn = document.getElementById('restartBtn');


// ========== Letter Click Handler ==========
letter.addEventListener('click', () => {
    questionModal.style.display = 'flex';
});

// ========== YES Button Handler ==========
yesBtn.addEventListener('click', () => {
    questionModal.style.display = 'none';
    dateModal.style.display = 'flex';
});

// ========== NO Button Escape Handler ==========
noBtn.addEventListener('mouseover', (e) => {
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 50);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.zIndex = '10000';
    noBtn.style.pointerEvents = 'none';
    
    setTimeout(() => {
        noBtn.style.pointerEvents = 'auto';
    }, 100);
});

// ========== Place Selection Handler ==========
placeInput.addEventListener('change', (e) => {
    if (e.target.value === 'Other') {
        otherPlaceGroup.style.display = 'block';
        otherPlace.required = true;
    } else if(e.target.value !== '') {
        selectedOptionGroup.style.display = 'block';
        selectedOption.required = true;
        selectedOptionLabel.textContent = `✍️ Which ${e.target.value} are you interested in?`;
    } else {
        otherPlaceGroup.style.display = 'none';
        otherPlace.required = false;
        selectedOptionGroup.style.display = 'none';
        selectedOption.required = false;
    }
});

// ========== Date Form Submission ==========
dateForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const selectedDate = dateInput.value;
    const selectedPlace = placeInput.value === 'Other' ? otherPlace.value : placeInput.value;
    
    // Show success message
    const successMessage = document.getElementById('successMessage');
    successMessage.textContent = `📅 Date: ${formatDate(selectedDate)} | 📍 Place: ${selectedPlace}`;
    
    // Try to send email if configured
    await sendEmailNotification(selectedDate, selectedPlace);
    
    dateModal.style.display = 'none';
    successModal.style.display = 'flex';
});

// ========== Restart Button ==========
restartBtn.addEventListener('click', () => {
    successModal.style.display = 'none';
    dateInput.value = '';
    placeInput.value = '';
    otherPlace.value = '';
    otherPlaceGroup.style.display = 'none';
    selectedOption.value = '';
    selectedOptionGroup.style.display = 'none';
    letter.style.opacity = '1';
});

// ========== Date Formatting ==========
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// ========== Email/Notification Handlers ==========
async function sendEmailNotification(date, place) {
    // Email notification for date confirmation
    // In a real app, this would send to your backend
    console.log('Date confirmation recorded:', { date, place });
    window.location.href = "mailto:dhananjay.sahu.586@gmail.com?subject=Date Confirmation&body=You have a date scheduled for " + date + " at " + place;
}

async function sendContactEmail(name, email, message) {
    // Contact form email handler
    // In a real app, this would send to your backend
    console.log('Contact email received:', { name, email, message });
}

// ========== Contact Form Handler ==========
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;

    // Send contact email
    await sendContactEmail(name, email, message);

    // Show success feedback
    alert('✨ Message sent successfully! Thank you for reaching out! 💌');

    // Reset form
    contactForm.reset();
    contactModal.style.display = 'none';
});

// ========== Page Load Logic ==========
window.addEventListener('DOMContentLoaded', () => {
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
});

// ========== Modal Close on Outside Click ==========
window.addEventListener('click', (e) => {
    if (e.target === questionModal) {
        questionModal.style.display = 'none';
    }
    if (e.target === dateModal) {
        // Don't allow closing this one by clicking outside for better UX
    }
    if (e.target === successModal) {
        successModal.style.display = 'none';
    }
    if (e.target === contactModal) {
        contactModal.style.display = 'none';
    }
});

// ========== Prevent Text Selection on Letter ==========
letter.addEventListener('selectstart', (e) => {
    e.preventDefault();
});
