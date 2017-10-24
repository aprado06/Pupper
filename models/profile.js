module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('profile', {
    bio: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    birthday: DataTypes.DATEONLY,
    hobbies: DataTypes.STRING,
  });

  Profile.associate = (models) => {
    Profile.hasOne(models.User);
  };


  return Profile;
};
