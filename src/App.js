import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      const allCharacters = await axios('https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50')
      console.log(allCharacters.data)
    }
    fetchCharacters();
  }, [])


  return (
    <div className='App'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
