module.exports = (sequelize, DataTypes) => {
  const Connection = sequelize.define('connection', {
    connection_status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  Connection.associate = (models) => {
    models.Connection.hasMany(models.User);
  };
  
  return Connection;
};
