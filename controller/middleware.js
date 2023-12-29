import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();

export const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token diperlukan' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token tidak valid', error: err.message });
    }
    req.user = user;
    next();
  });
};

