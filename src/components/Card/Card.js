import React, { useState , useContext, useEffect } from "react";
import classes from "./Card.module.css";
import Modal from "../UI/Modal/Modal";
import Aux from "../../hoc/Auxiliary";
import ShowProgram from "../UI/ShowProgram/ShowProgram";
import BuyProgram from "../UI/BuyProgram/BuyProgram";
import {GetProgram, GetUser, Order} from "../../services";
import { WashContext } from "../../context/Provider";
import Cookies from 'js-cookie';
import jwt from 'jwt-decode'

function Card({id, name, description, total, steps }) {
  const [show, setShow] = useState(false);
  const [showProgram, setShowProgram] = useState({});
  const [modal, setModal] = useState();
  const [payment, setPayment]=useState();
  const [selectIndex, setSelectIndex]= useState(1);
  const [elementConfig, setElementConfig]=useState({options:[{value:1,displayValue:"psa"},{value:2, displayValue:"mo"}]});
  // const {role, userId, setRole,setUserId}=useContext(WashContext)


  const makeOrder=()=>{
    setShow(false);
  }
  
  const getProgram = async (id) => {
    GetProgram(id)
      .then((response) => {
        setShowProgram(response?.data?.program);
        showModalHandle();
      })
      .catch(function (error) {
        alert("Error: " + error?.response?.data?.message);
      });
  };

 



  const handleChangeSelect=(event)=>{
  event.preventDefault();
    setSelectIndex(event.target.value);
  }

  const showModalHandle = () => {
    setShow(true);
  };

  const hideModalHandle = () => {
    setShow(false);
  };

  const setProgram = (program) => {
    setShowProgram(program);
  };

  return (
    <div>
      
      <Modal show={show} modalClosed={hideModalHandle}>
        {modal == "program" ? (
          <ShowProgram program={showProgram} />
        ) : (
            <BuyProgram makeOrder={makeOrder} onChangeSelect={handleChangeSelect} selectIndex={selectIndex} program={showProgram} option={elementConfig}/>
        )}
      </Modal>
      <div className={classes.Card}>
        <div className={classes.Name}>
          <h3>{name}</h3>
        </div>
        <div className={classes.Content}>
          <div className={classes.Description}>
            <p>Description: {description}</p>
          </div>
          <div className={classes.Total}>Cost: {total}</div>
        </div>
        <div className={classes.Button}>
          <button
            onClick={(event) => {
              setModal("program");
               getProgram(id);
            }}
          >
            <a>View more</a>
          </button>
        </div>
        <div className={classes.Buy}>
          <button
           onClick={(event) => {
            setModal("buy");
            setProgram({id, name, description, total });
            showModalHandle();
          }}
          >
            <a>Buy</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
