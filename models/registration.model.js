//Utils
const { db, DataTypes } = require('../utils/database.util');

const Registration = db.define('registration', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER
  },
  entranceTime: {
    allowNull: false,
    type: DataTypes.DATE
  },
  exitTime: {
    allowNull: true,
    type: DataTypes.DATE
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Worging'
  }
});

module.exports = { Registration };