import React ,{Component} from 'react';

class todoitem extends Component{
    getStyle = () => {
      return {
          padding:"7px",
          background:"lightgrey",
          textDecoration:this.props.todo.completed ? 'line-through':'none'
      }
    }
    btnStyle = () =>{
        return{
            borderRadius:"100%",
            float:"right",
            background:"red",
            outline:"none",
            border:"none"
        }
    }
    render(){
        const { id  ,title} = this.props.todo;
        return(
            <div style = {this.getStyle()}> 
                <p>
                <input type ="checkbox" onChange = {this.props.markcomplete.bind(this,id)} /> {' '}
                {title}
                <button style = {this.btnStyle()} onClick={this.props.clicked.bind(this,id)}>X</button>
                </p>
            </div>
        )
    }

}
export default todoitem;