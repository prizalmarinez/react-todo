import React, { Component } from 'react';

class TodoList extends Component {

    getStyle = data => {
        if (data) {
            return {
                background: "red"
            }
        } else {
            return {
                background: "green"
            }
        }
    }

    renderList(status) {
        return this.props.todos.filter(todo => todo.completed === status).map((todo) => {
            return (
                <div className="item" key={todo.id}>
                    <div className="right floated content">
                        <div className="ui buttons">
                            <button className={"ui icon button " + (todo.completed ? "blue " : "green ")} onClick={this.props.doneTodo.bind(this, todo)}>
                                <i className="check icon"></i>
                            </button>
                            <button className="ui icon red button" onClick={this.props.delTodo.bind(this, todo.id)}>
                                <i className="trash icon"></i>
                            </button>
                        </div>
                    </div>
                    <div className="content">
                        <div><b>Title</b></div>
                        <div>{todo.title}</div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="ui middle aligned divided list">
                <h1>
                    Pending: {this.renderList(false).length}
                </h1>
                {this.renderList(false)}
                <h1>
                    Completed: {this.renderList(true).length}
                </h1>
                {this.renderList(true)}
            </div>
        );
    }
}

export default TodoList;