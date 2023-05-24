import { BrowserRouter, Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import './App.css';
import Footer from './components/Footer/Footer';
import HomePage from './screens/HomePage/HomePage';
import UserLogin from './screens/UserLogin/UserLogin';
import RegisterUser from './screens/RegisterUsers/RegisterUser';
import AdminHome from './screens/AdminPages/AdminHome/AdminHome';
import TopHome from './screens/HomePage/TopHome';
import Category from './screens/Category/Category';
import CreateCategory  from './screens/CreateCategory/CreateCategory';
import SingleCategory from './screens/SingleCategory/SingleCategory';
import Report from './screens/Category/Report';
import ReportList from './screens/Category/ReportList';
import HomeDonation from './screens/HomeDonation/HomeDonation';

const App = () => {
  
  return <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/userregister" element={<RegisterUser />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/tophome" element={<TopHome />} />
          <Route path="/category" element={<Category />} />
          <Route path="/categorycreate" element={<CreateCategory />} />
          <Route path="/categoryUpdate/:id" element={<SingleCategory />} />
          <Route path="/report" element={<Report />} />
          <Route path="/reportList" element={<ReportList />} />
          <Route path='/homedonation' element={<HomeDonation />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>;
}

export default App;
