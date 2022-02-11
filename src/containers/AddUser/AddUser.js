import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import { CreateUsers } from "../../services";
import { checkValidity } from "../../shared/utility";

function AddUser() {
  const [state, setState] = useState({
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email Address",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password",
        },
        value: "",
        validation: {
          required: true,
          minLength: 4,
        },
        valid: false,
        touched: false,
      },
      location: {
        elementType: "input",
        elementConfig: {
          type: "location",
          placeholder: "Location",
        },
        value: "",
        validation: {
          required: false,
          minLength: 0,
        },
        valid: false,
        touched: false,
      },
    },
  });
  
const [checkList, setCheckList]=useState({
    creditCard: true,
    bitcoin: false,
    bank: false,
    cash: false,
})

 

 const onChangeBitcoin = () => {
    if(checkForChecked("bitcoin"))
    setCheckList({
        ...checkList,
      bitcoin: !checkList.bitcoin,
    });
  }

  const onChangeCredit = () => {
    if(checkForChecked("creditCard"))
    setCheckList({
        ...checkList,
      creditCard: !checkList.creditCard,
    });
  }

  const onChangeBank = () => {
    if(checkForChecked("bank"))
    setCheckList({
    ...checkList,
      bank: !checkList.bank,
    });
  }

  const onChangeCash = () => {
    if(checkForChecked("cash"))
    setCheckList({
    ...checkList,
      cash: !checkList.cash,
    });
  }

const checkForChecked=(check)=>{
    let val={...checkList};
    val[check]=!checkList[check];
    if(!val.creditCard && !val.bank && !val.cash && !val.bitcoin) return false;
    return true;
  }

    

  const formElementsArray = [];
  for (let key in state.controls) {
    formElementsArray.push({
      id: key,
      config: state.controls[key],
    });
  }

  const inputChangedHandler = (e, controlName) => {
    const updatedControls = {
      ...state.controls,
      [controlName]: {
        ...state.controls[controlName],
        value: e.target.value,
        valid: checkValidity(
          e.target.value,
          state.controls[controlName].validation
        ),
        touched: true,
      },
    };
    setState({
      controls: updatedControls,
    });
  };

  let form = formElementsArray.map((formEl) => (
    <Input
      key={formEl.id}
      elementType={formEl.config.elementType}
      elementConfig={formEl.config.elementConfig}
      value={formEl.config.value}
      invalid={!formEl.config.valid}
      shouldValidate={formEl.config.validation}
      touched={formEl.config.touched}
      changed={(event) => inputChangedHandler(event, formEl.id)}
    />
  ));

  const submitHandler = () => {
    CreateUsers({
     email:  state.controls.email.value,
      password: state.controls.password.value,
     location: state.controls.location.value,
     ...checkList
    }
    )
      .then((response) => {
        alert("Success");
      })
      .catch(function (error) {
        alert(error?.response?.data?.message)
      });
  };

  return (

    
    <div className={classes.AddUser}>
      {form}
      <div>Chose payment method</div>
      <Input
        className={classes.CheckBox}
        elementType="checkbox"
        lab="Credit Card"
        name="creditCard"
        checked={checkList.creditCard}
        id={1}
        onChange={onChangeCredit}
      ></Input>
      <Input
        className={classes.CheckBox}
        elementType="checkbox"
        checked={checkList.bitcoin}
        lab="Bitcoin"
        name="bitcoin"
        id={2}
        onChange={onChangeBitcoin}
      ></Input>
      <Input
        className={classes.CheckBox}
        elementType="checkbox"
        name="cash"
        checked={checkList.cash}
        lab="Cash"
        id={3}
        onChange={onChangeCash}
      ></Input>
      <Input
        className={classes.CheckBox}
        elementType="checkbox"
        lab="Bank"
        name="bank"
        checked={checkList.bank}
        id={4}
        onChange={onChangeBank}
      ></Input>

      <Button clicked={submitHandler} btnType="Success">
        Add new User
      </Button>
    </div>
  );
}

export default AddUser;
