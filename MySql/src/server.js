// const app = require('./app');

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

require('dotenv').config();

const app = require('./app')
const sequelize = require('./config/database')

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try{
    await sequelize.authenticate();

    console.log('MySQL connected successfully');

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    })
  } catch(error){
    console.error('Database connection failed:', error)
  }
};

startServer();