import './App.css';

import { Route, Routes } from 'react-router-dom';

import { useLocalStorage } from './hooks/useLocalStorage';

import { AuthIntProvider } from './contexts/userInteractionContext';
import { AuthProvider } from './contexts/authContext';
import { NewsProvider } from './contexts/newsContext';

import { Header } from './components/Header/Header'
import { NewsCatalog } from './components/NewsCatalog/NewsCatalog';
import { Login } from './components/AuthenticationForms/Login/Login';
import { Register } from './components/AuthenticationForms/Register/Register';
import { Logout } from './components/AuthenticationForms/Logout/Logout';
import { ProtectedCreate } from './components/NewsForms/Create/Create';
import { ProtectedEdit } from './components/NewsForms/Edit/Edit';
import { ProtectedProfile } from './components/MyProfile/MyProfile';
import { NewsDetails } from './components/NewsDetails/NewsDetails';
import { Footer } from './components/Footer/Footer';

function App() {

     const [skinColor, setSkinColor] = useLocalStorage('color', '#ca2e55');

     const changeSkinColor = (color) => {
          setSkinColor(color, true);
     }

     return (
          <div className='app' style={{ '--skin-color': skinColor }}>

               <AuthProvider>
                    <AuthIntProvider>
                         <Header setSkinColor={changeSkinColor} />
                         <Login />
                         <Register />
                         <Logout />
                    </AuthIntProvider>

                    <main>
                         <NewsProvider>
                              <Routes>
                                   <Route path='/' element={<NewsCatalog />} />
                                   <Route path='/my-profile' element={<ProtectedProfile />} />
                                   <Route path='/create' element={<ProtectedCreate />} />
                                   <Route path='/details/:_id/edit' element={<ProtectedEdit />} />
                                   <Route path='/details/:_id' element={<NewsDetails />} />
                              </Routes>
                         </NewsProvider>
                    </main>
               </AuthProvider>

               <Footer />
          </div>
     );
}

export default App;
