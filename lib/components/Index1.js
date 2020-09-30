import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{

    state = {
        answer:42,
    };

    asyncFunc =()=>{
        return Promise.resolve(4);
    }

    async componentDidMount(){
        this.setState({
            answer: await this.asyncFunc()
        });
    }

    render (){
        return(
            <h2>hello -- {this.state.answer}</h2>
        );
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));