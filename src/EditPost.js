import React from 'react'
import { useEffect, useContext, useState } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import DataContext from './context/DataContext'
import api from './api/posts'
import format from 'date-fns/format'

const EditPost = () => {
    const [editBody, setEditBody] = useState('')
    const [editTitle, setEditTitle] = useState('')
    const { posts, setPosts } =  useContext(DataContext)
    const history = useHistory()
    const { id } = useParams()
    const post = post.find(post => (post.id).toString() === id)

    useEffect(() => {
        if (post) {
            setEditTitle(post.title)
            setEditBody(post.body)
        }
    }, [post, setEditTitle, setEditBody])

    const handleEdit = async (id) => {
        const datetime = format(new Date(), 'MMMM dd, yyyy pp')
        const updatedPost = { id, title: editTitle, datetime, body: editBody }
        try {
          const response = await api.put(`/posts/${id}`, updatedPost)
          setPosts(posts.map(post => post.id === id ? { ...response.data} : post))
          setEditTitle('')
          setEditBody('')
          history.push('/')
        } catch (err) {
          console.log(`Error: ${err.message}`)
        }
      }

  return (
    
    <main className='NewPost'>
        {editTitle && 
        <>
        <h2>Edit Post</h2>
        <form className='newPostForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="postTitle">Title:</label>
            <input 
                type="text"
                id='postTitle'
                required
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)} 
            />
            <label htmlFor="postBody">Post:</label>
            <textarea 
                id="postBody" 
                required
                value={editBody}
                onChange={(e) => setEditBody(e.target.value)}
            ></textarea>
            <button type='submit' onClick={() => handleEdit(post.id)}>Submit</button>
        </form>
        </>
        } 
         {!editTitle && 
                <>
                    <h2>Post Not Found</h2>
                    <p>...</p>
                    <p>
                        <Link to='/'>Back to homepage</Link>
                    </p>
                </>
        }
    </main>
)
}

export default EditPost