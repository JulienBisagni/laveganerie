import React from 'react';

const Recipe = ({title, calories, image, ingredients, time}) => {
  return (
    <div className="card">
      <div className="row justify-between">
        <div className="col-8">
          <div className="card__text">
            <div className="d-flex justify-content-between">
              <h4 className="title">{title}</h4>
              <div className="calories">
                <p>{Math.round(calories)} calories</p>
              </div>
            </div>
            <ul className="ingredients">
              {ingredients.map(ingredient =>(
                <li>
                  {ingredient.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-4">
          <div className="card__image">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
