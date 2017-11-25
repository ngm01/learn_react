import React, { Component } from 'react';

class ProjectItem extends Component {
    deleteProject(id){
        this.props.onDelete(id);
    }
    render() {
    return (
      <li className="ProjectItem">
        {this.props.project.title} due on {this.props.project.deadline}. Category: {this.props.project.category}. <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>Delete Project</a>
      </li>
    );
  }
}

export default ProjectItem;
