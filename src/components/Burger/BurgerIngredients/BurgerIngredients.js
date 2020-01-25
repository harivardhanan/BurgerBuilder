import React, {Component} from 'react';
import Classes from './BurgerIngredients.css';
import PropTypes from 'prop-types';

class BurgerIngredients extends Component {

  render(){

      let ingredients = null;
        switch (this.props.type) {
          case ('bread-bottom'):
            ingredients = <div className={Classes.BreadBottom}></div>
            break;
          case('bread-top'):
            ingredients = (
              <div className={Classes.BreadTop}>
                <div className={Classes.Seeds1}></div>
                <div className={Classes.Seeds2}></div>
              </div>
            );
            break;
          case('Meat'):
            ingredients = <div className={Classes.Meat}></div>
            break;
          case('Cheese'):
            ingredients = <div className={Classes.Cheese}></div>
            break;
          case('Salad'):
            ingredients = <div className={Classes.Salad}></div>
            break;
          case('Bacon'):
            ingredients = <div className={Classes.Bacon}></div>
            break;
          default:
            ingredients = null;
        }

        return ingredients;
    }

}

  BurgerIngredients.propTypes = {
    type: PropTypes.string.isRequired
  };

export default BurgerIngredients;
