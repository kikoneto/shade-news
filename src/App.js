import './App.css';

import { Route, Routes } from 'react-router-dom';
import { AuthIntProvider } from './contexts/userInteractionContext';

import { Header } from './components/Header/Header'
import { NewsCatalog } from './components/NewsCatalog/NewsCatalog';
import { Login } from './components/AuthenticationForms/Login/Login';
import { Register } from './components/AuthenticationForms/Register/Register';
import { Logout } from './components/AuthenticationForms/Logout/Logout';
import { Create } from './components/NewsForms/Create/Create';
import { Edit } from './components/NewsForms/Edit/Edit';
import { MyProfile } from './components/MyProfile/MyProfile';
import { NewsDetails } from './components/NewsDetails/NewsDetails';
import { Footer } from './components/Footer/Footer';
import { useState } from 'react';


function App() {

     const [skinColor, setSkinColor] = useState('#ca2e55');
     
     const changeSkinColor = (color) => {
          setSkinColor(color);
     }

     return (
          <div className='app' style={{ '--skin-color': skinColor }}>

               <AuthIntProvider>
                    <Header setSkinColor={changeSkinColor} />
                    <Login />
                    <Register />
                    <Logout />
               </AuthIntProvider>

               <main>
                    <Routes>
                         <Route path='/' element={<NewsCatalog />} />
                         <Route path='/create' element={<Create />} />
                         <Route path='/edit/*' element={<Edit />} />
                         <Route path='/my-profile' element={<MyProfile />} />
                    </Routes>
               </main>

               <Footer />
          </div>
     );
}

export default App;
