import React from 'react';
import resetsData from "./data/resets.json";
import { useParams } from 'react-router-dom';
import './RecipeDetails.css';

const RecipeDetail = () => {
    const { id } = useParams();
    const reset = resetsData.find((r) => r.id === parseInt(id));

    if (!reset) {
        return <div className="error-message">Recipe not found</div>;
    }

    return (
        <div className="recipe-detail-container">
            <h1 className="recipe-title">{reset.name}</h1>
            <img src={reset.image} alt={reset.name} className="recipe-image" />
            <h2 className="ingredients-title">Ingredients:</h2>
            <ul className="ingredients-list">
                {reset.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h2 className="instructions-title">Instructions:</h2>
            <p className="instructions-text">{reset.instructions}</p>
        </div>
    );
};

export default RecipeDetail;