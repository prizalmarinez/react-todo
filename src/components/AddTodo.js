import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => {
        this.setState({ title: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.title)
        this.setState({ title: '' })
    }

    render() {
        return (
            <div>
                <h1>Add Todo</h1>
                <form className="ui form" onSubmit={this.onSubmit}>
                    <div className="field">
                        <input type="text" placeholder="Enter Todo Task" value={this.state.title} onChange={this.onChange} />
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default AddTodo; 