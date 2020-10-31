'use strict';

const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(100)
    },
      userName: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(50)
    },
      hashedPassword: {
      allowNull: false,
      type: DataTypes.STRING.BINARY
    },
    artistName: {
      allowNull: true,
      type: DataTypes.STRING(50)
    },
      artist: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
      bio: {
        allowNull: true,
        type: DataTypes.TEXT
    },
      genre: {
        allowNull: true,
        type: DataTypes.STRING
    },
      imgUrl: {
        allowNull: true,
        type: DataTypes.STRING
    },
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Follower, { foreignKey: "userId" });
    User.hasMany(models.Follower, { foreignKey: "followingId" });
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  }

  return User;
};