import React from 'react';
import './SearchResult.css';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
}) {
    return (
        <div className='searchResult'>
            <img src={img} alt="" />
            <FavoriteBorderIcon className="searchResult__heart" />

            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star" />
                        <p>
                            <p>{star}</p>
                        </p>
                    </div>
                    <div className='searchResults__price'>
                        <p>{price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult;