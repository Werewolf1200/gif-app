import { useState } from "react";
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'DragonBall'])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([...categories, newCategory]);
    }
    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>
            
            {/* Input */}
            <AddCategory
            // setCategories={setCategories} 
                onNewCategory = {(value) => onAddCategory(value)}
            />

            {/* Listado de Gif */}

            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>{ category }</li>
                    })
                }
            </ol>

        </>      
  )
}