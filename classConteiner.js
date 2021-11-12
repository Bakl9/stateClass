import React, {Component} from 'react';

class ClassBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        }
            this.decrement = this.decrement.bind(this)
            this.increment = this.increment.bind(this)

    }

    increment() {
        this.setState({count: this.state.count + 1})
    }


    decrement() {
        this.setState({count: this.state.count - 1})
    }

  

    render() {
        return (
            <div>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
                <h1>{this.state.count}</h1>
            </div>
        );
    }
}

export default ClassBox;
