
import style from './login.module.css'


export default function Login() {
  
  return (
    <div className="bg-gradient-to-br from-yellow-500 to-amber-300 w-full h-screen flex justify-center items-center shadow-custom">
    <div className=" bg-white mx-3 lg:mx-0  md:w-1/2 xl:w-1/4 rounded-2xl px-8 py-9 ">
      
    <h1 className={` relative text-2xl  font-bold ${style.lef} `}>User Management System</h1>
    <h4 className=' text-center mt-6 text-xl font-semibold'>SIGNIN</h4>
    <p className=' text-center text-sm mt-2 mb-6 text-neutral-500 font-normal leading-4'>Enter your credentials to access your account</p>
      <form action="" className=" flex flex-col mt-5">
        <label htmlFor="username" className=' text-sm font-medium my-2 text-neutral-500'>User Name</label>
        <input type="text" placeholder="Enter your name" name="username" className=' border border-1 border-neutral-200 rounded-md p-2 text-text-neutral-500 outline-0 focus:border-amber-300'/>
        <label htmlFor="pass"  className=' text-sm font-medium my-2 text-neutral-500'>Password</label>
        <input type="password" placeholder="Enter your password" name="pass"  className=' border border-1 border-neutral-200 rounded-md p-2 text-text-neutral-500 outline-0 focus:border-amber-300'/>
        <button type="submit" className='bg-yellow-500 text-white rounded-md my-5 p-2'>SIGNIN</button>
      </form>
    </div>
  </div>
  )
}
