import React, {Component} from 'react';
import ReactDOM from 'react-dom';



class App extends Component {

    state = {
        answer: 42
    }

     asyncFunction = () => {
        return Promise.resolve(37);
    }

    async componentDidMount() {
        this.setState({answer: await this.asyncFunction()});
    }
    
    render() {
        return (
            <div>
                 <h2>Hello Class Components -- {this.state.answer}</h2>
            </div>
        );
    }
}

export default App;




ReactDOM.render(
    <App />,
    document.getElementById('root')
);