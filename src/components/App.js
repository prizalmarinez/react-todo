import React, { Component } from 'react';
// api
import jsonPlaceholder from '../api/jsonPlaceholder'

class App extends Component {
    componentDidMount() {
        console.log('hit');
        jsonPlaceholder.get('/todos').then(response => {
            console.log(response);
        })
    }
    render() {
        return (
            <div className='ui container'>
                <div className='ui grid'>
                    <div className='column eight wide'>
                        adasdasd
                    </div>
                    <div className='column eight wide'>
                        adasdasd
                    </div>
                </div>
            </div>
        );
    }
}

export default App;