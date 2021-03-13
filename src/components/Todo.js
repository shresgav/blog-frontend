// frontend/src/App.js

import React, { Component } from "react";
import Modal from "./Modal";
import axios from "axios";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      activeItem: {
        title: "",
        description: "",
        completed: false
      },
      todoList: []
    };
  }
  componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    axios
      .get("https://gavin-blog-api.herokuapp.com/api/todos/")
      .then(res => this.setState({ todoList: res.data }))
      .catch(err => console.log(err));
  };
  displayCompleted = status => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }
    return this.setState({ viewCompleted: false });
  };
  renderTabList = () => {
    return (
      <div className="my-4 tab-list">
        <span
          onClick={() => this.displayCompleted(true)}
          style = {{
            padding : '4px',
            backgroundColor: this.state.viewCompleted ? "black" : "white",
            color : 'blue' 
          }}
        >
          Complete
         </span>
        <span
          onClick={() => this.displayCompleted(false)}
          style = {{
            padding : '4px',
            backgroundColor: this.state.viewCompleted ? "white" : "black",
            color : 'blue' 
          }}
          className={this.state.viewCompleted ? "" : "active"}
        >
          Incomplete
         </span>
      </div>
    );
  };
  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.todoList.filter(
      item => item.completed === viewCompleted
    );
    return newItems.map(item => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`todo-title mr-2 ${this.state.viewCompleted ? "completed-todo" : ""
            }`}
          title={item.description}
        >
          {item.title}
        </span>
        <span>
          <button
            onClick={() => this.editItem(item)}
            className="btn btn-secondary mr-2"
          >
            {" "}
             Edit{" "}
          </button>
          <button
            onClick={() => this.handleDelete(item)}
            className="btn btn-danger"
          >
            Delete{" "}
          </button>
        </span>
      </li>
    ));
  };
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  handleSubmit = item => {
    this.toggle();

    if (item.id) {
      var csrftoken = this.getCookie('csrftoken');
      axios.defaults.headers.put['X-CSRFToken'] = csrftoken;
      axios.defaults.headers.put['X-Requested-With'] = 'XMLHttpRequest';

      axios
        .put(`https://gavin-blog-api.herokuapp.com/api/todos/${item.id}`, item)
        .then(res => this.refreshList());
      return;
    }
    axios
      .post("https://gavin-blog-api.herokuapp.com/api/todos/", item)
      .then(res => this.refreshList());
  };
  getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');

      for (var i = 0; i < cookies.length; ++i) {
        var cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  };
  handleDelete = item => {
    var csrftoken = this.getCookie('csrftoken');
    axios.defaults.headers.delete['X-CSRFToken'] = csrftoken
    axios.defaults.headers.delete['X-Requested-With'] = 'XMLHttpRequest'
    axios
      .delete(`https://gavin-blog-api.herokuapp.com/api/todos/${item.id}`)
      .then(res => this.refreshList());
  };
  createItem = () => {
    const item = { title: "", description: "", completed: false };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };
  editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };
  render() {
    return (
      <main className="content">
        <h1 className="text-black text-uppercase text-center my-4">Todo app</h1>
        <div className="row ">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="">
                <button onClick={this.createItem} className="btn btn-primary">
                  Add task
                 </button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}
export default Todo;