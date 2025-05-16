const jwt = require('jsonwebtoken');

const encrypt = (payload, secret) => {
  // Create a JWT with an expiration time of 1 hour
  const token = jwt.sign(payload, secret, { expiresIn: '1h' });
  return token;
};

// Example usage and testing
const testPayload = { userId: 123, username: 'testuser' };
const testSecret = 'your-secret-key';

const token = encrypt(testPayload, testSecret);
console.log('Generated Token:', token);

// Verify the token
try {
  const decoded = jwt.verify(token, testSecret);
  console.log('Decoded Token:', decoded);
} catch (error) {
  if (error.name === 'TokenExpiredError') {
    console.log('Token has expired');
  } else {
    console.log('Error verifying token:', error.message);
  }
}

module.exports = encrypt;