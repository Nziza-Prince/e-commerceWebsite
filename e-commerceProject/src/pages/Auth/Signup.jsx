import { Link, useNavigate } from "react-router-dom"
import SubscribePortion from "../../components/SubscribePortion"
import { useState } from "react"
import axios from "axios"
import './loading.css'
import { toast } from "react-toastify"

const Signup = () => {
  const [customername,setCustomerName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  // const [loading,setLoading] = useState("")
  const navigate = useNavigate()
  const backendUrl = `${import.meta.env.VITE_BACKEND_URL}/register`
  const [loading,setLoading] = useState(false)
  const handleSubmit = async(e)=>{
    setLoading(true)
    e.preventDefault()

    axios.post(backendUrl,{customername,email,password})
    .then((result)=>{
      navigate("/signin",{replace:true})
      console.log(result)
      toast.success("Account created successfully")
      setLoading(false)
    })
    .catch((err) =>{
        console.error(err)
        toast.error({message:err.message})
        setLoading(false)
  
      })
}
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-outfit"> {/* Centering the entire page */}
        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-col items-center p-10 text-center mb-32 w-full max-w-md"> {/* Centering the form and making it responsive */}
            <h1 className="text-4xl font-semibold mb-5">Create a free account</h1> {/* Added margin for spacing */}
            <input onChange={(e)=>setCustomerName(e.target.value)} value={customername} className="rounded-sm mb-5 h-[43px] focus:outline-none w-[500px] p-2 border border-gray-900" type="text" placeholder="Name"/> {/* Full width input */}
            <input onChange={(e)=> setEmail(e.target.value)} value={email} className="rounded-sm mb-5 h-[43px] focus:outline-none w-[500px] p-2 border border-gray-900" type="email" placeholder="Email"/> {/* Full width input */}
            <input onChange={(e)=>setPassword(e.target.value)} value={password} className="rounded-sm mb-5 h-[43px] focus:outline-none w-[500px] p-2 border border-gray-900" type="password" placeholder="Password"/> {/* Full width input */}
            <div className="flex w-[500px] justify-between mb-5 text-sm">
            <Link to="/signin" className="text-gray-900 hover:underline">
              Already have an account? Signin
            </Link>
          </div>
            <button
            disabled={loading}
            onSubmit={handleSubmit} 
            type="submit" 
            className="bg-black text-white px-10 py-2 hover:bg-gray-900">
              {loading ? <div className='spinner'></div> : "Create"}
            </button> {/* Styled button */}
          </div>
        </form>
        <SubscribePortion/>
    </div>
  )
}

export default Signup