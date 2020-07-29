import React from 'react';
 
class Button extends React.Component{
   
    render(){
        // const Button = ({children,iSelected,onclick});
        let btnClass='btn-outline-primary';
        if(this.props.isSelected===true){
            btnClass='btn-primary';
        }
        return (
            <div>
                <button className={`btn ${btnClass}`} onClick={this.props.onClick}>
                
                    {this.props.children}
                </button>
            </div>
        );
        
    }
}
export default Button;