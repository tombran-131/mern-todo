import React from 'react';
import Axios from 'axios';

import TodoList from './TodoList.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      todoItems: []
    };
  }

  /**
   * Aquire data from backend - presently, a json-server mockup
   */
  componentDidMount() {
    Axios.get('http://localhost:3000/todo-items')
    .then((res) => {
      console.table(res);
      this.setState({
        isLoading: false,
        todoItems: res
      });
    })
    .catch((err) => {
      console.log(`Error in App.jsx::App.componentDidMount()`);
      console.log(err);
    });
  }

  render() {
    if (this.isLoading) {
      return (<div><h1>From src/components/app.jsx</h1><h2>Relax</h2></div>);
    } else {
      return (
        <div id={"app-wraps-todolist"} className={"wrapper"}>
          <TodoList todoItems={this.state.todoItems} />
        </div>
      );
    }
  }

}
export default App;

