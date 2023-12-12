import CodeCategory from './components/CodeCategory';
import DocCategory from './components/DocCategory';
import EntCategory from './components/EntCategory';
import MusicCategory from './components/MusicCategory';
import ArtCategory from './components/ArtCategory';
import SearchBar from './components/SearchBar';
import './App.css';
import logo from './logo.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar/>
        <div className='bookmark'>
        <CodeCategory/>
        <DocCategory/>
        <EntCategory/>
        <MusicCategory/>
        <ArtCategory/>
        </div>
      </header>
    </div>
  );
}

export default App;
