const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const sequelize = require('./database.js');
const User = require('./models/user.js');
const Product = require('./models/product.js');
const productRoutes = require('./routes/products.js');
const userRoutes = require('./routes/users.js');


// const productRoutes = require('./routes/product.js');
app.use(cors());
app.use(bodyParser.json());

sequelize.sync().then(() => console.log('Tables have been successfully created')).catch(err => console.log(err));

app.get('/', (req, res) => {
    res.json({message: 'Welcome to the server'});
});

// app.use('/api/products', productRoutes);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes)