import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_URL, API_KEY } from '../Config';
import Card from '../ui/Card';

function Main() {

    const [popular, setPopular] = useState();
    const [upcomming, setUpcomming] = useState();
    const [tvPopular, setTvPopular] = useState();

    useEffect(() => {
        getUpcomming();
        getTopRated();
        getTvTopRated();
    }, [])

    const getTopRated = () => {
        axios.get(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`)
        .then(Response => {
            // console.log(Response.data.results.slice(0, 8))
            setPopular(Response.data.results.slice(0, 4))
        }).catch(Error => console.log(Error))
    }

    const getUpcomming = () => {
        axios.get(`${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US`)
        .then(Response => {
            // console.log(Response.data.results)
            setUpcomming(Response.data.results.slice(0, 4))
        }).catch(Error => console.log(Error))
    }

    const getTvTopRated = () => {
        axios.get(`${API_URL}tv/popular?api_key=${API_KEY}&language=en-US`)
        .then(Response => {
            // console.log(Response.data.results)
            setTvPopular(Response.data.results.slice(0, 4))
        }).catch(Error => console.log(Error))
    }

    return ( 
        <>
            <div className='main-image'></div>
            <div className='container'>
                <h2 className='title'>Movies</h2>
                <div className='category'>
                    <h3 className='category-title'>Top Rated</h3>
                    <div className='category-list'>
                        {
                            popular &&
                            popular.map(movie => (
                                <Card card={movie} data='movie' key={movie.id} />
                            ))
                        }
                    </div>
                </div>
                <div className='category'>
                    <h3 className='category-title'>Upcomming</h3>
                    <div className='category-list'>
                        {
                            upcomming &&
                            upcomming.map(movie => (
                                <Card card={movie} data='movie' key={movie.id} />
                            ))
                        }
                    </div>
                </div>
                <h2 className='title'>TV Shows</h2>
                <div className='category'>
                    <h3 className='category-title'>Top Rated</h3>
                    <div className='category-list'>
                        {
                            tvPopular &&
                            tvPopular.map(movie => (
                                <Card card={movie} data='movie' key={movie.id} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
     );
}

export default Main;