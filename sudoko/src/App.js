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



render(){

  const { firstVar,name,lastName} = this.state

  return(
    <div>
      <Banner/>


      <Tools/>
      <div>
    
      </div>
    </div>
  )
}




}

export default App;
