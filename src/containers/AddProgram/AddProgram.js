import React, { useState, useEffect } from "react";
import classes from "./AddProgram.module.css";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import { checkValidity } from "../../shared/utility";
import { GetProgramSteps, CreateProgram } from "../../services";

function AddProgram() {



  const [programStep, setProgramSteps] = useState([]);
  const [checked, setChecked] = useState([]);
  const [state, setState] = useState({
    controls: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "name",
          placeholder: "Name",
        },
        value: "",
        validation: {
          required: true,
          minLength: 4,
        },
        valid: false,
        touched: false,
      },
      description: {
        elementType: "input",
        elementConfig: {
          type: "description",
          placeholder: "Description",
        },
        value: "",
        validation: {
          required: true,
          minLength: 4,
        },
        valid: false,
        touched: false,
      },
    },
  });



  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

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



  const getProgramSteps = async () => {
    GetProgramSteps()
      .then((response) => {
        setProgramSteps(response?.data);
      })
      .catch(function (error) {
        alert(error?.response?.data?.message);
      });
  };
  const totalCost = () => {
    let sum = [];
    checked.forEach((el) => {
      programStep.forEach((el2) => {
        if (parseInt(el) == el2.id) sum.push(el2.cost);
      });
    });
    return sum.reduce((a, b) => a + b, 0);
  };
  const createProgram = async () => {
    CreateProgram({name: state.controls.name.value,description: state.controls.description.value, steps:checked, total:totalCost()})
      .then((response) => {
        alert(response);
      }).catch(function (error) {
        alert(error?.response?.data?.message)
      });
  };
  useEffect(() => {
    getProgramSteps();
  }, []);
  return (
    <div className={classes.AddUser}>
      {form}
      <div>Chose Steps</div>

      {programStep.map((ele) => (
        <div >
        <Input
          className={classes.CheckBox}
          elementType="checkbox"
          lab={ele.name}
          name={ele.name}
          id={ele.id}
          onChange={handleToggle(ele.id)}
        ></Input>
        <div className={classes.Description}>
        <div>Description: {ele.description}</div>
        </div>
        <div className={classes.Description}>
        <div>Cost: {ele.cost}</div>
        </div>

</div>
      ))}

      <Button clicked={createProgram} btnType="Success">
        Add new Program
      </Button>
    </div>
  );
}

export default AddProgram;
