import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL, API_KEY, IMAGE_URL } from '../Config';

function Detail({ data }) {

    const {id} = useParams();

    const [info, setInfo] = useState({});
    const [videos, setVideos] = useState();
    const [cast, setCast] = useState();

    useEffect(() => {
        getInfo();
        getCast();
        getVideo();
    },[])

    const getInfo = () => {
        axios.get(`${API_URL}${data}/${id}?api_key=${API_KEY}&language=en-US`)
        .then(Response => {
            console.log(Response.data)
            setInfo(Response.data)
        }).catch(Error => console.log(Error))
    };

    const getVideo = () => {
        axios.get(`${API_URL}${data}/${id}/videos?api_key=${API_KEY}&language=en-US`)
        .then(Response => {
            // console.log(Response.data.results.filter(item => item.type == 'Trailer'))
            setVideos(Response.data.results.filter(item => item.type == 'Trailer'))
        }).catch(Error => console.log(Error))
    }

    const getCast = () => {
        axios.get(`${API_URL}${data}/${id}/credits?api_key=${API_KEY}&language=en-US`)
        .then(Response => {
            // console.log(Response.data.cast)
            setCast(Response.data.cast.slice(0, 12))
        }).catch(Error => console.log(Error))
    }

    return ( 
        <div className='container'>
            {
                info && 
                <div className='info'>
                    <div className='info-title'>
                        <h2>{data == 'movie' ? info.title : info.name}</h2>
                        <p>Release Date : {data == 'movie' ? info.release_date : info.first_air_date}</p>
                        <p>{data == 'movie' ? `Runtime : ${info.runtime}minutes` : null}</p>
                    </div>
                    <div className='info-image'>
                        <img src={`${IMAGE_URL}/w1280/${info.backdrop_path}`} alt={info.title} />
                    </div>
                    <div className='info-txt'>
                        <p><strong>Overview</strong></p>
                        <p>{info.overview}</p>
                    </div>
                </div>
            }
            <div className='video'>
                <h3 className='sub-title'>Video</h3>
                {/* npm install --save react-youtube */}
                <div className='player'>
                {
                    videos &&
                    videos.map(item => (
                        <iframe src={`https://www.youtube.com/embed/${item.key}`} key={item.name}></iframe>
                    ))
                }
                </div>
                {/* <div className='player'>
                    <iframe src={`https://www.youtube.com/watch?v=${}`}></iframe>
                </div> */}
            </div>
            <div className='cast'>
                <h3 className='sub-title'>Cast</h3>
                <div className='actors'>
                    {
                        cast &&
                        cast.map(item => (
                            <div className='actor' key={item.name}>
                                <img src={`${IMAGE_URL}w500${item.profile_path}`} alt={item.name} />
                                <p>{item.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
     );
}

export default Detail;