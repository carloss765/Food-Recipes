import React from "react";
import resets from "./data/resets.json";
import { Link } from 'react-router-dom';
import './RecipeLists.css';

const RecipeList = () => {
    return (
        <div className="recipe-list-container">
            <h1 className="recipe-list-title">Recipes</h1>
            <div className="recipe-grid">
                {resets.map((recipe) => (
                    <div key={recipe.id} className="recipe-card">
                        <img src={recipe.image} alt={recipe.name} className="recipe-image" />
                        <h2 className="recipe-name">{recipe.name}</h2>
                        <p className="recipe-description">{recipe.instructions.substring(0, 100)}...</p>
                        <Link to={`/recipe/${recipe.id}`} className="view-recipe-button">
                            View Recipe
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecipeList;