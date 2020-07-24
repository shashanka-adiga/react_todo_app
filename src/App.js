import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Todo from './Components/Todo';
import Header from './Components/Header';
import AddTodo from './Components/AddTodo';
import About from './Components/Pages/About';

class App extends Component {
  state = {
    todos:[
      {
        title:"learn react",
        id:Math.floor(Math.random()*109),
        completed:false
      },
      {
        title:"study for internals",
        id:Math.floor(Math.random()*104),
        completed:false
      },
      {
        title:"exercise",
        id:Math.floor(Math.random()*19),
        completed:false
      }
    ]
  }
  markcomplete = (id) =>{
    let temp = [...this.state.todos]
    temp = this.state.todos.map( todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo 
    })
    this.setState({todo:temp})
  }
  clicked = (id) =>{
    let temp = [...this.state.todos]
    temp = this.state.todos.filter( todo => todo.id!==id)
    this.setState({todos:temp})
  }
  addTodo = (title) =>{
    console.log(title)
    const newTodo ={
      id:Math.floor(Math.random()*10),
      title:title,
      completed:false
    }
    this.setState({todos:[...this.state.todos,newTodo]})
  }
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
      <Route exact path="/" render ={ props =>(
        <React.Fragment>
         <div>
        <AddTodo addTodo ={this.addTodo} />
        <Todo todo = {this.state.todos}  clicked={this.clicked} markcomplete ={this.markcomplete}/>
        </div> 
        </React.Fragment>
      )}
      />
       <Route path="/about" component={About}/>
    </div>
  </Router>
  
     
      
    );
  }
}

export default App;
