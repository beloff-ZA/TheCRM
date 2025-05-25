import express from 'express';
import cors from 'cors';
import models, { sequelize } from './models/index.js';
import authRoutes from './routes/auth.js';

const app = express();
app.use(express.json());

async function init() {
  try {
    await sequelize.sync({ force: true }); 
    console.log('Database & tables created!');

    await models.Role.bulkCreate([
      { roleName: 'admin' },
      { roleName: 'staff' },
      { roleName: 'parent' },
      { roleName: 'student' },
    ]);

    console.log('Roles seeded!');
  } catch (error) {
    console.error('Error initializing DB:', error);
  }
}

init();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.use('/api/auth', authRoutes);