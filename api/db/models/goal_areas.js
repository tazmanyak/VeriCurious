/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('goal_areas', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true, autoIncrement: true
    },
    area: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    timestamps: false, tableName: 'goal_areas'
  });
};
