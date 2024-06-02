import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];  // Get the token from the header
    const token = authHeader && authHeader.split(' ')[1];  // Check if the token exists
    if (token == null) return res.sendStatus(401);  // If the token does not exist, return 401
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403);  // If the token is not valid, return 403
        req.email = decoded.email  ;  // If the token is valid, extract the email from the token and assign it to the request object
        next();
    }); 
}

