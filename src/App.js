import './App.css';

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


function App() {
     return (
          <div className='app'>
               <Header />

               <main>
                    <NewsDetails />
                    <NewsCatalog />
                    <Create />
                    <Edit />
                    <MyProfile />
                    <Login />
                    <Register />
                    <Logout />
               </main>

               <Footer />
          </div>
     );
}

export default App;
