import { useSelector } from 'react-redux';
import {
  Route,
  Routes,
  Navigate
} from 'react-router-dom';

function PrivateRoute({ element: Element, ...rest }) {

  const { token, isLogin } = useSelector(state => state.userReducer.userData);
  console.log("Loginnnnn:::", token, isLogin);

  return (
    <Routes>
      <Route
        {...rest}
        render={props => (
          (token && isLogin)
            ? (
              <Element {...rest} />
            ) : (
              <Navigate to="login" />
            ))
        }
      />
    </Routes>
  );
}

export default PrivateRoute;