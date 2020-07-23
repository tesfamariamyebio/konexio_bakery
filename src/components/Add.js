import React from 'react';
import Slider from './core/Slider';
class Add extends React.Component{
    constructor(props){
        super(props);
       this.state={
        input:'',
        price:'1',

       }
    }
    render(){
        return (
            <div>
                <p>add</p>
                <input></input>
                 <Slider />

            </div>
        );
    }
}
export default Add;