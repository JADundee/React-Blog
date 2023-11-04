import Header from "./Header"
import Nav from "./Nav"
import Footer from "./Footer"
import Home from "./Home"
import NewPost from "./NewPost"
import PostPage from "./PostPage"
import About from "./About"
import Missing from "./Missing"
/* import { Route, Switch, useHistory } from "react-router-dom" */
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useHistory,
} from 'react-router-dom';
import { useState, useEffect } from "react"


function App() {
  return (
    <div className="App">
      <Router>
        <Header />

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
      <Nav />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/post">
          <NewPost />
        </Route>
        <Route path="/post/:id">
          <PostPage />
        </Route>
        <Route path="/about" Component={About} />
        <Route path="*" Component={Missing} />
      </Switch>
      <Footer />
    </div>
  ); */
}

export default App;