import { useParams, useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import '../styles/Recipe.css'

const Recipe = () => {
    const {id} = useParams();
    const [recipe, setRecipe] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRecipe = async () => {
            const response = await fetch(`/api/recipes/${id}`);
            const body = await response.json();
            setRecipe(body);
        };

        fetchRecipe();
    }, [id]);

    if (!recipe) {
        return <p>Loading...</p>;
    }

    return (
        <motion.div className="recipe-motion"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -20}}
            transition={{duration: 0.7}}
        >
            <div className="recipe-container">
                <h1>{recipe.name}</h1>
                <h2>Category: {recipe.category}</h2>
                <h3>Ingredients:</h3>
                <ul>
                    {recipe.ingredients.map(ingredient => (
                        <li key={ingredient.id}>{ingredient.name}: {ingredient.quantity}</li>
                    ))}
                </ul>
                <h3>Steps:</h3>
                <ol>
                    {recipe.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
            </div>
            <div className="button-container">
                <button onClick={() => navigate('/')}>⬅ Back to home</button>
            </div>
        </motion.div>
    );
};

export default Recipe;