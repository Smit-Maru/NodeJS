// const userModel = require('../models/user.model');

// const getUsers = async (req, res) => {
//     try {
//         const users = await userModel.getAllUsers();

//         res.status(200).json({
//             success: true,
//             data: users
//         });

//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: error.message
//         });
//     }
// };


// const getUsersById = async (req, res) => {
//     try {
//         const user = await userModel.getUserById(req.params.id);

//         res.status(200).json({
//             success: true,
//             data: user
//         });

//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: error.message
//         });
//     }
// };

// const addUser = async (req, res) => {
//     try{
//         const {name, email, age} = req.body;

//         const result = await userModel.addUser(name, email, age);

//         res.status(201).json({
//             sucess: true,
//             message: 'data added sucessfully',
//             data:{
//                 name:name,
//                 email:email,
//                 age:age
//             }
//         })
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: error.message
//         });
//     }
// }

// const deleteUserById = async (req, res) => {
//     try{
//         const user = await userModel.deleteUserById(req.params.id);

//         res.status(200).json({
//             success: true,
//             message: 'user deleted sucessfully'
//         });
//     } catch (err){
//         res.status(500).json({
//             sucess: true,
//             message: 'some error ocure'
//         })
//     }
// }

// const updateUserById = async (req, res) => {
//     try{
//         const user = await userModel.updateUserById(req.params.id, req.body)

//         res.status(200).json({
//             success: true,
//             data: user
//         });
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }

// module.exports = {
//     getUsers,
//     getUsersById,
//     addUser,
//     deleteUserById,
//     updateUserById
// };

const User = require('../models/user.model');

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getUsersById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const deletedCount = await User.destroy({ where: { id: req.params.id } });
    if (!deletedCount) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.status(200).json({ success: true, message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    await user.update(req.body);
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getUsers,
  getUsersById,
  addUser,
  deleteUserById,
  updateUserById
};