const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("../model/user.model");

const Book = sequelize.define(
  "Book",
  {
    book_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    cover: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: "Tapa blanda",
    },
    photo: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: "",
    },
  },
  {
    tableName: "books",
    timestamps: false,
  }
);

User.hasMany(Book, {
  foreignKey: "user_id",
  targetKey: "user_id",
});
Book.belongsTo(User, {
  foreignKey: "user_id",
  targetKey: "user_id",
});

module.exports = Book;
