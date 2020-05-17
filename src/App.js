import React from 'react';
import Header from './header';
import About from './about';
import Skills from './skills'
import Contact from './contact'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      color: "red"
    }
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <About />
          <hr />
          <Skills />
          <hr />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
