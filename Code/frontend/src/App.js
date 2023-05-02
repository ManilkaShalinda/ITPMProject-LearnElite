import React, { useState } from 'react'
import './App.css';
import Header from './component/Header/Header';
import { BrowserRouter, Route } from 'react-router-dom'
import Footer from './component/Footer/Footer';
import MainPage from './screens/MainPage/MainPage';
import Category from './screens/Category/Category';
import LoginPage from './screens/LoginPage/LoginPage';
import RegisterPage from './screens/RegisterPage/RegisterPage';
import CreateCategory from './screens/CreateCategory/CreateCategory';
import SingleCategory from './screens/SingleCategory/SingleCategory';
import ReactMarkdown from 'react-markdown';


const App = () => {
 const [search,setSearch] =  useState ("") 
 console.log(search);
  return (
    <BrowserRouter>
    <Header setSearch={setSearch}/>
    
      <main >
         <Route path='/' component={MainPage} exact />  
         <Route path='/login' component={LoginPage} />  
         <Route path='/register' component={RegisterPage} />  
         <Route path='/category' component={()=> <Category search={search} /> } />  
         <Route path='/categorycreate' component={CreateCategory} />  
         <Route path='/categoryUpdate/:id' component={SingleCategory} />  

      </main>
    <Footer/>
    </BrowserRouter>
  )
}

export default App