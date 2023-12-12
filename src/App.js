import CodeCategory from './components/CodeCategory';
import DocCategory from './components/DocCategory';
import EntCategory from './components/EntCategory';
import MusicCategory from './components/MusicCategory';
import ArtCategory from './components/ArtCategory';
import './App.css';
import logo from './logo.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <logo/>
        <CodeCategory/>
        <DocCategory/>
        <EntCategory/>
        <MusicCategory/>
        <ArtCategory/>
      </header>
    </div>
  );
}

export default App;
