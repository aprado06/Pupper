module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define('pet', {
    bio: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    birthday: DataTypes.DATEONLY,
    hobbies: DataTypes.STRING,
    profileImage: DataTypes.STRING,
  });

  Pet.associate = (models) => {
    models.Pet.belongsTo(models.User);
  };
  
  return Pet;
};
