const nodemailer = require('nodemailer');

// Fetch items from a list (replace this with your own logic)
function fetchItems() {
  return new Promise((resolve, reject) => {
    // Simulating async fetch
    setTimeout(() => {
      const items = ['Item 1', 'Item 2', 'Item 3'];
      resolve(items);
    }, 2000);
  });
}

// Send email with the fetched items
function sendEmail(items) {
  // Create a nodemailer transporter with your email service details
  const transporter = nodemailer.createTransport({
    service: 'YourEmailService',
    auth: {
      user: 'YourEmailAddress',
      pass: 'YourEmailPassword',
    },
  });

  // Compose the email message
  const message = {
    from: 'YourEmailAddress',
    to: 'RecipientEmailAddress',
    subject: 'Fetched Items',
    text: items.join('\n'),
  };

  // Send the email
  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

// Fetch items and send email
fetchItems()
  .then(items => sendEmail(items))
  .catch(error => console.error('Error fetching items:', error));