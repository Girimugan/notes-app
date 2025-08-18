import { useState } from "react"

function Demostate() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        location: "",
    });


    const [users, setUsers] = useState([]);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleLocationBlur = () => {
        if (formData.name && formData.email && formData.location) {
            setUsers([...users, { ...formData }]);
            setFormData({ name: "", email: "", location: "" });
        }
    };

    return (
        <div>
            <h3> Input Form</h3>
            <table border="2">
                <tbody>
                    <tr>
                        <td><strong>Name:</strong></td>
                        <td>
                            <input type="text" name="name" placeholder="Enter Name" value={formData.name}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Email:</strong></td>
                        <td>
                            <input  type="email"  name="email"  placeholder="Enter Email"  value={formData.email}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Location:</strong></td>
                        <td>
                            <input type="text" name="location" placeholder="Enter Location" value={formData.location}
                                onChange={handleChange}

                                onBlur={handleLocationBlur}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>

            <h4 style={{ marginTop: "20px" }}>User Details Table</h4>
            <table border="2">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Location</th>
                    </tr>                   
                </thead>
                <tbody>
                    {users.map((user, idx) => (
                        <tr key={idx}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Demostate;