import Home from "./components/Home"
import NewPost from "./components/NewPost"
import PostPage from "./components/PostPage"
import EditPost from "./components/EditPost"
import About from "./components/About"
import Missing from "./components/Missing"
import { Route, Routes } from "react-router-dom"
import { useEffect } from "react"
import useAxiosFetch from "./hooks/useAxiosFetch"
import Layout from "./Layout"
import { useStoreState, useStoreActions } from "easy-peasy"

function App() {
  const search = useStoreState((state) => state.search)
  const setSearch = useStoreActions((actions) => actions.setSearch)
  const setPosts = useStoreActions((actions) => actions.setPosts)
  const { data, fetchError, isLoading } = useAxiosFetch(`http://localhost:3500/posts`)
  
    useEffect(() => {
      setPosts(data)
    }, [data, setPosts])

  return (

    <Routes>
    <Route path="/" element={<Layout
      search={search}
      setSearch={setSearch}
    />}>
      <Route index element={<Home 
      isLoading={isLoading}
      fetchError={fetchError}
      />} />
      <Route path="post">
        <Route path=":id/edit" element={<EditPost />} />
        <Route index element={<NewPost/>} />
        <Route path="edit/:id" element={ <EditPost />} />
        <Route path=":id" element={<PostPage />} />
      </Route>
      <Route path="about" element={<About />} />
      <Route path="*" element={<Missing />} />
    </Route>
  </Routes>
          /*   <Routes>
              <Route path="/" element={<Layout 
              search={search}
              setSearch={setSearch}/>}>
                <Route index element={<Home 
                  isLoading={isLoading}
                  fetchError={fetchError}
                />}>
                
              </Route>
              <Route index path="/post" element={<NewPost />} />
              <Route path="/edit/:id" element={<EditPost />} />
              <Route path="/post/:id" element={<PostPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/*" element={<Missing />} />
              </Route>
            </Routes> */
  );
}

export default App;