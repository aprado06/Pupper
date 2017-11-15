module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('profile', {
    bio: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    hobbies: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    profileImage: {
      type :DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    zipCode: DataTypes.INTEGER,
  });

  Profile.associate = (models) => {
    models.Profile.belongsTo(models.User);
  };


  return Profile;
};
