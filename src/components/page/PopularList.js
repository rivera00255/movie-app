import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_URL, API_KEY, IMAGE_URL } from '../Config';
import Lists from './Lists';

function PopularList({ data }) {

    const [currentPage, setCurrentPage] = useState(1);
    const [list, setList] = useState();

    const url = `${API_URL}${data}/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`;

    // console.log('now : ' + currentPage)

    useEffect(() => {
        getList();
    }, [url, currentPage])

    const getList = () => {
        axios.get(url)
        .then(Response => {
            // console.log(Response.data.results)
            setList(Response.data.results)
            currentPage >= 2 ? setList([...list, ...Response.data.results]) : setList(Response.data.results)
        }).catch(Error => console.log(Error))
    }

    const btnHandler = () => {
        setCurrentPage(current => current + 1);
    }

    return ( 
        <>
            <div className='main-image'>
                {
                    list && 
                    <img src={`${IMAGE_URL}original${list[0].backdrop_path}`} alt={list[0].title} />
                }
                <div className='cover'>Most Popular</div>
            </div>
            <Lists list={list} btnHandler={btnHandler} data={data} />
        </>
     );
}

export default PopularList;