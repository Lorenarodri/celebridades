import { useAuth0 } from '@auth0/auth0-react';
import Home from './pages/Home';
import { Logout } from './auth/Logout';
import { Login } from './auth/Login';
import { Fragment } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Favorites } from './pages/Favorites';
import SearchBar from './components/SearchBar';

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated ? (
          <Fragment>
            <nav class="nav nav-pills nav-fill">

              <Link to='/favorites'><a class="nav-link active" aria-current="page" href="#">Favoritos</a></Link>
              <Link to='/home'><a class="nav-link active" aria-current="page" href="#">Home</a></Link>
              <Link to='/Logout'><a class="nav-link active" aria-current="page" href="#">Logout</a></Link>

            </nav>
          </Fragment>
        ) : (<Login />)}
      </header>
      <Routes>
        <Route path='/favorites' element={<Favorites />}></Route>
        <Route path='/home' element={<SearchBar />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
      </Routes>
    </div>
  );
}
/* Agregar estilos con boostrap */
/* La condición verdadera está en el primer parentesis, la condición falsa entá en el segundo parentesis (Para is Authenticaded)  */
export default App;

{/* <nav class="nav nav-pills nav-fill">
  <a class="nav-link active" aria-current="page" href="#">Active</a>
  <a class="nav-link" href="#">Much longer nav link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled">Disabled</a>
</nav> */}