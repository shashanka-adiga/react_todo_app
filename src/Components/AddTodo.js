import React ,{ Component } from 'react';

class AddTodo extends Component{
    state = {
        title:''
    }
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.title)
        this.setState({title:''})
    }
    onChange =(e) =>{
        this.setState({[e.target.name]:e.target.value})
    }
    render(){
        return(
            <form onSubmit={this.onSubmit} style={this.getStyle}>
                <input 
                style ={{flex:'10',border:'1px solid black'}}
                type = "text"
                name ="title"
                placeholder="new todo.."
                onChange={this.onChange}
                value ={this.state.title}
                />
                <input 
                style = {this.btn}
                type="submit"
                value="Add"
                />
            </form>
        )
        }
        btn = {
            flex:'1',
            display:'inline-block',
            border:'none',
            padding:'7px 20px',
            cursor:'pointer',
            background:'#555',
            color:'#fff'
        }
        getStyle = {
            display:'flex',
            padding:'10px',
            
        }

    }

export default AddTodo;
