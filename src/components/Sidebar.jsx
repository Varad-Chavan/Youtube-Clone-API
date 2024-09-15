import React from 'react'
import {Stack} from '@mui/material';
import { categories } from '../utils/constant';
//import { Category } from '@mui/icons-material';

const Sidebar = (props) => {
  return (
    <Stack 
        direction='row'
        sx={{
            overflowY:'auto',
            height:{sx:'auto',md:'95%'},
            flexDirection:{md:'column'}
        }}>
            {categories.map((categories) => (
                <button
                    className='category-btn'
                    onClick={()=>{props.setSelectedCategory(categories.name)}}
                    style={{background:categories.name===props.selectedCategory &&'#FC1503',color:'white'}}
                    key={categories.name}>
            
                    <span style={{color:categories.name===props.selectedCategory ? 'white':'red', marginRight:'15px'}}>{categories.icon}</span>
                    <span style={{opacity:categories.name===props.selectedCategory?'1':'0.8'}}>{categories.name}</span>
                </button>
        ))}
    </Stack>
  )
}

export default Sidebar
