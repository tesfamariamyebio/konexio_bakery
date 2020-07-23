import React from 'react';
 
class Button extends React.Component{
   
    render(){
        // const Button = ({children,iSelected,onclick});
        return (
            <div>
                <button className='btn btn-primary' onClick={this.onClickTabAdd}>
                    {this.props.children}
                </button>
            </div>
        );
    }
}
export default Button;