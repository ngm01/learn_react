import React, { Component } from 'react';
import uuid from "uuid";
import $ from 'jquery';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }

  getTodos(){
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/todos",
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    })

  }

  getProjects(){
    this.setState({projects: [
      {id:uuid.v4(), title: "Learn React", deadline: "11/26/17", category: "Work"},
      {id:uuid.v4(), title: "Create Pokemon API app", deadline: "11/27/17", category: "Work"},
      {id:uuid.v4(), title: "Get follow-up interview at Binary Fountain", deadline: "12/04/2017", category: "Work"}
      ]
    })
  }

  //a "lifecycle" method.
  componentWillMount(){
    this.getProjects();
    this.getTodos();
  }

  componentDidMount(){
    this.getTodos();
  }

  handleAddProject(project){
    //console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <br />
        <Projects projects = {this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
        <hr />
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
