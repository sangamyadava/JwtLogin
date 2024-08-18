// Please don't change the pre-written code
// Import the necessary modules here
import jwt from 'jsonwebtoken';
const jwtAuth = (req, res, next) => {
  // Write your code here
  // const token = req.header('Authorization');
  const token = req.cookies.jwtToken;
  if(token){

    jwt.verify(token, 'Sangam@123', (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Forbidden: Invalid token' });
      }

      req.user = user; // Attaching the decoded user information to the request object
      next(); // Proceed to the next middleware or route handler
    });
  } else {
    res.status(401).json({ message: 'Unauthorized: No token provided' });
  }
};

export default jwtAuth;
