import React,{useState, useContext} from 'react'
import Input from '../../components/UI/Input/Input';
import { checkValidity } from '../../shared/utility';
import classes from './Auth.module.css';
import Button from '../../components/UI/Button/Button';
import {LoginAPI} from '../../services'
import { WashContext } from "../../context/Provider";
import Cookies from 'js-cookie';
import jwt from 'jwt-decode'
     const actions= {
               SET_ROLE:"SET_ROLE",
             SET_USER_ID:"SET_USER_ID"
          }

function Auth() {
const {role, userId, dispatch}=useContext(WashContext)
const [state, setState]=useState({
  controls: {
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: 'Email Address'
      },
      value: '',
      validation: {
        required: true,
        isEmail: true,
      },
      valid: false,
      touched: false,
    },
    password: {
      elementType: 'input',
      elementConfig: {
        type: 'password',
        placeholder: 'Password'
      },
      value: '',
      validation: {
        required: true,
        minLength: 4
      },
      valid: false,
      touched: false,
    },
  },
  isSignUp: true,
});

const formElementsArray = [];
    for(let key in state.controls){
      formElementsArray.push({
        id: key,
        config: state.controls[key]
      })
    }
    const inputChangedHandler = (e, controlName) => {
      const updatedControls = {
        ...state.controls,
        [controlName]: {
          ...state.controls[controlName],
          value: e.target.value,
          valid: checkValidity(e.target.value, state.controls[controlName].validation),
          touched: true
        }
      };
      setState({
        controls: updatedControls
      })
    }

let form = formElementsArray.map(formEl => (
  <Input
    key={formEl.id}
    elementType={formEl.config.elementType}
    elementConfig={formEl.config.elementConfig}
    value={formEl.config.value}
    invalid={!formEl.config.valid}
    shouldValidate={formEl.config.validation}
    touched={formEl.config.touched}
    changed={(event) => inputChangedHandler(event, formEl.id)}
  />));

 const submitHandler = (e) => {
    e.preventDefault();
   LoginAPI(state.controls.email.value, state.controls.password.value)
    .then((response) => {
      alert("Success") 
      dispatch(  {type: actions.SET_ROLE, value:"admin"});
      
    }).catch(function (error) {
      alert(error?.response?.data?.message)
    })

    e.preventDefault();
    e.stopImmediatePropagation();
  }


    return (
        <div className={classes.Auth}>
     

            <form onSubmit={(e) => submitHandler(e)}>
            { form }

          <Button btnType="Success" >
            Submit
          </Button>

            </form>

        </div>
    
    );
};

export default Auth;