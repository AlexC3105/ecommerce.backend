const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('DATABASE_SYNCED');
    await seedCategories();
    console.log('CATEGORIES_SEEDED');
    await seedProducts();
    console.log('PRODUCTS_SEEDED');
    await seedTags();
    console.log('TAGS_SEEDED');
    await seedProductTags();
    console.log('PRODUCT_TAGS_SEEDED');

    process.exit(0);
};

seedAll();

const { Product } = require('../models');

const productData = [
    {
        product_name: 'Plain T-Shirt',
        price: 19.99,
        stock: 45,
        category_id: 1,
    },
    {
        product_name: 'Running Sneakers',
        price: 74.99,
        stock: 20,
        category_id: 2,
    },
    {
        product_name: 'Branded Baseball Hat',
        price: 29.99,
        stock: 35,
        category_id: 3,
    },
    {
        product_name: 'Top 40 Music Compilation Vinyl Record',
        price: 34.99,
        stock: 50,
        category_id: 4,
    },
    {
        product_name: 'Cargo Shorts',
        price: 49.99,
        stock: 40,
        category_id: 5,
    },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;