import * as React from 'react';
import './App.css';
import {connect} from "react-redux";
import {addTodo, fetchMovie, fetchPic,} from "./actions/index";
import {Action} from "./reducers/index";

const logo = require('./logo.svg');
type OwnProps = {}
type ConnectedState = {
    todos: any[],
    movies: any[],
    pictures:any[]
}
type ConnectedDispatch = {
    addTodo(text:string):Action ,
    fetchMovie():Action,
    fetchPic():Action
}
const mapStateToProps = (state: any, ownProps: OwnProps): ConnectedState => ({
    todos: state.todos,
    movies: state.movies,
    pictures:state.pictures
});
const mapDispatchToProps:ConnectedDispatch = {
    addTodo,
    fetchMovie,
    fetchPic
}


class App extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, any> {
    state = {
        value: ''
    }

    componentDidMount() {
        this.props.fetchMovie()
        this.props.fetchPic()
    }

    handleChange = (e: any) => {
        this.setState({value: e.target.value})
    }
    add = () => {
        const {value} = this.state
        this.props.addTodo(value)
    }

    render() {
        const {todos} = this.props
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <ul>
                    {todos.map((todo, index) => <li key={index}>{todo}</li>)}
                </ul>
                <input onChange={this.handleChange}/>
                <button onClick={this.add}>add</button>
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
