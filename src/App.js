import Header from "./Header"
import Nav from "./Nav"
import Footer from "./Footer"
import Home from "./Home"
import NewPost from "./NewPost"
import PostPage from "./PostPage"
import EditPost from "./EditPost"
import About from "./About"
import Missing from "./Missing"
import { format } from 'date-fns'
/* import { Route, Switch, useHistory } from "react-router-dom" */
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useHistory,
} from 'react-router-dom';
import { useState, useEffect } from "react"
import api from './api/posts'
import useWindowSize from "./hooks/useWindowSize"
import useAxiosFetch from "./hooks/useAxiosFetch"



function App() {
  const [search, setSearch] = useState('')
  const [posts, setPosts] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const [editBody, setEditBody] = useState('')
  const [editTitle, setEditTitle] = useState('')
  const history = useHistory()
  const { width } = useWindowSize()

  const { data, fetchError, isLoading } = useAxiosFetch(`http://localhost:3500/posts`)

  useEffect(() => {
    setPosts(data)
  }, [data])

  useEffect(() => {
    const filteredResults = posts.filter(post => 
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase())
      )

      setSearchResults(filteredResults.reverse())
  }, [posts, search])

  const handleSubmit = async (e) => {
    e.preventDefualt()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const newPost = { id, title: postTitle, datetime, body: postBody }
    try {
      const response = await api.post(`/posts`, newPost)

      const allPosts = [ ...posts, response.data ]
      setPosts(allPosts)
      setPostTitle('')
      setPostBody('')
      history.push('/')
    } catch (err) {
      console.log(`Error: ${err.message}`)
    }
  }

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

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`)
    const postsList = posts.filter(post => post.id !== id)
    setPosts(postsList)
    history.push('/')
  } catch (err) {
    console.log(`Error: ${err.message}`)
  }


  /* return (
    <div className="App">
      <Router>
        <Header title="React Blog"/>

        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/post" element={<NewPost />} />

          <Route path="/post/:id" element={<PostPage />} />

          <Route path="/about" element={<About />} />

          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  ); */




  return (
    <div className="App">
      <Header title="React Blog" width={width}/>
      <Nav search={search} setSearch={setSearch} />
      <Switch>
        <Route path="/">
          <Home 
            posts={searchResults}
            fetchError={fetchError}
            isLoading={isLoading}   
          />
        </Route>
        <Route path="/post">
          <NewPost 
            handleSubmit={handleSubmit}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
          />
        </Route>
        <Route path="/edit/:id">
          <EditPost 
            posts={posts}
            handleEdit={handleEdit}
            editTitle={editTitle}
            setEditTitle={setEditTitle}
            editBody={editBody}
            setEditBody={setEditBody}
          />
        </Route>
        <Route path="/post/:id">
          <PostPage posts={posts} handleDelete={handleDelete} />
        </Route>
        <Route path="/about" Component={About} />
        <Route path="*" Component={Missing} />
      </Switch>
      <Footer />
    </div>
  );
}
}

export default App;