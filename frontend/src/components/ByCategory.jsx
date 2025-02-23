import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import '../styles/ByCategory.css'

const ByCategory = () => {
    const {category} = useParams();
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipesByCategory = async () => {
            const response = await fetch(`/api/recipes/categories/${category}`);
            const body = await response.json();
            setRecipes(body)
        }

        fetchRecipesByCategory()
    }, [category]);

    if (!recipes) {
        return <p>Loading...</p>;
    }

    return (
        <div className="category-container">
            <h1>Recipes from category: {category}</h1>
            <div className="recipes-list">
                {recipes.map((recipe) => (
                    <div className="recipe-card-by-category" key={recipe.id}>
                        <h3>
                            <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
                        </h3>
                        <p>Cook time: {recipe.cookTime} мин</p>
                    </div>
                ))}
            </div>
            <Link to="/" className="back-button">⬅ Back to home</Link>
        </div>
    )
}

export default ByCategory;