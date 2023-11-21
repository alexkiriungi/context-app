import React from 'react';
import ReactDOM from 'react-dom/client';

const ThemeContext = React.createContext('light');

class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value='dark'>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

function Toolbar () {
  return (
    <div>
      <ThemeButton />
    </div>
  );
}

function Button (){
  return(
    <button>Theme</button>
  )
}

class ThemeButton extends React.Component {
  static contextType = ThemeContext;
  render(){
    return <Button theme = {this.context} />;
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);