import React, { useState } from 'react'
import './Search.css';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import {Button} from "@material-ui/core";
import {useNavigate} from "react-router-dom";
import { useStateValue } from '../StateProvider';

function Search({hideButtons = false}) {
    const [{}, dispatch] = useStateValue("");
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const search = (e)=>{
        e.preventDefault();
        dispatch({
            type:'SET_SEARCH_TERM',
            term: input
        })
        navigate('/search');
    }
  return (
    <>
    <form className="search">
        <div className="searchInput">
            <SearchIcon className='searchInputIcon' />
            <input value={input} onChange={e => setInput(e.target.value)}/>
            <MicIcon className='micInputIcon' />
        </div>
        {!hideButtons ? (
                <div className="searchButtons">
                    <Button type='submit' variant='outlined' onClick={search}>Google Search</Button>
                    <Button variant='outlined'>I'm feeling lucky</Button>
                </div>
        ):(
            <div className="searchButtons">
                <Button className='searchButtonsHidden' type='submit' variant='outlined' onClick={search}>Google Search</Button>
                <Button className='searchButtonsHidden' variant='outlined'>I'm feeling lucky</Button>
            </div>
        )}
    </form>
    </>
  )
}

export default Search