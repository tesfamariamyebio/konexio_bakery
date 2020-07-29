import React from 'react';
import specimen from './specimen.jpg';

class Card extends React.Component{
    constructor(props){
        super(props);
        this.state={
            source:specimen,
        }
    }
    render(){
        return (
            <div>
              <img src={specimen} className="App-specimen" alt="specimen" />
            </div>
        );
    }
}
 export default Card;