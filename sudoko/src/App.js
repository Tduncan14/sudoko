import React,{Component} from 'react';
import "bulma/css/bulma.css";
import Banner from './Components/Banner';
import Tools from './Components/Tool';
import Board from './Components/Board';


class App extends Component {

constructor(props){
    super(props)


    this.state = {


      cellValues: new Array(81).fill("5"),
      cellsBackgroundColors: new Array(81).fill("bg-white")
    

    }
}


componentDidMount(){





}


  solve = () =>{
    console.log("Solve ");
    ///    cellsBackgroundColors = [ "bg-white" , "bg-white" , "bg-white" , "bg-white" , "bg-white" , "bg-white" , "bg-coral" ,  .....   ]

    let newcellsBackgroundColors = [...this.state.cellsBackgroundColors];
    newcellsBackgroundColors[ 0 ] = "bg-coral";

    console.log(  "cellsBackgroundColors earlier" ,  this.state.cellsBackgroundColors  ) ; 


    this.setState( { cellsBackgroundColors:[...newcellsBackgroundColors]  } );

    setTimeout(() => {
      console.log(  "cellsBackgroundColors later" , this.state.cellsBackgroundColors  ) ; 
    },  300 );
   
  }


  stop = () =>{

    console.log('this is the stop function')
  }

  newGame = () => {

   
    console.log("this is a new game")
  }

  deleteGame = () => {

    console.log("deleteGame")
  }



  getThisAsStr = () =>{


     console.log(" get this astrr")
  }

  goBack = () => {

    console.log("goBacl")
  }







render(){

  const { firstVar,name,lastName} = this.state

  return(
    <div>
      <Banner/>


      <Tools solve={this.solve} stop={this.stop} newGame={this.newGame}
       deleteGame={this.deleteGame}
       goBack={this.goBack}
       assistance={this.getThisAsStr}/>
      <div>

       <Board

       handleChange={this.handleChange}
       handleFocus = {this.handleFocus}
       cellValues = { this.state.cellValues}
       cellBackgroundColors={this.state.cellsBackgroundColors}



        />
    
      </div>
    </div>
  )
}




}

export default App;
