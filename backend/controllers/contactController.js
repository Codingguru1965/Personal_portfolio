import Contact from '../models/Contact.js';

// Regular expression for validating email addresses
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Handle new contact form submissions
 * Route: POST /api/contact
 */
export const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate existence and non-empty strings
    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Name is required'
      });
    }

    if (!email || typeof email !== 'string' || !email.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Email is required'
      });
    }

    // Validate email format
    const trimmedEmail = email.trim().toLowerCase();
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Message is required'
      });
    }

    // Save contact to database
    const newContact = await Contact.create({
      name: name.trim(),
      email: trimmedEmail,
      message: message.trim()
    });

    return res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      data: {
        id: newContact._id,
        createdAt: newContact.createdAt
      }
    });
  } catch (error) {
    console.error('[Contact Controller Error]:', error);

    // Mongoose validation error
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    }

    // Generic server error
    return res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.'
    });
  }
};
