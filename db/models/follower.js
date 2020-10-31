'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follower = sequelize.define('Follower', {
    followingId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users' }
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users' }
    },
  }, {});
  Follower.associate = function(models) {
    Follower.belongsTo(models.User, { foreignKey: "userId" }, { onDelete: "cascade", hooks:true });
  };
  return Follower;
};