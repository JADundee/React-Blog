import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

const Layout = ({ search, setSearch }) => {
    return (
        <div className="App">
            <Header title="React JS Blog" />
            <Nav search={search} setSearch={setSearch} />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout



/* 
import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Nav from './components/Nav'

import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
      <div className="App">
          <Header title="React JS Blog" />
          <Nav  />
          <Outlet />
          <Footer />
      </div>
  )
}

export default Layout */

/* export const Layout = () => {
    const posts = useStoreState((state) => state.posts)
    const search = useStoreState((state) => state.search)
    const setSearch = useStoreActions((actions) => actions.setSearch)
    const setSearchResults = useStoreActions((actions) => actions.setSearchResults)

    useEffect(() => {
        const filteredResults = posts.filter(post => 
          ((post.body).toLowerCase()).includes(search.toLowerCase())
          || ((post.title).toLowerCase()).includes(search.toLowerCase())
          )
    
          setSearchResults(filteredResults.reverse())
      }, [posts, search, setSearchResults])

  return (
    <div className="App">
        <Header title="React Blog"/>
        <Nav />
        <Footer />
    </div>
  )
} 

export default Layout */