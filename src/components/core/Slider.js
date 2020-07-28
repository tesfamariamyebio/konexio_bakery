import React from 'react';
import RCSlider from 'rc-slider';
import 'rc-slider/assets/index.css';
class Slider extends React.Component{
    render(){
        return(
            <div className='slid'>
                <RCSlider style={{width:'600px'}}
                  max={10} 
                  min={1}
                  onChange={this.props.onChange}
                  value={this.props.value}/>
                  {/* value=={this.satet.price} */}
                 
            </div>
        );
    }
}
export default Slider;