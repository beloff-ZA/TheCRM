import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false, // set true for debugging SQL queries
});

// Import models
import User from './user.js';
import Role from './Role.js';

// Initialize models
const models = {
  User: User(sequelize),
  Role: Role(sequelize),
};

// Setup associations
models.Role.hasMany(models.User, { foreignKey: 'roleId' });
models.User.belongsTo(models.Role, { foreignKey: 'roleId' });

export { sequelize };
export default models;
