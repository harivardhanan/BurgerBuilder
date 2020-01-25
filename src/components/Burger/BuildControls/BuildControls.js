import React from 'react';
import Classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

    const controls = [
      {label:'Meat', type:'Meat'},
      {label:'Cheese', type:'Cheese'},
      {label:'Salad', type:'Salad'},
      {label:'Bacon', type:'Bacon'},
    ];

const BuildControls = (props) => (

  <div className={Classes.BuildControls}>
    { controls.map(ctrl => (
        <BuildControl key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.addIngredients(ctrl.type)}
                    remove={() => props.removeIngredients(ctrl.type)}
                    disabled={props.disabled[ctrl.type]} />
                    ))
      }
  </div>

);

export default BuildControls;
