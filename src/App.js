import logo from './logo.svg';
import './App.css';

function App() {
  const handleNameChange = () => {
    const names = ['Bob', 'Kevin', 'Dave'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Hello {handleNameChange()}!</p>
        {/* curly braces represent jsx expressions. JSX expression convert everything into text. Without curly braces it takes it as a normal html */}
        {/* Obects and boolean are not rendered on the page. They will throw some error. Eg. {a: 2, b: 3} and {1 === 2} will throw error */}
        <p>html {"Dave"} 1 {[1, 2, 3]} [1, 2, 3]</p>
      </header>
    </div>
  );
}

export default App;
