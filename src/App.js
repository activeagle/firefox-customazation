import CodeCategory from './components/CodeCategory';
import DocCategory from './components/DocCategory';
import EntCategory from './components/EntCategory';
import MusicCategory from './components/MusicCategory';
import ArtCategory from './components/ArtCategory';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
