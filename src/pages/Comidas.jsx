import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import ThumbCards from '../components/ThumbCards';
import RecipeContext from '../context/RecipeContext';

function Comidas({ history }) {
  const { apiResult } = useContext(RecipeContext);

  const RESULTS_PER_PAGE = 12;

  return (
    <div>
      <Header title="Comidas" history={ history } />
      {
        apiResult.length === 0
          ? <p>Loading...</p>
          : apiResult
            .slice(0, RESULTS_PER_PAGE)
            .map((mealOrDrink, i) => (
              <ThumbCards
                key={ i }
                keyId={ i }
                result={ mealOrDrink }
              />
            ))
      }
    </div>
  );
}

Comidas.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Comidas;
