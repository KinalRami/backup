import React, { useEffect, useState } from 'react';
import './App.css';
import Loginn from './Loginn';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import store from './redux/store';
import { signin } from './redux/action';
import { createBrowserHistory } from 'history';
import Logout from './Logout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';


// function List({ posts }) {
//   return (
//     <>
//       {
//         posts.length > 0
//           ? posts.map((post) => {
//             return (
//               <div key={post.id}>
//                 <p key={post.email}>{post.email}</p>
//                 <p key={post.password}>{post.password}</p>
//               </div>
//             )
//           })
//           : <div>No Data Yet</div>
//       }
//     </>)
// }


const App = (props) => {
  const userList = useSelector(state => state.userList)
  const history = createBrowserHistory();

  return (

    <>
      <Provider store={store}>
        <Router history={history}>
          <Routes>
            <>
              <Route path='/' exact element={<Loginn />} />
              <Route path='/dashboard' exact element={
                <PrivateRoute element={<Logout />} />
              } />
            </>
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
