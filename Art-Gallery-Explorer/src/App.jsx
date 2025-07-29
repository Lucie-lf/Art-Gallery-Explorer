import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import './assets/pic-test.jpg'
import Card from './components/card.jsx'
import Header from './components/Header.jsx'
import './index.css'
import { getObjects, getObjectsById } from './api/get_objects.jsx'
import picTest from './assets/pic-test.jpg';


function App() {

  const [artPieces, setArtPieces] = useState([])
  useEffect(() => {
    async function fetchArtPieces() {
      const data = await getObjects();
      if (data?.objectIDs) {
        const limitedIDs = data.objectIDs.slice(0, 10);
        const promises = limitedIDs.map(id => getObjectsById(id));
        const results = await Promise.all(promises);
        setArtPieces(results);
      }
    }
    fetchArtPieces();
  }, []);

  return (
    <>
      <div className="flex flex-col h-full w-full">
        <Header/>
        <div className="flex flex-row justify-center p-4 gap-4 w-full h-full flex-wrap">
          {artPieces.map((piece) => (
            <Card 
            key={piece.objectID}
            image={piece.primaryImageSmall || picTest}
            title={piece.title || "Untitled"}
            artist={piece.artistDisplayName || "Unkwown artist"}
            date={piece.objectDate || "Unkwown date"}
            department={piece.department || "Unkwown Department"}
          />
          
          ))}
        </div>
      </div>
    </>
    
  )
}

export default App
