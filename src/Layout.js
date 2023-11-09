
import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Nav from './components/Nav'
/* import { Outlet } from 'react-router-dom' */

export const Layout = () => {
  return (
    <div className="App">
        <Header title="React Blog"/>
        <Nav />
        <Footer />
    </div>
  )
}

export default Layout