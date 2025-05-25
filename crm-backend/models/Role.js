import { DataTypes } from 'sequelize';

export default (sequelize) => {
  return sequelize.define('Role', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    roleName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  });
};
