import { Link, useNavigate } from "react-router-dom";
import SubscribePortion from "../../components/SubscribePortion";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Signin = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const backendUrl = `${import.meta.env.VITE_BACKEND_URL}/login`
  const navigate = useNavigate()
  // const [showPassword,setShowPassword] = useState("")

  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(token){
      navigate('/home',{replace:true})
    }
  },[navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const response = await axios.post(backendUrl,{email,password})
      const token = response.data.token
      if(token){
        localStorage.setItem("token",token)  
        navigate('/home')    
        toast.success("login Successfull")
      }else{
        toast.error("Invalid credentials")
      }
      }catch(err){
        console.error("Login failed",err)
        toast.error("Invalid cerdentials")
      }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-outfit">
      {/* Centering the form */}
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center p-10 text-center mb-32 w-full max-w-md">
          <h1 className="text-4xl font-semibold mb-10">Sign In</h1>
          {/* Input Fields */}
          <input
            className="mb-5 h-[43px] focus:outline-none w-[500px] p-2 border border-gray-900"
            type="email"
            placeholder="Email"
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
          />
          <input
            className="mb-5 h-[43px] focus:outline-none w-[500px] p-2 border border-gray-900"
            type="password"
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
          />
          {/* Links Section */}
          <div className="flex w-[500px] justify-between mb-5 text-sm">
            <Link to="#" className="text-gray-900 hover:underline">
              Forgot password?
            </Link>
            <Link to="/signup" className="text-gray-900 hover:underline">
              Create account
            </Link>
          </div>
          {/* Sign In Button */}
          <button className="bg-black text-white px-10 py-2 hover:bg-gray-900" onClick={handleSubmit}>
            Sign In
          </button>
        </div>
      </form>
      {/* Subscription Section */}
      <SubscribePortion />
    </div>
  );
};

export default Signin;