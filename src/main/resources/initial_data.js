db.recipes.insertMany([
    {
        "_id": ObjectId("659b1f3e8f1b2c00123abcd"),
        "name": "Cheese Omelette",
        "ingredients": [
            { "name": "Egg", "quantity": "2 pcs" },
            { "name": "Cheese", "quantity": "50 g" },
            { "name": "Milk", "quantity": "30 ml" }
        ],
        "steps": [
            "Beat the eggs with milk",
            "Add grated cheese",
            "Cook in a pan for 5 minutes"
        ],
        "cookTime": 10,
        "category": "Breakfast"
    },
    {
        "_id": ObjectId("659b1f3e8f1b2c00123abce"),
        "name": "Spaghetti Carbonara",
        "ingredients": [
            { "name": "Spaghetti", "quantity": "200 g" },
            { "name": "Egg yolk", "quantity": "2 pcs" },
            { "name": "Pancetta", "quantity": "100 g" },
            { "name": "Parmesan", "quantity": "50 g" }
        ],
        "steps": [
            "Boil spaghetti until al dente",
            "Fry pancetta until crispy",
            "Mix egg yolks with Parmesan",
            "Combine everything and serve"
        ],
        "cookTime": 20,
        "category": "Dinner"
    },
    {
        "_id": ObjectId("659b1f3e8f1b2c00123abcf"),
        "name": "Greek Salad",
        "ingredients": [
            { "name": "Cucumber", "quantity": "1 pc" },
            { "name": "Tomato", "quantity": "2 pcs" },
            { "name": "Feta cheese", "quantity": "100 g" },
            { "name": "Olives", "quantity": "50 g" }
        ],
        "steps": [
            "Chop cucumber and tomatoes",
            "Add feta cheese and olives",
            "Drizzle with olive oil and mix"
        ],
        "cookTime": 10,
        "category": "Lunch"
    },
    {
        "_id": ObjectId("659b1f3e8f1b2c00123abd0"),
        "name": "Pancakes",
        "ingredients": [
            { "name": "Flour", "quantity": "200 g" },
            { "name": "Milk", "quantity": "250 ml" },
            { "name": "Egg", "quantity": "1 pc" },
            { "name": "Sugar", "quantity": "20 g" }
        ],
        "steps": [
            "Mix all ingredients into a smooth batter",
            "Heat a pan and pour the batter",
            "Flip when bubbles appear",
            "Serve with syrup or fruit"
        ],
        "cookTime": 15,
        "category": "Breakfast"
    },
    {
        "_id": ObjectId("659b1f3e8f1b2c00123abd1"),
        "name": "Chicken Soup",
        "ingredients": [
            { "name": "Chicken breast", "quantity": "200 g" },
            { "name": "Carrot", "quantity": "1 pc" },
            { "name": "Onion", "quantity": "1 pc" },
            { "name": "Water", "quantity": "1 L" }
        ],
        "steps": [
            "Boil water and add chicken",
            "Chop and add vegetables",
            "Simmer for 30 minutes",
            "Season with salt and pepper"
        ],
        "cookTime": 40,
        "category": "Lunch"
    },
    {
        "_id": ObjectId("659b1f3e8f1b2c00123abd2"),
        "name": "Garlic Butter Shrimp",
        "ingredients": [
            { "name": "Shrimp", "quantity": "300 g" },
            { "name": "Butter", "quantity": "50 g" },
            { "name": "Garlic", "quantity": "3 cloves" }
        ],
        "steps": [
            "Melt butter in a pan",
            "Add chopped garlic and cook for 1 minute",
            "Add shrimp and cook until pink",
            "Serve with rice or pasta"
        ],
        "cookTime": 15,
        "category": "Dinner"
    },
    {
        "_id": ObjectId("659b1f3e8f1b2c00123abd3"),
        "name": "Caesar Salad",
        "ingredients": [
            { "name": "Lettuce", "quantity": "1 head" },
            { "name": "Croutons", "quantity": "50 g" },
            { "name": "Parmesan", "quantity": "30 g" },
            { "name": "Caesar dressing", "quantity": "50 ml" }
        ],
        "steps": [
            "Chop lettuce",
            "Add croutons and Parmesan",
            "Drizzle with dressing and mix"
        ],
        "cookTime": 10,
        "category": "Lunch"
    },
    {
        "_id": ObjectId("659b1f3e8f1b2c00123abd4"),
        "name": "Grilled Salmon",
        "ingredients": [
            { "name": "Salmon fillet", "quantity": "200 g" },
            { "name": "Olive oil", "quantity": "1 tbsp" },
            { "name": "Lemon", "quantity": "1 slice" }
        ],
        "steps": [
            "Brush salmon with olive oil",
            "Grill for 5 minutes on each side",
            "Serve with lemon"
        ],
        "cookTime": 15,
        "category": "Dinner"
    },
    {
        "_id": ObjectId("659b1f3e8f1b2c00123abd5"),
        "name": "Banana Smoothie",
        "ingredients": [
            { "name": "Banana", "quantity": "1 pc" },
            { "name": "Milk", "quantity": "200 ml" },
            { "name": "Honey", "quantity": "1 tbsp" }
        ],
        "steps": [
            "Blend all ingredients until smooth",
            "Pour into a glass and serve"
        ],
        "cookTime": 5,
        "category": "Breakfast"
    },
    {
        "_id": ObjectId("659b1f3e8f1b2c00123abd6"),
        "name": "Vegetable Stir-Fry",
        "ingredients": [
            { "name": "Bell pepper", "quantity": "1 pc" },
            { "name": "Carrot", "quantity": "1 pc" },
            { "name": "Broccoli", "quantity": "100 g" },
            { "name": "Soy sauce", "quantity": "2 tbsp" }
        ],
        "steps": [
            "Chop vegetables",
            "Stir-fry in a pan with oil",
            "Add soy sauce and mix",
            "Serve hot"
        ],
        "cookTime": 15,
        "category": "Dinner"
    }
]);