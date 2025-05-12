import { assets } from "../assets/assets";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// import { useForm } from "react-hook-form";
const Signup = () => {
  // const [name, setname] = useState('');
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  //  const [state,setState]=useState('Sign up')
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  const changeHandler = (event) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    let isvalid = true;
    event.preventDefault();
    console.log(formData);

    if (password.length < 8) {
      setPasswordError("Password must contain 8 characters");
      isvalid = false;
    }
    if (!emailPattern.test(email)) {
      setEmailError("Email is not in Format");
      isvalid = false;
    }
    if (!name.trim()) {
      setNameError("Name field not should Be Empty");
      isvalid = false;
    }
    if (isvalid) {
      localStorage.setItem(
        "user",
        JSON.stringify({ name, email: email, password: password })
      );

      setShowForm(false);
      navigate("/");
    }
  };

  return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
//       {showForm && (
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white shadow-md rounded-xl p-6 w-full max-w-md"
//         >
//           <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

//           <div className="mb-4">
//             <label
//               className="block text-gray-700 font-semibold mb-1"
//               htmlFor="name"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={name}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               onChange={changeHandler}
//             />
//             <span className="text-sm text-red-500 mt-1 block">{nameError}</span>
//           </div>

//           <div className="mb-4">
//             <label
//               className="block text-gray-700 font-semibold mb-1"
//               htmlFor="email"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={email}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               onChange={changeHandler}
//             />
//             <span className="text-sm text-red-500 mt-1 block">
//               {emailError}
//             </span>
//           </div>

//           <div className="mb-6">
//             <label
//               className="block text-gray-700 font-semibold mb-1"
//               htmlFor="password"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={password}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               onChange={changeHandler}
//             />
//           </div>
//           <span className="text-sm text-red-500 mt-1 block">
//             {passwordError}
//           </span>
//           <br />

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition"
//           >
//             Sign in
//           </button>
  
//         </form>
//       )}
//     <div className="w-full max-w-screen-lg mx-auto p-4">
//   <img
//     src={assets.signupimage}
//     alt="Signup"
//     className="w-96 h-96 object-cover rounded-lg shadow-md"
//   />
// </div>

//     </div>

<div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-100 p-6">
 
  {showForm && (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md sm:w-4/5 md:w-2/3 lg:w-1/2"
    >
      <h2 className="text-3xl font-medium text-gray-800 mb-6 text-center">
        Welcome To <span className="text-3xl font-medium text-blue-800 mb-6 text-center">PrimeNest</span> 
      </h2>

      <div className="mb-6">
        <label
          className="block text-gray-700 font-medium text-lg mb-2"
          htmlFor="name"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 placeholder-gray-400"
          placeholder="Enter your full name"
          onChange={changeHandler}
        />
        <span className="text-sm text-red-500 mt-1 block">{nameError}</span>
      </div>

      <div className="mb-6">
        <label
          className="block text-gray-700 font-medium text-lg mb-2"
          htmlFor="email"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 placeholder-gray-400"
          placeholder="you@example.com"
          onChange={changeHandler}
        />
        <span className="text-sm text-red-500 mt-1 block">
          {emailError}
        </span>
      </div>

      <div className="mb-8">
        <label
          className="block text-gray-700 font-medium text-lg mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 placeholder-gray-400"
          placeholder="Enter a strong password"
          onChange={changeHandler}
        />
      </div>

      <span className="text-sm text-red-500 mt-1 block">
        {passwordError}
      </span>

      <button
        type="submit"
        className="w-full py-3 px-5 mt-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition duration-300"
      >
        Sign Up
      </button>
    </form>
  )}

  <div className="w-full max-w-screen-lg mx-auto mt-8 p-4">
    <img
      src={assets.signupimage}
      alt="Signup"
      className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-cover rounded-lg shadow-lg"
    />
  </div>
</div>

  );
};

export default Signup;
