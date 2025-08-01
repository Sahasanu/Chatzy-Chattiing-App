import useSignup from "../hooks/useSignup.js"
import logo from "../assets/chatzy.png"
import { useState } from 'react'
import { Link} from 'react-router-dom'
import Loading from "../loading/Loading.jsx"

import toast, { Toaster } from 'react-hot-toast'

function Signup() {
  const [signupdata, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  })
const { signup, isPending } = useSignup();
 
if(isPending){
   return <Loading />;
}

  const handleSignup = (e) => {
    e.preventDefault()
    signup(signupdata)
  }

  return (
    <div className='signupCont h-[100vh] w-full flex justify-center items-center bg-black text-white'>
  <Toaster />
  <div className="cont w-full md:w-[80%] lg:w-[60%] xl:w-[40%] 2xl:w-[30%] h-auto md:min-h-[70vh] border border-[#4f4f4fcb] bg-[#191919] flex justify-center rounded-[10px] shadow-lg shadow-[#000000] m-4 md:m-0">
    <div className="right w-full h-full p-4  md:p-[20px]">
      <div className="logo w-full  flex  justify-center ">
        <img className='w-[180px]' src={logo} alt="" />
      </div>
      <div className="head w-full mt-4 text-center">
        <p className='text-[18px] md:text-[18px] font-[500]'>Create an Account</p>
        <p className='text-[13px] md:text-[15px] text-gray-300'>Join Chatzy to connect with your friends</p>
      </div>
      <div className="input w-full md:w-[98%] mx-auto ">
        <form onSubmit={handleSignup} className='flex flex-col gap-3 '>
          <div className="name">
            <p>Name</p>
            <input 
              type="text" 
              className='border-1 w-full h-[45px] md:h-[5vh] pl-[10px] rounded-[5px] mt-2 text-[15px] bg-[#2d2d2d]'
              placeholder='John Doe'
              value={signupdata.fullName}
              onChange={(e) => setSignupData({ ...signupdata, fullName: e.target.value })}
              required 
            />
          </div>
          <div className="email">
            <p>Email</p>
            <input 
              type="text" 
              className='border-1 w-full h-[45px] md:h-[5vh] pl-[10px] rounded-[5px] mt-2 text-[15px] bg-[#2d2d2d]'
              placeholder='example@gmail.com'
              value={signupdata.email}
              onChange={(e) => setSignupData({ ...signupdata, email: e.target.value })}
              required 
            />
          </div>
          <div className="password">
            <p>Create password</p>
            <input 
              type="password" 
              className='border-1 w-full h-[45px] md:h-[5vh] pl-[10px] rounded-[5px] mt-2 text-[15px] bg-[#2d2d2d]'
              placeholder='******'
              value={signupdata.password}
              onChange={(e) => setSignupData({ ...signupdata, password: e.target.value })}
              required 
            />
          </div>
          <div className="req opacity-[70%] text-[12px] md:text-[13px] mt-1">
            Password should be at least 6 characters
          </div>
          <div className="req opacity-[70%] text-[12px] md:text-[13px] mt-2 h-auto  flex items-start md:items-center gap-2">
            <input type="checkbox" required className='mt-1 md:mt-0' />
            <p>I agree to the <span className='text-[#008080]'>Terms & Conditions</span> and <span className='text-[#008080]'>Privacy Policy</span></p>
          </div>
          <button 
            className='bg-[#008080] w-full p-2 md:p-[10px] rounded-[10px] mt-5 text-white font-bold text-[18px] md:text-[20px]' 
            type='submit'
            disabled={isPending}
          >
            {isPending ? "Signing up..." : "Create Account"}
          </button>
        </form>
      </div>
      <div className="login flex text-[14px] w-full mt-4">
        <p className='text-center w-full'>Already have an account <Link to="/login" className='text-[#008080]'>Login</Link></p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Signup
