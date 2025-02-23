import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import '../styles/PopularRecipes.css'

const PopularRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [recipeIdToName, setRecipeIdToName] = useState({});

    useEffect(() => {
        const fetchRecipesIdWithCount = async () => {
            const response = await fetch("/api/recipes/popular");
            const json = await response.json();
            setRecipes(json);
        }

        fetchRecipesIdWithCount();
    }, []);

    useEffect(() => {
        if (recipes.length === 0) return;

        const fetchRecipesName = async () => {
            const requests = recipes.map((recipe) =>
                fetch(`/api/recipes/${recipe.value}?disable_increment=true`).then(res  => res.json())
            );

            const responses = await Promise.all(requests);

            const idToNameMap = responses.reduce((acc, recipe) => {
                acc[recipe.id] = recipe.name;
                return acc;
            }, {});

            setRecipeIdToName(idToNameMap);
        }

        fetchRecipesName(recipes.value)
    }, [recipes]);

    return (
        <div className="popular-recipes-container">
            <div className="popular-recipes">
                <h2>🔥 Popular Recipes</h2>
                <ul>
                    {recipes.map((popularRecipe, index) => (
                        <motion.li
                            key={popularRecipe.value}
                            initial={{opacity: 0, y: 10}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                            whileHover={{scale: 1.05}}
                        >
                            <a href={`/recipes/${popularRecipe.value}`} className="popular-recipe-link">
                                <span className="recipe-name">{recipeIdToName[popularRecipe.value]}</span>
                                <span className="recipe-score">👁 {popularRecipe.score}</span>
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PopularRecipes;