const roles = require('../roles');

function checkRole(allowedRoles = []) {
  return (req, res, next) => {
    const user = req.user;

    // TEMP: hardcoded user (replace later with real auth)
    req.user = {
      id: 1,
      name: 'Alice',
      role: roles.SCHOOL_ADMIN, // change to test
    };

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Forbidden: insufficient permissions' });
    }

    next();
  };
}

module.exports = { checkRole };