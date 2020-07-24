import React , {Component} from 'react';
import TodoItem from './TodoItem';

class todo extends Component{
    render(){
        return(
            this.props.todo.map( todo  =>(
                <TodoItem key ={todo.id} clicked={this.props.clicked} markcomplete = {this.props.markcomplete} todo = {todo} />
            ))
        )
    }

}
export default todo;