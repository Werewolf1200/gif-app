import { useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

  // Disparar efectos secuandarios: un proceso que se quiere dispara cuando algo suceda
  useEffect(() => {
    getGifs(category);
  }, [])
  
    return (
      <>
            <h3>{category}</h3>
      </>
  )
}