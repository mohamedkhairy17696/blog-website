import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

// function App() {
//   const title = "Welcome to the new blog";
//   const likes = 50;
//   const person = { name: "Mohamed", age: 30 };
//   const link = "http://www.google.com";
//   return (
//     <div className="App">
//       <div>
//         <h1>{title}</h1>
//         <p>Liked {likes} times</p>
//         <p>{10}</p>
//         <p>{"Hello, Ninja"}</p>
//         <p>{[1, 2, 3, 4, 5]}</p>
//         <p>{Math.floor(Math.random() * 10) + 1}</p>
//         <a href={link}>Google Site</a>
//       </div>
//     </div>
//   );
// }

export default App;
