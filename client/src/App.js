// import {useEffect, useState}from 'react';


// function App() {
//   const[state,setstate] = useState([])
//   useEffect(()=>{
//     fetch('http://localhost:4000/api/users')
//     .then(res=>res.json())
//     .then(res=>{
//       console.log(res)
//       setstate(res)
//     })
//     .catch(e=>console.log(e))
//   },[])

//   return (
//     <div className="App">{
//      state.map((item)=>(
//        <div key={item.id}>{item.name} </div>
//      ))
//    }

//     </div>
//   )
// }

// export default App;

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Add from './components/Add';
import User from './components/User';
function App() {
  return (
<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Add">Add</Link>
            </li>
            <li>
              <Link to="/User">User</Link>
            </li>

          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Add">
            <Add/>
          </Route>
          <Route path="/User">
            <User/>
          </Route>
          {/* <Route path="/">
          <User/>
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;