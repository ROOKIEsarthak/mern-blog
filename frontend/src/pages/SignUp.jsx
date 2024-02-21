import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {ClipLoader} from "react-spinners"


const SignUp = () => {

  const [formData , setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading , setLoading ] = useState(false)

  const showAlert1=()=>{
    alert("Please fill out all the fields")
  }

  const showAlert2=(message)=>{
    alert(message || "something went wrong")
  }

  
  

  const handleChange=(e)=>{
    setFormData({...formData, [e.target.id]: e.target.value.trim()});
    console.log(formData);

  };

  const handleSubmit = async (e)=>{
    e.preventDefault()
    if(!formData.username || !formData.email || !formData.password){
      showAlert1()      
      return;
    }

    
    try {
      setLoading(true)
      const res = fetch('/api/user/sign-up',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(formData)
      });

      const data = await res.json()
      console.log(data);
      console.log(data.message);

      setLoading(false)
      
      // if(data.success === false){
      //   // add alert here 
      //   showAlert2(data.message)
      //   return;
      // }
    } catch (error) {
      
      
    }
  }

  

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <div className="flex-1">
          {/*LEft */}

          <Link to="/" className='font-bold :dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500
            via-purple-500 to-pink-500 rounded-lg text-white
            '>Ambivert's</span>
            Blog
          </Link>
          <p className='text-sm mt-5'>
            This is a demo project . You can sign up with your email and password 
            or with Google .
          </p>
        </div>

        <div className="flex-1">
          {/*Right */}
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <label type="Your Username">
                <input 
                type="text"
                placeholder='Username'
                id='username' onChange={handleChange}/>
              </label>
            </div>
            <div>
              <label type="Your Email">
                <input 
                type="email"
                placeholder='name@company.com'
                id='email' onChange={handleChange}/>
              </label>
            </div>
            <div>
              <label type="Your Password">
                <input 
                type="password"
                placeholder='Password'
                id='password' onChange={handleChange}/>
              </label>
            </div>

            <button className='px-2 py-1 bg-gradient-to-r from-indigo-500
            via-purple-500 to-pink-500 rounded-lg text-white' type='submit' disabled={loading}>
              {
                loading ? ( 
                  <>
                    <ClipLoader color="#36d7b7"/>
                    <span className='pl-3'>Loading....</span>
                  </>
                
                 ) : "Sign Up"
              }
            </button >
          </form>

          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500' >
              Sign In
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default SignUp