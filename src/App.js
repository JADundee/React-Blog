import Header from "./components/Header"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Home from "./components/Home"
import NewPost from "./components/NewPost"
import PostPage from "./components/PostPage"
import EditPost from "./components/EditPost"
import About from "./components/About"
import Missing from "./components/Missing"
import { Route, Switch } from "react-router-dom"
import { useEffect } from "react"
import useAxiosFetch from "./hooks/useAxiosFetch"
import { useStoreActions } from "easy-peasy"

function App() {
  const setPosts = useStoreActions((actions) => actions.setPost)
  const { data, fetchError, isLoading } = useAxiosFetch(`http://localhost:3500/posts`)
  
    useEffect(() => {
      setPosts(data)
    }, [data, setPosts])

  return (
    <div className="App">
        <Header title="React Blog"/>
            <Nav />
            <Switch>
              <Route path="/">
                <Home
                isLoading={isLoading}
                fetchError={fetchError}
                />
              </Route>
              <Route path="/post" Component={NewPost} />
              <Route path="/edit/:id" Component={EditPost} />
              <Route path="/post/:id" Component={PostPage} />
              <Route path="/about" Component={About} />
              <Route path="*" Component={Missing} />
            </Switch>
        <Footer />
    </div>
  );
}

export default App;