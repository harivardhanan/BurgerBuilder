import React,{Component} from 'react';
import Aux from '../../hoc/Auxx';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICES = {
    Salad: 0.5,
    Meat: 1.3,
    Bacon: 0.7,
    Cheese: 0.4
}

class BurgerBuilder extends Component {

    state = {
      ingredients:{
        Salad:0,
        Meat:0,
        Bacon:0,
        Cheese:0
      },
      TotalPrice:4
    }

    addIngredientsHandler = (type) => {
      const oldCount = this.state.ingredients[type];
      const newCount = oldCount + 1;
      const newIngredients = {
        ...this.state.ingredients
      }
      newIngredients[type] = newCount;

      const oldPrice = this.state.TotalPrice;
      const priceAddition = INGREDIENTS_PRICES[type];
      const newPrice = oldPrice + priceAddition;
      this.setState({TotalPrice:newPrice,ingredients:newIngredients});
    }

    removeIngredientsHandler = (type) => {
      const oldCount = this.state.ingredients[type];
      if(oldCount <= 0){
        return;
      }

      const newCount = oldCount - 1;
      const newIngredients = {
        ...this.state.ingredients
      }
      newIngredients[type] = newCount;

      const oldPrice = this.state.TotalPrice;
      const priceReduction = INGREDIENTS_PRICES[type];
      const newPrice = oldPrice - priceReduction;
      this.setState({TotalPrice:newPrice,ingredients:newIngredients});
    }

    render () {

              const disabledIngre = {
                          ...this.state.ingredients
                      };
              for(let key in disabledIngre){
                disabledIngre[key] = disabledIngre[key] <= 0
                }
                console.log(disabledIngre);

        return(
          <Aux>
          <Burger ingredients = {this.state.ingredients}/>
          <BuildControls addIngredients={this.addIngredientsHandler}
                         removeIngredients = {this.removeIngredientsHandler}
                         disabled = {disabledIngre}/>
          </Aux>
        );  }

}

export default BurgerBuilder;
