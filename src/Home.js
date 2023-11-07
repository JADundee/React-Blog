import React from 'react'
import Feed from './Feed'

const Home = ({ posts, fetchError, isLoading }) => {
  return (
    <main className='Home'>
        {isLoading && <p className='statusMsg'>Loading posts...</p>}
        {!isLoadinf && fetchError && <p className='statusMsg' style={{color: "red"}}>{fetchError}</p>}
          {!isLoading && !fetchError && (posts.length ? 
          <Feed posts={posts}/> : 
          <p className='statusMg'>No posts to display.</p>)}
    </main>
  )
}

export default Home