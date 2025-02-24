# 🍽️ Recipe Catalog API 🍽️

## 🚀 Project Overview 🚀
This is a **Recipe Catalog API** built with Spring Boot, MongoDB, and Redis. The project allows users to browse, filter, and manage recipes efficiently. Redis is used for caching to optimize performance. 🔥🔥🔥

## 🛠️ Technologies Used 🛠️
- **Java 21**
- **Spring Boot**
- **MongoDB** (for storing recipes)
- **Redis** (for caching popular recipes retrieved by Id)
- **React** (frontend)
- **Docker** (for containerization) 🔧🔧🔧 (in future)

## 📦 Installation & Setup 📦
1. Clone the repository:
   ```sh
   git clone https://github.com/Mitch-web/recipe.git
   ```
2. Navigate to the project directory:
   ```sh
   cd recipe
   ```
3. Build and run the backend:
   ```sh
   mvn spring-boot:run
   ```
4. Start the frontend:
   ```sh
   cd frontend
   npm install
   npm start
   npm run watch "for detecting code changes"
   ```
5. Download Redis or run it via Docker container. It should work on 
    ```sh
   localhost:6379
    ```

Your API should now be running on `http://localhost:8080`. 🚀🚀🚀

## 📌 API Endpoints 📌
- `GET /api/recipes` - Fetch all recipes
- `GET /api/recipes/{id}` - Get a recipe by ID
- `POST /api/recipes` - Add a new recipe
- `GET /api/recipes/popular` - Get popular recipes (from Redis cache)
- `GET /api/recipes/categories` - Get recipes grouped by categories (Map)
- `GET /api/recipes/categories/{category}` - Get recipes by category 🍲🍛🥘

## 🗄️ Caching with Redis 🗄️
Redis is used to store frequently accessed recipes, reducing database load and improving response times. When a recipe is requested, the service first checks Redis; if the data isn't cached, it retrieves it from MongoDB and stores it in Redis. ⚡⚡⚡

## 📝 To-Do Features 📝
- User authentication & authorization
- Recipe ratings & reviews
- Image uploads for recipes 🥗🍜🍰

## 💡 Contributing 💡
Feel free to fork the repo and submit pull requests. We welcome improvements, bug fixes, and new features. Happy coding! 🤖🎉🚀

