import React, { useState } from "react";

function DataForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log("Form submitted:", formData);
        
    };  

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label>Email: </label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}

export default DataForm;