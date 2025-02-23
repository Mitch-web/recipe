import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/CategoriesList.css'

const CategoriesList = () => {
    const [categories, setCategories] = useState({});

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch("/api/recipes/categories");
            const data = await response.json();
            setCategories(data);
        };

        fetchCategories();
    }, []);

    return (
        <div className="categories-list">
            <h2>Recipes by categories</h2>
            {Object.entries(categories).map(([category, recipes]) => (
                <div key={category} className="category-section">
                    <h3>{category}</h3>
                    <div className="recipe-examples">
                        {recipes.map(recipe => (
                            <Link key={recipe.id} to={`/recipes/${recipe.id}`} className="recipe-category-card">
                                <h4>{recipe.name}</h4>
                            </Link>
                        ))}
                    </div>
                    <Link to={`/recipes/categories/${category}`} className="view-all">
                        Look more recipes→
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default CategoriesList;