import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import Category from './component/Category'
import Tasks from './component/Tasks';

class App extends React.Component {

  state = {
    categorieSelected : 'All',
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ]
  }

setNewtodo = (newtodo) => {
  this.setState({tasks: [...this.state.tasks, newtodo]})
}

setCategorieApp = (newCat) => {
 this.setState({categorieSelected: newCat})
 
}

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        
        <Category setCategorieApp={this.setCategorieApp} categories={CATEGORIES}/>
        
        <Tasks setNewtodo={this.setNewtodo} newCat={this.state.categorieSelected} tasks={this.state.tasks}/>
      </div>
    );
  }
}


export default App;
