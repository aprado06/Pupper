module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('profile', {
    bio: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  Profile.associate = (models) => {
    models.Post.belongsTo(models.User);
  }

  return Profile;
};
