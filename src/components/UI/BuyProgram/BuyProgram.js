import React, { useState } from "react";
import classes from "./BuyProgram.module.css";
import Aux from "../../../hoc/Auxiliary";
import Input from "../Input/Input";
import Button from "../Button/Button";
function BuyProgram(props) {
  return (
    <Aux>
      <div>Program name :{props.program.name}</div>
      <div>Cost :{props.program.total}</div>
      <Input elementType="select"
             elementConfig={props.option}
             changed={props.onChangeSelect}
             value={props.selectIndex}
      ></Input>
      <Button disabled={false} clicked={props.makeOrder}>
        Buy Program
      </Button>
    </Aux>
  );
}
export default BuyProgram;
