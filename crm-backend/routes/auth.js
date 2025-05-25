import express from 'express';
import bcrypt from 'bcrypt';
import models from '../models/index.js';

const router = express.Router();

// Register user route
router.post('/register', async (req, res) => {
  try {
    const { username, password, fullName, roleName } = req.body;

    if (!username || !password || !roleName) {
      return res.status(400).json({ error: 'Username, password and role are required' });
    }

    // Check if user already exists
    const existingUser = await models.User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(409).json({ error: 'Username already exists' });
    }

    // Find role
    const role = await models.Role.findOne({ where: { roleName } });
    if (!role) {
      return res.status(400).json({ error: 'Invalid role' });
    }

    // Hash password
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // Create user
    const newUser = await models.User.create({
      username,
      passwordHash,
      fullName,
      roleId: role.id,
    });

    return res.status(201).json({ message: 'User created', userId: newUser.id });
  } catch (error) {
    console.error('Register error:', error);
    return res.status(500).json({ error: 'Server error' });
  }
});

export default router;
