import React from 'react';
class List extends React.Component{
    render(){
        return (
            <div>List
                <ul>
                   {this.props.items.map((lists)=>{
                       return (<li lists={lists}>
                           {lists.input} {lists.price} £
                       </li>
                       );
                   })} 
                </ul>
            </div>
        );
    }
}
export default List;