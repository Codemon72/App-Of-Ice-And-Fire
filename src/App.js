import { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(
      'https://pixabay.com/api/?key=${process.env.REACT-APP-PIXABAY-KEY}&q=${term}'
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto">
      {isLoading 
        ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> 
        : images.map(image => (
        <div className="grid grid-cols-3 gap4">
          <ImageCard key={image.id} />
        </div>
      ))}
    </div>
  );
}

export default App;
