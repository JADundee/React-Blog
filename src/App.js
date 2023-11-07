import Header from "./Header"
import Nav from "./Nav"
import Footer from "./Footer"
import Home from "./Home"
import NewPost from "./NewPost"
import PostPage from "./PostPage"
import EditPost from "./EditPost"
import About from "./About"
import Missing from "./Missing"
import { Route, Switch } from "react-router-dom"
import { DataProvider } from "./context/DataContext"



function App() {

  return (
    <div className="App">
        <Header title="React Blog"/>
          <DataProvider>
            <Nav />
            <Switch>
              <Route path="/" Component={Home} />
              <Route path="/post" Component={NewPost} />
              <Route path="/edit/:id" Component={EditPost} />
              <Route path="/post/:id" Component={PostPage} />
              <Route path="/about" Component={About} />
              <Route path="*" Component={Missing} />
            </Switch>
          </DataProvider>
        <Footer />
    </div>
  );
}

export default App;