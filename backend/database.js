const Sequlize = require('sequelize');

const sequelize = new Sequlize('shop','root','Qhk66]LM7U9upz4', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;