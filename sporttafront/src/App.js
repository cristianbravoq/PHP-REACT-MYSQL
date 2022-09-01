import './App.css';

import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from './Login';
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";

import './components/css/style.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importacion de componentes
import ShowUsers from './components/ShowUsers';
import CreateUsers from './components/CreateUsers';
import EditUsers from './components/EditUsers';

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      {isAuthenticated ? (
          <>
            <div className='card pd-3 mt-2'>
              <Profile />
              <LogoutButton />
            </div>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={ <ShowUsers/> } />
                <Route path='/create' element={ <CreateUsers/> } />
                <Route path='/edit/:id' element={ <EditUsers/> } />
              </Routes>
            </BrowserRouter>
          </>
        ) : (
          <div className='container'>
            <div className='col-auto'>
              <LoginButton />
            </div>
          </div>
      )}
    </div>
  );
}

export default App;
