import React from 'react';



const Tools = (props ) =>{


   const {solve,stop,goback,newGame,Delete, Assistance} = props



    return(
        <div className="any">
         
         <div className="buttons">
  <button className="button is-info is" onClick={solve}>Solve</button>
  <button className="button is-success is" onClick={stop}>Stop</button>
  <button className="button is-warning is"  onClick={newGame}>New Game</button>
  <button className="button is-danger is" onClick={Delete}>Delete</button>
  <button className="button is-warning is" onClick={Assistance}>Assistance</button>
  <button className="button is-danger is" onClick={goback}>Go Back</button>
</div>

        </div>

    )
}


export default Tools