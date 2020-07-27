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
        console.log(this.state.price,  this.state.input)
    }
    render(){
        return (
            <div>
                <div>add</div>
                <input  type='text' value={this.state.input} placeholder='item' onChange={this.handleChange}></input>
                {/* <input  type='submit' value='envoyer' ></input> */}<button onClick={this.handleSubmit}>Add</button>
                 <Slider 
                value={this.state.price}
                 onChange={this.handleChangeSlider}
                 />
                 {this.state.price}
                 {/* <button onClick={this.handleSubmit}> Envoyer</button>  */}

            </div>
        );
    }
}
export default Add;