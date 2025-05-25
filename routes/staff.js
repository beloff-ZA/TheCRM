const express = require('express');
const router = express.Router();
const { checkRole } = require('../middleware/auth');
const roles = require('../roles');
const { body, param, validationResult } = require('express-validator');

// Sample in-memory staff list
let staff = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    isAdmin: true,
    role: roles.GLOBAL_ADMIN
  }
];

// GET all staff — visible to most internal roles
router.get(
  '/',
  checkRole([
    roles.GLOBAL_ADMIN,
    roles.SCHOOL_ADMIN,
    roles.FINANCE,
    roles.OPERATIONS,
    roles.STAFF,
    roles.IT,
    roles.MAINTENANCE
  ]),
  (req, res) => {
    res.json(staff);
  }
);

// GET single staff by ID — same roles as above
router.get(
  '/:id',
  checkRole([
    roles.GLOBAL_ADMIN,
    roles.SCHOOL_ADMIN,
    roles.FINANCE,
    roles.OPERATIONS,
    roles.STAFF,
    roles.IT,
    roles.MAINTENANCE
  ]),
  (req, res) => {
    const id = parseInt(req.params.id);
    const person = staff.find(s => s.id === id);
    if (!person) return res.status(404).json({ error: 'Staff not found' });
    res.json(person);
  }
);

// CREATE new staff — only global/school admins
router.post(
  '/',
  checkRole([roles.GLOBAL_ADMIN, roles.SCHOOL_ADMIN]),
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('role').notEmpty().withMessage('Role is required'),
    body('isAdmin').optional().isBoolean().withMessage('isAdmin must be true or false'),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { name, email, role, isAdmin } = req.body;

    const newStaff = {
      id: staff.length ? staff[staff.length - 1].id + 1 : 1,
      name,
      email,
      role,
      isAdmin: isAdmin || false
    };
    staff.push(newStaff);
    res.status(201).json(newStaff);
  }
);

// UPDATE staff — only global/school admins (can't edit global admin if not one)
router.put(
  '/:id',
  checkRole([roles.GLOBAL_ADMIN, roles.SCHOOL_ADMIN]),
  [
    param('id').isInt().withMessage('ID must be an integer'),
    body('email').optional().isEmail().withMessage('Valid email required'),
    body('isAdmin').optional().isBoolean().withMessage('isAdmin must be a boolean'),
    body('name').optional().isLength({ min: 1 }).withMessage('Name must not be empty'),
    body('role').optional().isString().withMessage('Role must be a string')
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const id = parseInt(req.params.id);
    const personIndex = staff.findIndex(s => s.id === id);
    if (personIndex === -1) return res.status(404).json({ error: 'Staff not found' });

    const target = staff[personIndex];

    // prevent non-global-admin from editing a global-admin
    if (
      target.role === roles.GLOBAL_ADMIN &&
      req.user.role !== roles.GLOBAL_ADMIN
    ) {
      return res.status(403).json({ error: 'You cannot modify a Global Admin' });
    }

    const { name, email, isAdmin, role } = req.body;

    if (name) target.name = name;
    if (email) target.email = email;
    if (typeof isAdmin === 'boolean') target.isAdmin = isAdmin;
    if (role) target.role = role;

    res.json(target);
  }
);

// DELETE staff — only global admins can delete
route