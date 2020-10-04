import React, { useState } from 'react'

const Characters = ({posts}) => {
    const [currentPage] = useState(1);
    const [postsPerPage] = useState(10);

 const indexOfLastPost=currentPage * postsPerPage;
 const indexOfFirstPost=indexOfLastPost-postsPerPage;
 const currentPosts=posts.slice(indexOfFirstPost,indexOfLastPost)

    return (
        <div className='card-container'>
        {currentPosts.map(post=>(
            <div className='card' id={ post.char_id}>
            <img src={post.img} alt='news'/>
            <p className='small'>Name: <i>{post.name}</i></p>
            <p className='small'>Birthday: <i>{post.birthday}</i></p>
            <p className='small'>Nickname: <i>{post.nickname}</i></p>
           
            </div>
        ))}
    </div>
    )
}

export default Characters
