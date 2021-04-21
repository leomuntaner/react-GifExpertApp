import React from 'react'
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    // CUSTOM HOOK
    const { data:images, loading } = useFetchGifs( category );

    return (

        <>
        <h3 className='animate__animated animate__fadeIn' > {category} </h3>

        { loading && <p className='animate__animated animate_flash'>Loading..</p> }

        <div className='card-grid'>
            {
                images.map( img => (
                    <GifGridItem 
                        key={img.id}
                        {...img} />
                    ))
                }                
            </div> 
        </>        
    );
}
