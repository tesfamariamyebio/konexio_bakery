import React, { Children } from 'react';
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
 
  onClickTabAdd(){
    this.setState({activeTab:'add'});
  }
  onClickTabList(){
    this.setState({activeTab:'list'});
  }
  onClickTabPay(){
    this.setState({activeTab:'pay'});
  }
  render(){
    return(
      <div classsName="boulanger"> 
      
     
     <Button children='add' onClick={this.onClickTabAdd}/>
     <Button children='list' onClick={this.onClickTabList}/>
     <Button children='pay' onClick={this.onClickTabPay}/>
     
     <Add   />
     <List   />
     <Pay   />
     

     {/* {this.renderAdd()} 
      {this.renderList()}
      {this.renderPay()} */}
     
      </div>
    );
  }
}

export default App;