import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion'
import {Clock} from "lucide-react";
import {ChefHatIcon} from "lucide-react";
import '../styles/App.css'

const App = () => {

    const [recipes, setRecipes] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch('/api/recipes');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setRecipes(data);
            } catch (error) {
                console.error('Error fetching recipes:', error);
                setError(error.message);
            }
        };

        fetchRecipes();
    }, [])

    return  (
        <div className="container">
            <header>
                <h1>Recipe Catalog</h1>
            </header>

            <div className="recipe-list">
                {recipes.map(recipe => (
                    <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
                        <motion.div
                            className="recipe-card"
                            key={recipe.id}
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: "#f0f0f0",
                                rotate: 5
                            }}
                            transition={{duration: 0.3}}
                        >
                            <h3><ChefHatIcon/><b>{recipe.name}</b></h3>
                            <h3><b>Category:</b> {recipe.category}</h3>
                            <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "5px"}}>
                                <Clock size={20}/>
                                <h3><b>Cook time:</b> {recipe.cookTime}m</h3>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default App;
