import React from 'react';
import Axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  /**
   * Aquire data from backend - presently, a json-server mockup
   */
  componentDidMount() {
    Axios.get('http://localhost:3000/todo-items')
    .then((res) => {
      console.table(res);
    })
    .catch((err) => {
      console.log(`Error in App.jsx::App.componentDidMount()`);
      console.log(err);
    })
  }

  render() {
    return (<div><h1>From src/components/app.jsx</h1><h2>Relax</h2></div>);
  }

}
export default App;

