import React, { useState } from 'react'

const Episodes = ({posts}) => {
    const [currentPage] = useState(1);
    const [postsPerPage] = useState(10);

 const indexOfLastPost=currentPage * postsPerPage;
 const indexOfFirstPost=indexOfLastPost-postsPerPage;
 const currentPosts=posts.slice(indexOfFirstPost,indexOfLastPost)

    return (
        <div className='card-container'>
            {currentPosts.map(post=>(
                <div className='card' id={post.episode_id}>
                <p className='small'>Title: <i>{post.title}</i></p>
                <p className='small'>Episode: <i>{post.episode}</i></p>
                <p className='small'>Air date: <i>{post.air_date}</i></p>
                <p className='small'>Season: <i>{post.season}</i></p>
                <p className='small'>Series: <i>{post.series}</i></p>
                </div>
            ))}
        </div>
    )
}

export default Episodes
