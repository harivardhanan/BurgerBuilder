import React from 'react';
import Classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

const Burger = (props) => {

    let customizedIngredients = Object.keys(props.ingredients)
                                    .map( igKeys => {
                                        return [...Array(props.ingredients[igKeys]) ].map( (_,i) => {
                                          return <BurgerIngredients key={igKeys+i} type={igKeys}/>;
                                        } );
                                      } ).reduce( (arr,ele) => {
                                        return arr.concat(ele)
                                      },[]);
    console.log(customizedIngredients);

    if(customizedIngredients.length === 0){
      customizedIngredients = <p>Please Add Ingredients</p>;
    }

  return(
    <div className={Classes.Burger}>
    <BurgerIngredients type='bread-top'/>
    {customizedIngredients}
    <BurgerIngredients type='bread-bottom'/>
    </div>

  );

};

export default Burger;
