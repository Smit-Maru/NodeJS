// const db = require('../config/db')

// const getAllUsers = async () => {
//   const [rows] = await db.query(
//     'SELECT * FROM users'
//   )

//   return rows;
// }

// const getUserById = async (id) => {
//   const [rows] = await db.query(
//       'SELECT * FROM users WHERE id = ?',
//       [id]
//   );

//   return rows[0];
// };

// const addUser = async (name, email, age) => {
//   const [result] = await db.query(
//     'INSERT INTO users (name, email, age) VALUES (?,?,?)',[name, email, age]
//   )

//   return result;
// }

// const deleteUserById = async (id) => {
//   const [rows] = await db.query(
//     'DELETE FROM users WHERE id = ?',[id]
//   )

//   return rows;
// }

// const updateUserById = async (id,data) => {
//   const [rows] = await db.query(
//     'UPDATE users SET name = ? , email = ?, age = ? WHERE id = ?',[data.name, data.email, data.age, id]
//   )

//   return rows; 
// }

// module.exports = {
//   getAllUsers,
//   getUserById,
//   addUser,
//   deleteUserById,
//   updateUserById
// }

const { DataTypes } = require('sequelize')

const sequelize = require('../config/database')

const User = sequelize.define(
  'User',
  {
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    name:{
      type:DataTypes.STRING,
      allowNull: false
    },
    email:{
      type:DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    age:{
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },
  {
    tableName: 'users',
    timestamps: false
  }
);

module.exports = User