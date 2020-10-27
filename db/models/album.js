'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    title: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    releaseDate: {
      allowNull: true,
      type: DataTypes.DATE
    },
    imgUrl: {
      allowNull: true,
      type: DataTypes.STRING(100)
    },
    description: {
      allowNull: true,
      type: DataTypes.TEXT
    },
    credit: {
      allowNull: true,
      type: DataTypes.TEXT
    },
    artistId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users' }
    },
  }, {});
  Album.associate = function(models) {
    Album.hasMany(models.Track, { foreignKey: "albumId" }, { onDelete: "cascade", hooks:true });
    Album.belongsTo(models.User, { foreignKey: "artistId" });

  };
  return Album;
};