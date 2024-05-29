import React from "react";
import "./App.css";
import { useState } from "react";
import { useRef } from "react";

export default function App() {
  const [form, setForm] = useState({
    fName: "",
    lName: "",
    mail: "",
    number: "",
  });
  const mailref = useRef(null);
  const numref = useRef(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const validateForm = () => {
    let isvalid = true;
    if (!/^\d{10}$/.test(form.number)) {
      alert("Invalid Phone Number");
      isvalid = false;
      numref.current.focus();
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(form.mail).toLowerCase())) {
      alert("Invalid Mail Id");
      isvalid = false;
      mailref.current.focus();
    }
    return isvalid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Registration successful!");
    }
  };
  return (
    <div>
      <div>
        <div className="form-page">
          <div className="form">
            <form onSubmit={handleSubmit}>
              <input
                value={form.fName}
                name="fName"
                onChange={handleChange}
                type="text"
                placeholder="First Name"
                required
              />
              <input
                value={form.lName}
                name="lName"
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                required
              />
              <input
                value={form.mail}
                name="mail"
                type="text"
                ref={mailref}
                placeholder="Email"
                onChange={handleChange}
                required
              />
              <input
                value={form.number}
                name="number"
                ref={numref}
                type="text"
                placeholder="Phone Number"
                onChange={handleChange}
                required
              />
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
