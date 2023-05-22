Ecommerce Backend Homework
This is an ecommerce backend application developed as part of the UCF Bootcamp Module 13 homework. The application provides a RESTful API for managing products, categories, and tags for an ecommerce platform.

Table of Contents
Installation
Usage
Routes
Technologies Used
Contributing
License
Questions
Installation
To install and run the ecommerce backend application, follow these steps:

Clone the repository to your local machine.
Navigate to the project's root directory.
Run npm install to install the required dependencies.
Set up the database:
Create a MySQL database.
Update the connection details in the .env file.
Run the database schema using npm run db:create.
Seed the database using npm run db:seed.
Start the application by running npm start.
Usage
Once the application is installed and running, you can use a tool like Postman to interact with the API endpoints.

Routes
The ecommerce backend application provides the following API routes:

Product Routes:
GET /api/products: Get all products.
GET /api/products/:id: Get a specific product by its ID.
POST /api/products: Create a new product.
PUT /api/products/:id: Update a specific product by its ID.
DELETE /api/products/:id: Delete a specific product by its ID.
Category Routes:
GET /api/categories: Get all categories.
GET /api/categories/:id: Get a specific category by its ID.
POST /api/categories: Create a new category.
PUT /api/categories/:id: Update a specific category by its ID.
DELETE /api/categories/:id: Delete a specific category by its ID.
Tag Routes:
GET /api/tags: Get all tags.
GET /api/tags/:id: Get a specific tag by its ID.
POST /api/tags: Create a new tag.
PUT /api/tags/:id: Update a specific tag by its ID.
DELETE /api/tags/:id: Delete a specific tag by its ID.
For more details on the request and response formats for each route, refer to the documentation or the code itself.

Technologies Used
The ecommerce backend application is built using the following technologies:

Node.js
Express.js
MySQL
Sequelize ORM
JavaScript
Contributing
Contributions to the ecommerce backend homework are welcome. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

License
This ecommerce backend homework is licensed under the MIT License.

Questions
If you have any questions or need further assistance, please feel free to contact me via email or GitHub.

Email: sniper3105@gmail.com
GitHub: AlexC3105