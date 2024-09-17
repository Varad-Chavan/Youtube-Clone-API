import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper,IconButton } from '@mui/material'
import{Search} from '@mui/icons-material'

const SearchBar = () => {
  const [text, setText] = useState('');
  const Navigate=useNavigate();
  const handleOnChange =(event)=>{
    setText(event.target.value)

    } // TO LISTEN THE TEXT
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(text){
      Navigate(`/search/${text}`);
      setText('')
    }
  }
  return (
    <Paper
        component='form'
        onSubmit={handleSubmit}
        sx={{border:'1px soild e3e3e3',
            borderRadius:20,
            pl:2,
            boxShadow:'None',
            mr:{sm:5}
        }}>
            <input type="text" className="search-bar" placeholder="Search..." value={text} onChange={handleOnChange} />
            <IconButton type="submit" sx={{p:'10px', color:'red'}}>
                <Search/>
            </IconButton>
    </Paper>
  )
}

export default SearchBar
