import React, { useState } from "react";
import classes from "./ShowProgram.module.css";
function ShowProgram({ program }) {
  return (
    <div>
      <div className={classes.Card}>
        <div className={classes.Name}>
          <h3>{program.name}</h3>
        </div>
        <div className={classes.Content}>
          <div className={classes.Description}>
            <p>Description: {program.description}</p>
          </div>{" "}
          <div>
            {program?.steps?.map((ele) => (
              <div>
                <div className={classes.Steps}>Step: {ele.name}</div>
                <div className={classes.DescriptionSteps}>
                  Description: {ele.description}
                </div>

                <div className={classes.Cost}>Total cost: {ele.cost}</div>
              </div>
            ))}
          </div>
          <div className={classes.Total}>Cost: {program.total}</div>
        </div>
      </div>
    </div>
  );
}

export default ShowProgram;
