/**
 * Middleware to Check Authentication
 * Single function that will run before our final function
 */
const jwt = require('jsonwebtoken');

module.exports  = (req, res, next) => {
   // Get token from headers
   // "authorization" is a chosen name (industy std)
   try {
      const token = req.headers.authorization.split(" ")[1];
      const parseToken = jwt.verify(token, process.env.JWT_SECRET);
      next();
   }
   catch( error ) {
      res.status(401).json({
         message: "Authentication failed. No token."
      });
   }

}
