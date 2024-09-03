import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Contact = () => {
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

  const copybutton = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <div className="bg-custom-gradient">
        <div className="flex justify-center items-center flex-col ">
          <h2 className="text-6xl mt-12 text-black font-bold font-mono">CoNnEx</h2>
          <p className="text-xl text-white font-bold font-mono">-All Contacts, One Place</p>
        </div>

        <div className="flex flex-col w-[80svw] gap-4 ml-10 lg:w-[40vw] lg:ml-96 lg:pl-12">
          <input
            type="text"
            className="mt-16 h-8 rounded-lg placeholder-slate-700"
            placeholder="Enter Name"
            value={form.name}
            id="name"
            onChange={handleChange}
          />
          <input
            type="text"
            className="rounded-lg h-8 mb-6 placeholder-slate-700"
            placeholder="Enter Ph no."
            value={form.phno}
            id="phno"
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-black text-white rounded-md w-24 h-10 mb-3 font-mono hover:bg-gray-800"
            onClick={handleSave}
          >
            Save
          </button>
        </div>

        <div className="contacts">
          <div className="bg-black text-white font-bold text-center mt-1 p-2 font-mono">
            Contacts
          </div>

          {formArray.length === 0 ? (
          <div className="text-center font-bold font-mono bg-white">No Contacts to show</div>
          ) : (
            <table className="table-fixed w-full bg-white shadow-md rounded-lg">
              <thead>
                <tr className="bg-gray-400 h-12">
                  <th className="text-left font-mono px-2 ">Name</th>
                  <th className="text-end px-10 font-mono  ">Phone Number</th>
                </tr>
              </thead>
              <tbody>
                {formArray.map((item) => (
                  <tr key={item.id} className="bg-slate-200 h-14">
                    <td className="text-left font-mono px-2">
                      {item.name}
                      <button onClick={() => handleEdit(item.id)}>
                        <lord-icon
                          src="https://cdn.lordicon.com/ghhwiltn.json"
                          trigger="hover"
                          stroke="bold"
                          colors="primary:#000000,secondary:#000000"
                          style={{ width: "25px", height: "25px", paddingTop: "6px" }}
                        />
                      </button>
                      <button onClick={() => handleDelete(item.id)}>
                        <lord-icon
                          src="https://cdn.lordicon.com/drxwpfop.json"
                          trigger="hover"
                          stroke="bold"
                          colors="primary:#000000,secondary:#000000"
                          style={{ width: "25px", height: "25px", paddingTop: "6px" }}
                        />
                      </button>
                    </td>
                    <td className="text-end font-mono px-2">
                      {item.phno}
                      <button onClick={() => handleEdit(item.id)}>
                        <lord-icon
                          src="https://cdn.lordicon.com/ghhwiltn.json"
                          trigger="hover"
                          stroke="bold"
                          colors="primary:#000000,secondary:#000000"
                          style={{ width: "25px", height: "25px", paddingTop: "6px" }}
                        />
                      </button>
                      <button onClick={() => handleDelete(item.id)}>
                        <lord-icon
                          src="https://cdn.lordicon.com/drxwpfop.json"
                          trigger="hover"
                          stroke="bold"
                          colors="primary:#000000,secondary:#000000"
                          style={{ width: "25px", height: "25px", paddingTop: "6px" }}
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Contact;
