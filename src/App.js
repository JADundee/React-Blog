import Header from "./Header"
import Nav from "./Nav"
import Footer from "./Footer"
import Home from "./Home"
import NewPost from "./NewPost"
import PostPage from "./PostPage"
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



function App() {
  const [search, setSearch] = useState('')
  const [posts, setPosts] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')

  const history = useHistory()

  useEffect(() => {
    const filteredResults = posts.filter(post => 
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase())
      )

      setSearchResults(filteredResults.reverse())
  }, [posts, search])
  const handleSubmit = (e) => {
    e.preventDefualt()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const newPost = { id, title: postTitle, datetime, body: postBody }
    const allPosts = [ ...posts, newPost ]
    setPosts(allPosts)
    setPostTitle('')
    setPostBody('')
    history.push('/')
  }

  const handleDelete = (id) => {
    const postsList = posts.filter(post => post.id !== id)
    setPosts(postsList)
    history.push('/')
  }


  return (
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
  );




  /* return (
    <div className="App">
      <Header />
      <Nav search={search} setSearch={setSearch} />
      <Switch>
        <Route path="/">
          <Home posts={searchResults} />
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
        <Route path="/post/:id">
          <PostPage posts={post} handleDelete={handleDelete} />
        </Route>
        <Route path="/about" Component={About} />
        <Route path="*" Component={Missing} />
      </Switch>
      <Footer />
    </div>
  ); */
}

export default App;