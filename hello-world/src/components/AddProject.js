import React, { Component } from 'react';
//import ProjectItem from './ProjectItem';

class AddProject extends Component {
    constructor(){
        super();
        //NB: each component has it's own STATE.
        //state in AddProject component is
        //different from state in (e.g.) App component.
        this.state = {
            newProject: {}
        }
    }

    static defaultProps = {
        categories: ['Personal', 'Work', 'Other']
    }

    handleSubmit(e){
        if(this.refs.title.value === ""){
            alert("Title required.");
        }
        else{
            console.log("We are in the else statement.")
            console.log(this.refs.title.value);
            this.setState({
                newProject: {
                    title: this.refs.title.value,
                    deadline: this.refs.deadline.value,
                    category: this.refs.category.value
                }},
                function(){
                    console.log(this.state);
                    console.log("We are in the function...")
                    this.props.addProject(this.state.newProject);
                }
            )
        }
        e.preventDefault();
    }

    render() {
    //how does this function know to pull "categories" from the defaultProps object
    //when that object hasn't been accessed explicitly in this function?
    let categoryOptions = this.props.categories.map(category =>{
        return <option key={category} value={category}>{category}</option>
    })
    return(
        <div className="AddProject">
            <h3>Add a Project.</h3>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                    <label>Title</label> <br />
                    <input type="text" ref="title" />
                </div>
                <div>
                    <label>Deadline</label> <br />
                    <input type="date" ref="deadline" defaultValue="2018-01-01"/>
                </div>
                <div>
                    <label>Category</label> <br />
                    <select ref="category">
                    {categoryOptions}
                    </select>
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
  }
}

export default AddProject;