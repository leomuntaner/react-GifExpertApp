import React,{ useState } from 'react'
import { AddCategory} from './components/AddCategory';
import PropTypes from 'prop-types';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ( { defaultCategories = [] } ) => {

    //const [categories, setCategories] = useState(['One Punch']);
    const [categories, setCategories] = useState(defaultCategories);

    return (
     <>        
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr/> 
        <ol>
            {
                categories.map( category =>{
                  return <GifGrid 
                            category={ category }
                            key= { category }    
                         />
                })
            }
        </ol>

     </>
    )

};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};
