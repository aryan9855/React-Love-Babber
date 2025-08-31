import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [showCreatePass, setShowCreatePass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [accountType, setAccountType] = useState("student");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account Created!");
    console.log(formData);
    navigate("/dashboard");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-lg shadow-md">
      {/* Account Type Selector */}
      <div className="flex border rounded-full overflow-hidden mb-4">
        <button
          type="button"
          onClick={() => setAccountType("student")}
          className={`flex-1 py-2 ${
            accountType === "student"
              ? "bg-gray-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Student
        </button>
        <button
          type="button"
          onClick={() => setAccountType("instructor")}
          className={`flex-1 py-2 ${
            accountType === "instructor"
              ? "bg-gray-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Instructor
        </button>
      </div>

      {/* Form */}
      <form onSubmit={submitHandler} className="space-y-4">
        {/* Name Fields */}
        <div className="flex gap-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={changeHandler}
            placeholder="First Name"
            required
            className="flex-1 p-2 border rounded"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={changeHandler}
            placeholder="Last Name"
            required
            className="flex-1 p-2 border rounded"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Email Address"
          required
          className="w-full p-2 border rounded"
        />

        {/* Password Fields */}
        <div className="flex gap-4">
          <div className="relative flex-1">
            <input
              type={showCreatePass ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={changeHandler}
              placeholder="Password"
              required
              className="w-full p-2 border rounded"
            />
            <span
              onClick={() => setShowCreatePass(!showCreatePass)}
              className="absolute right-2 top-2 cursor-pointer"
            >
              {showCreatePass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>

          <div className="relative flex-1">
            <input
              type={showConfirmPass ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="Confirm Password"
              required
              className="w-full p-2 border rounded"
            />
            <span
              onClick={() => setShowConfirmPass(!showConfirmPass)}
              className="absolute right-2 top-2 cursor-pointer"
            >
              {showConfirmPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
