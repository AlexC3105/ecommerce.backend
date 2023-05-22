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