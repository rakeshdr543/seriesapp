import React from 'react'

const CharacterPosts = ({posts}) => {
    return (
        <div className='card-container'>
            {posts.map(post=>(
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

export default CharacterPosts
