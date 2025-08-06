import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export const protect = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ msg: "No token provided" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
};

export const adminOnly = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ msg: "Access denied: Admins only" });
  }
  next();
};
