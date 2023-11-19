import React from 'react';
import './SearchResult.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
function SearchResult({img,location,title,description,star,price,total,}) {
    return (
        <div className='searchresult'>
            <img src={img} alt="" />
            <FavoriteBorderIcon className="searchresultheart" />

            <div className='searchresultinfo'>
                <div className="searchresultinfoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>

                <div className="searchresultinfoBottom">
                    <div className="searchresultstars">
                        <StarIcon className="searchresultstar" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='searchresultsprice'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
