import React from 'react';
import Button from  './components/core/Button';
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeTab:'add',
      items:[],
    };
   this.onClickTabAdd=this.onClickTabAdd.bind(this);
   this.onClickTabList=this.onClickTabList.bind(this);
   this.onClickTabPay=this.onClickTabPay.bind(this);
  }
  onAdd(price,input){

  }
  onClickTabAdd(){
    this.setState({activeTab:'add'});
  }
  onClickTabList(){
    this.setState({activeTab:'list'});
  }
  onClickTabPay(){
    this.setState({activeTab:'pay'});
  }
  renderAdd () {
    
      if(this.state.activeTab==='add'){
        return <Add />;
      }
      return null;
   
    
  }
  renderList(){
    if(this.state.activeTab==='list'){
      return <List />;
    }
   return null;
   
  }
  renderPay(){
    if(this.state.activeTab==='pay'){
      return <Pay />;
    }
    return null;
  }
 
 
  render(){

    return(
      <div classsName="boulanger"> 
     <Button  onClick={this.onClickTabAdd}>ADD</Button>
     <Button onClick={this.onClickTabList}>List</Button>
     <Button onClick={this.onClickTabPay}>Pay</Button>
     
    

     {this.renderAdd()} 
      {this.renderList()}
      {this.renderPay()}
     
      </div>
    );
  }
}

export default App;