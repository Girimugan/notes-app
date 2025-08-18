import React from "react";
import { useForm } from "react-hook-form";
import './MyForm.css'; 

function MyForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields },
        watch,
    } = useForm()
    const password = watch("password");

    const onSubmit = (data) => {
        console.log("Submited Data:", data);
    };

    return (
        <div className="bg-container">
            <form onSubmit={handleSubmit(onSubmit)} className="form-style">
                <h2 className="heading2">USER FORM</h2>

                <div className="form-group">
                    <label>Name :</label>
                    <input
                        {...register("name", {
                            required: "Name is required",
                            minLength: { value: 3, message: "Minimum 3 characters" },
                            maxLength: { value: 15, message: "Maximum 15 characters" },
                            pattern: {
                                value: /^[A-Za-z ]+$/,
                                message: "Only alphabets and space allowed"
                            }
                        })}
                    />
                    {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
                    {!errors.name && touchedFields.name && (
                        <p style={{ color: "green" }}>Name is valid</p>
                    )}
                </div>

                <div className="form-group">
                    <label>Email :</label>
                    <input
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email format",
                            },
                        })}
                    />
                    {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
                    {!errors.email && touchedFields.email && (
                        <p style={{ color: "green" }}>Email is valid</p>
                    )}
                </div>

                <div className="form-group">
                    <label>Password :</label>
                    <input
                        type="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 10,
                                message: "Password must be at least 10 characters",
                            },
                            pattern: {
                                value: /[!@#$%^&*(),.?":{}|<>]/,
                                message: "Password must include at least one symbol",
                            },
                        })}
                    />
                    {errors.password && (
                        <p style={{ color: "red" }}>{errors.password.message}</p>
                    )}
                    {!errors.password && touchedFields.password && (
                        <p style={{ color: "green" }}>Password is valid</p>
                    )}
                </div>

                <div className="form-group">
                    <label>Confirm Password :</label>
                    <input
                        type="password"
                        {...register("confirmpassword", {
                            required: "Confirm Password is required",
                            validate: (value) =>
                                value === password || "Passwords do not match",
                        })}
                    />
                    {errors.confirmpassword && (
                        <p style={{ color: "red" }}>{errors.confirmpassword.message}</p>
                    )}
                    {!errors.confirmpassword && touchedFields.confirmpassword && (
                        <p style={{ color: "green" }}>Passwords match</p>
                    )}
                </div>

                <div className="form-group">
                    <label>Contact no :</label>
                    <input
                        type="number"
                        {...register("phone", {
                            required: "Phone number is required",
                            pattern: {
                                value: /^[0-9]+$/,
                                message: "Only numbers allowed",
                            },
                            validate: (value) =>
                                value.length === 10 || "Phone number must be exactly 10 digits",
                        })}
                    />
                    {errors.phone && <p style={{ color: "red" }}>{errors.phone.message}</p>}
                    {!errors.phone && touchedFields.phone && (
                        <p style={{ color: "green" }}>Phone number is valid</p>
                    )}
                </div>

                <div className="form-group">
                    <label>Country :</label>
                    <select
                        {...register("country", { required: "Country is required" })}
                    >
                        <option value="">--Select--</option>
                        <option value="India">India</option>
                        <option value="Australia">Australia</option>
                        <option value="China">China</option>
                    </select>
                    {errors.country && (
                        <p style={{ color: "red" }}>{errors.country.message}</p>
                    )}
                    {!errors.country && touchedFields.country && (
                        <p style={{ color: "green" }}>Country is valid</p>
                    )}
                </div>

                <div className="form-group">
                    <label>Gender :</label>
                    <div className="gender-options">
                        <label>
                            <input
                                type="radio"
                                value="Male"
                                {...register("gender", { required: "Gender is required" })}
                            /> Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="Female"
                                {...register("gender", { required: "Gender is required" })}
                            /> Female
                        </label>
                    </div>
                    {errors.gender && (
                        <p style={{ color: "red" }}>{errors.gender.message}</p>
                    )}
                    {!errors.gender && touchedFields.gender && (
                        <p style={{ color: "green" }}>Gender is valid</p>
                    )}
                </div>

                <div style={{ marginTop: "20px" }}>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default MyForm;

