import { useEffect, useState } from 'react';
import { GifItem } from './GifItem';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  }

  // Disparar efectos secuandarios: un proceso que se quiere dispara cuando algo suceda
  useEffect(() => {
    getImages(category);
  }, [])
  
    return (
      <>
        <h3>{category}</h3>

        <div className='card-grid'>
          {
            images.map((image) => (
              <GifItem 
                key={image.id}
                {...image}// Expandir props
              />
                ))
          }
        </div>
      </>
  )
}