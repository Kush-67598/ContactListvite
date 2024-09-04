import React, { useState,useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

import './App.css'
import Contact from './components/Contact'
import Contactlist from './components/Contactlist';
import Navbar from './components/Navbar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";





function App() {
  const [form, setForm] = useState({ name: "", phno: "" });
  const [formArray, setFormArray] = useState([]);

  useEffect(() => {
    const MyContacts = localStorage.getItem('contactlist');
    if (MyContacts) {
      setFormArray(JSON.parse(MyContacts));
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSave = () => {
    if (form.name.length >= 3 && form.phno.length === 10) {
      const newFormArray = [...formArray, { ...form, id: uuidv4() }];
      setFormArray(newFormArray);
      localStorage.setItem('contactlist', JSON.stringify(newFormArray));
      setForm({ name: "", phno: "" });
    }
  };

  const handleEdit = (id) => {
    const editedContact = formArray.find(items => items.id === id);
    setForm(editedContact);
    handleDelete(id);
  };

  const handleDelete = (id) => {
    const filterContact = formArray.filter(item => item.id !== id);
    setFormArray(filterContact);
    localStorage.setItem('contactlist', JSON.stringify(filterContact));
  };

 

  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<Contact handleChange={handleChange} handleEdit={handleEdit} handleDelete={handleDelete} handleSave={handleSave} formArray={formArray} form={form} />}></Route>
        <Route exact path='/Contacts' element={<Contactlist handleChange={handleChange} handleEdit={handleEdit} handleDelete={handleDelete} handleSave={handleSave} formArray={formArray} form={form}/>}></Route>

      </Routes>
    </Router>
    
    </>
  )
}

export default App
