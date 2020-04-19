import React,{Component} from 'react';
import "bulma/css/bulma.css";
import Banner from './Components/Banner';
import Tools from './Components/Tool';


class App extends Component {

constructor(props){
    super(props)


    this.state = {

    

    }
}


componentDidMount(){





}


  solve = () =>{


    console.log('this is solving')
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
    
      </div>
    </div>
  )
}




}

export default App;
