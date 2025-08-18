import React, { useState } from "react";

function Usetable() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,
      [name]: value,
    });
  };

  const handleEmailBlur = () => {
    if (formData.name && formData.email) {
      setUsers([...users, { ...formData }]);
      setFormData({ name: "", email: "" }); 
    }
  };  

  return (
    <div className="container">
      <h3>Auto-Add User</h3>
   Name :   <input type="text" name="name" placeholder="Enter Name" value={formData.name} /><br />
   Email:   <input type="email" name="email" placeholder="Enter Email" value={formData.email} />

      <table border="1" >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={idx}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Usetable;
