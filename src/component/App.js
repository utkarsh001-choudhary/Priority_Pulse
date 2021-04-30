import React from 'react';

import {
  BrowserRouter as Router,
 Route,
Switch,
} from 'react-router-dom';
import Home_Page from '../Home_Page';
import Login_Page from '../Login_Page';

function App() {
 return (
   <Router >
     <Switch>
     <Route   exact path="/"  component={Home_Page}/>
     <Route exact path="/login" component={Login_Page}/>
     </Switch>
  </Router>
 );
}

export default App;











// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <Login/>
//       <Footer/>
//     </div>
//   );
// }

// export default App;
