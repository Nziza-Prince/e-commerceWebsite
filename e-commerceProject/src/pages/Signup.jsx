import { Link } from "react-router-dom"
import SubscribePortion from "../components/SubscribePortion"

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-outfit"> {/* Centering the entire page */}
        <div className="flex flex-col items-center p-10 text-center mb-32 w-full max-w-md"> {/* Centering the form and making it responsive */}
          <h1 className="text-4xl font-semibold mb-5">Sign Up</h1> {/* Added margin for spacing */}
          <input className="rounded-sm mb-5 h-[43px] focus:outline-none w-[500px] p-2 border border-gray-900" type="text" placeholder="Name"/> {/* Full width input */}
          <input className="rounded-sm mb-5 h-[43px] focus:outline-none w-[500px] p-2 border border-gray-900" type="email" placeholder="Email"/> {/* Full width input */}
          <input className="rounded-sm mb-5 h-[43px] focus:outline-none w-[500px] p-2 border border-gray-900" type="password" placeholder="Password"/> {/* Full width input */}
          <div className="flex w-[500px] justify-between mb-5 text-sm">
          <Link to="/signin" className="text-gray-900 hover:underline">
            Already have an account? Signin
          </Link>
        </div>
          <button className="bg-black text-white px-10 py-2 hover:bg-gray-900">Create</button> {/* Styled button */}
        </div>
        <SubscribePortion/>
    </div>
  )
}

export default Signup