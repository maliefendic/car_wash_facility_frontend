import React ,{useState, useEffect} from 'react';
import Card from "../../components/Card/Card"
import classes from "./Program.module.css"
import { GetPrograms} from "../../services";
  function Program(props) {
    const[program, setProgram]=useState()
    const[programs, setPrograms]=useState([])

   const getPrograms = async () => {
    GetPrograms(1,1000,"","createdAt","asc")
      .then((response) => {
        setPrograms(response?.data?.rows);
      })
      .catch(function (error) {
        alert("Error: " + error?.response?.data?.message);
      });
  };
 

  useEffect(() => {
    getPrograms();
  }, []);

    return (
    
        <div className={classes.Program}>
            {programs.map(ele=>{
                return(
                  <div>
                    <Card key={ele.id} id={ele.id} name={ele.name} description={ele.description} total={ele.total} steps={ele.steps}    />
                    </div>
                )
            })}
           
      </div>
    );
  }
  
  export default Program;
