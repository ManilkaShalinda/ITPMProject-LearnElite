import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';

const App =() => (
  <BrowserRouter>
    <Header/>
    <main>
    <Routes>
      <Route path='/' element={<LandingPage />}/>
      <Route path='/login' element={<LoginScreen />}/>
      <Route path='/register' element={<RegisterScreen />}/>

    </Routes>
    </main>
    <Footer/>
  </BrowserRouter>
)

export default App;
