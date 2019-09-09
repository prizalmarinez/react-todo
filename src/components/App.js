import React, { Component } from 'react';
// api
import jsonPlaceholder from '../api/jsonPlaceholder'
// components
import MenuHeader from './MenuHeader'
import Todolist from './TodoList'
import AddTodo from './AddTodo'

class App extends Component {
    state = {
        todos: []
    }

    componentDidMount() {
        jsonPlaceholder.get('/todos').then(response => {
            const result = response.data.slice(0, 10)
            this.setState({ todos: result });
        })
    }

    onDelete = id => {
        jsonPlaceholder.delete(`/todos/${id}`).then(_ => {
            this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
        })
    }

    onDone = value => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === value.id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        })
    }

    onAdd = title => {
        const newTodo = {
            title: title,
            completed: false,
            id: new Date().getTime()
        };
        this.setState({ todos: [...this.state.todos, newTodo] })
    }

    render() {
        return (
            <div>
                <MenuHeader />
                <div className='ui container'>
                    <div className='ui grid'>
                        <div className='column eight wide'>
                            <AddTodo addTodo={this.onAdd} />
                        </div>
                        <div className='column eight wide'>
                            <Todolist todos={this.state.todos} delTodo={this.onDelete} doneTodo={this.onDone} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;