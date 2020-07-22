import React from 'react';
import Button from  './core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component{
  constructor(props){
    super(props);
    // this.state={
    //   activeTab:add,
    //   items:[],
    // };
  }
  renderAdd () {
    return (
    <div>add</div>
    );
  }
  renderList(){
    return (
      <div>list</div>
    );
  }
  renderPay(){
    return (
      <div>pay</div>
    );
  }
  render(){
    return(
      <div classsName="boulanger"> 
     {this.renderAdd()} 
      {this.renderList()}
      {this.renderPay()}
      </div>
    );
  }
}

export default App;