import axios from 'axios';
import React, { useRef, useState } from 'react';
import { API_URL, API_KEY } from '../Config';
import { Link } from 'react-router-dom';

function Search() {

    const keywords = useRef('');
    const [result, setResult] = useState();

    const submitForm = (e) => {
        e.preventDefault();
        axios.get(`${API_URL}search/multi?api_key=${API_KEY}&query=${keywords.current.value}`)
        .then(Response => {
            console.log(Response.data.results)
            setResult(Response.data.results)
        }).catch(Error => {
            console.log(Error)
        })
    }

    return ( 
        <div className='container'>
            <div className='input-search'>
                <form onSubmit={submitForm}>
                    <input placeholder='Search for Movie, TV show, ...' ref={keywords} />
                    <button className='search-btn'>Search</button>
                </form>
            </div>
            <div className='output-search'>
                {
                    result &&
                    result.map(item => (
                        <Link to={`/${item.media_type}/${item.id}`} key={item.id}>
                            <div className='search-result'>{item.media_type == 'tv' ? item.name : item.title} / {item.media_type}</div>
                        </Link>
                        // <Card card={item} data={item.media_type} key={item.id} />
                    ))
                }
            </div>
        </div>
     );
}

export default Search;