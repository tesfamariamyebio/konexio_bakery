import React from 'react';
import Button from  './components/core/Button';
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
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
   this.onAdd=this.onAdd.bind(this);
  }
  onAdd(price,input){
    const items=this.state.items;
    items.push({
          input,
          price
    });
    this.setState({
      items,
      // activeTab:'list'
    });

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
        return <Add onAdd={this.onAdd} />;
      }
      return null;
  }
  renderList(){
    if(this.state.activeTab==='list'){
      return <List items={this.state.items}/>;
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
    console.log('items', this.state.items)
    return(
    <div classsName="container-fluid" >
      <div className="row"> 
     <Button  isSelected={this.state.activeTab==='add'} onClick={this.onClickTabAdd}>ADD</Button>
     <Button  isSelected={this.state.activeTab==='list'} onClick={this.onClickTabList}>List</Button>
     <Button isSelected={this.state.activeTab==='pay'} onClick={this.onClickTabPay}>Pay</Button> 
     </div> 
     {this.renderAdd()} 
      {this.renderList()}
      {this.renderPay()}
     
    </div>
    );
  }
}

export default App;