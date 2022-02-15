import React from 'react';
import Card from '../ui/Card';

function Lists({ list, btnHandler, data }) {

    return ( 
        <>
            <div className='container'>
                <h2 className='main-title'>What's Popular</h2>
                <div className='wrapper'>
                    {
                        list &&
                        list.map(movie => (
                            <Card card={movie} data={data} key={movie.id} />
                        ))
                    }
                </div>
                <button className='moreBtn' onClick={btnHandler}>more view</button>
            </div>
        </>
     );
}

export default Lists;