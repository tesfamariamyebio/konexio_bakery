import React from 'react';


 class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      count: 1,
    };
   this.incrementCount=this.incrementCount.bind(this);
   this.decrementCount=this.decrementCount.bind(this);
   }
   incrementCount(){
     this.setState({
      count:this.state.count +1,

     });
   }
   decrementCount(){
    this.setState({
     count:this.state.count -1,

    });
  }
 render(){
   return(
     <div className='bonne' style={{width:'700px',height:'190px',backgroundColor:'gray'}}>
     
      <h1 style={{backgroundColor:'gray',height:'40px',textAlign:'center'}}> Counter</h1>
       <h2 style={{marginLeft:'325px',fontSize:'25px',color:'white'}}> {this.state.count}</h2>
       <button style={{width:'350px',height:'90px',backgroundColor:'red',fontSize:'35px'}} 
       onClick={this.incrementCount}>+</button>
       <button  style={{width:'350px',height:'90px',backgroundColor:'blue',fontSize:'35px'}}
        onClick={this.decrementCount}>-</button>
      
     </div>
 
   );
 }
}
export default App;