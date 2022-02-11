import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];
  if (props.invalid && props.shouldValidate && props.touched){
    inputClasses.push(classes.Invalid);
  }
  switch (props.elementType) {
    case ('input'):
      inputElement = <input
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        onChange={props.changed}
        value={props.value} />;
      break;
    case ('textarea'):
      inputElement = <textarea
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        onChange={props.changed}
        value={props.value} />;
      break;
    case ('select'):
      inputElement = (
        <select
          className={inputClasses.join(' ')}
          onChange={props.changed}
          value={props.value}>
          {props.elementConfig.options.map(option => (
             <option
               key={option.value}
               value={option.value}>
               {option.displayValue}
             </option>
          ))}
        </select>);
      break;
    case('checkbox'):
        inputElement=(
          
          <div  className={props.className}>
         <label className={props.className} for={props.for}>    <input className={classes.Check}
          type="checkbox"
          id={props.id}
          name={props.name}
          checked={props.checked}
          onChange={props.onChange}
        />
          {props.lab} </label>
         
        </div>

        )
    break;
    default:
      inputElement = <input
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        onChange={props.changed}
        value={props.value} />;
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
}

export default input;
