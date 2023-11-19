import React, { useState } from 'react'
import './Banner.css'
import Search from './Search';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
function Banner() {
    const navigate = useNavigate();
    const [showSearch, setShowSearch] = useState(false);
    const handleButtonClick=()=>{
        navigate('/search')
    }

    return (
        <div className='banner'>
            <div className='bannersearch'>
                {showSearch && <Search />}

                <Button onClick={() => setShowSearch(!showSearch)} className='bannersearchButton' variant='outlined'>
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>
            <div className='bannerinfo'>
                <h1>Get out and stretch your imagination</h1>
                <h5>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </h5>
                <Button onClick={handleButtonClick} variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
