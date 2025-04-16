import * as React from 'react';
import { Link } from 'react-router-dom';

const Login = React.lazy(() => import('login/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </React.Suspense>
  );
}

export default App;
