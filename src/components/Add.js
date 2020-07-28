import React from 'react';
import Slider from './core/Slider';
class Add extends React.Component{
    constructor(props){
        super(props);
       this.state={
        input:'',
        price:'1',
       }
       this.handleChange=this.handleChange.bind(this);
       this.handleSubmit=this.handleSubmit.bind(this);
       this.handleChangeSlider=this.handleChangeSlider.bind(this);
    }
    handleChangeSlider(val){
        console.log(val)
        this.setState({price:val});
    }
    handleChange(evt){
        this.setState({
            input:evt.target.value
        });
    }
    handleSubmit(){
        this.props.onAdd(this.state.price,this.state.input)
       this.setState( {price:1,
        input:''


    }  ); 
    }
    render(){
        return (
            <div>
                <div>add</div>
               <div style={{marginTop:'60px'}}>{this.state.price}</div> 
               <div><input  style={{width:'600px',height:'45px', borderRadius:'5px',border:'1px solid brown', marginTop:'20px'}}type='text' value={this.state.input} placeholder='item' onChange={this.handleChange}>
                </input>
               <button className='btn btn-primary' style={{height:'45px'}} onClick={this.handleSubmit}>Add</button> </div> 
                 <Slider 
                value={this.state.price}
                 onChange={this.handleChangeSlider}
                 />
                
                

            </div>
        );
    }
}
export default Add;