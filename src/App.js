import CodeCategory from './components/CodeCategory';
import DocCategory from './components/DocCategory';
import EntCategory from './components/EntCategory';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CodeCategory/>
        <DocCategory/>
        <EntCategory/>
      </header>
    </div>
  );
}

export default App;
