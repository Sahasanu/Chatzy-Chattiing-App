import { useState } from 'react'
import logo from "../assets/chatzy.png"
import Uselogin from '../hooks/useLogin'
import { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })
  const { login, isPending } = Uselogin();

  const handlesubmit = (e) => {
    e.preventDefault();
    login(loginData);
  }


  return (
   <div className='logincont h-[100vh] w-full flex justify-center items-center bg-black text-white'>
  <Toaster />
  <div className="cont w-full md:w-[70%] lg:w-[50%] xl:w-[30%] h-auto md:h-[80%] lg:h-[70%] border border-[#4f4f4fcb] bg-[#191919] flex justify-center items-center rounded-[10px] shadow-lg shadow-[#000000] m-4 md:m-0">
    <div className="right w-full h-full p-4 md:p-[20px]">
      <div className="logo w-full flex  justify-center ">
        <img className='w-[180px] md:w-[200px]' src={logo} alt="" />
      </div>
      <div className="head w-full mt-4">
        <p className='text-[16px] md:text-[18px] font-[500]'>Welcome Back</p>
        <p className='text-[13px] md:text-[15px] text-gray-300'>Log in Chatzy to continue chat with your friends</p>
      </div>
      <div className="input w-full md:w-[98%] mx-auto">
        <form onSubmit={handlesubmit} className='flex flex-col gap-3 mt-5'>

          <div className="email">
            <p>Email</p>
            <input 
              type="text" 
              className='border-1 w-full h-[45px] md:h-[6vh] pl-[10px] rounded-[10px] mt-2 text-[15px] bg-[#2d2d2d]'
              placeholder='example@gmail.com'
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              required 
            />
          </div>
          <div className="password">
            <p>Password</p>
            <input 
              type="password" 
              className='border-1 w-full h-[45px] md:h-[6vh] pl-[10px] rounded-[10px] mt-2 text-[15px] bg-[#2d2d2d]'
              placeholder='******'
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              required 
            />
          </div>

          <button 
            className='bg-[#008080] w-full p-2 md:p-[10px] rounded-[10px] mt-5 md:mt-[5vh] text-white font-bold text-[18px] md:text-[20px]' 
            type='submit'
            disabled={isPending}
          >
            {isPending ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
      <div className="login flex text-[14px] w-full mt-4">
        <p className='text-center w-full'>Don't have an account <Link to="/signup" className='text-[#008080]'>Sign up</Link></p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Login
