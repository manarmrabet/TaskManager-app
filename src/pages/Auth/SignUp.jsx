import React, { useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { validateEmail } from '../../utils/helper';
import ProfilePhotoSelector from '../../components/inputs/ProfilePhotoSelector';
import Input from '../../components/inputs/Input';
import { Link } from 'react-router-dom';
const SignUp =()=>{
  const [profilePic,setProfilePic]= useState(null);
  const [fullName,setFullName]= useState("");
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const [adminInviteToken,setadminInviteToken]= useState("");
  const [error,setError]= useState(null);

    // Handle signup Form Submit
    const handleSignUp = async(e)=>{
      e.preventDefault();
      if(!fullName){
        setError("please enter full name.");
        return;
      }
      if(!validateEmail(email)){
        setError("please enter a valid email adress.");
        return;
      }
      if(!password){
        setError("please enter the password.");
        return;
      }
      setError("");
      //signup API call
          
    };
  return(
    
    <AuthLayout>
      <div className='lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>Create an Account</h3>
        
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>Join us, enter your details below</p>
      
      <form onSubmit={handleSignUp}>
        <ProfilePhotoSelector image={profilePic} setImage={setProfilePic}/>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Input
        value={fullName}
        onChange={({target }) => setFullName(target.value)}
        label="Full Name"
        placeholder="FullName"
        type="text"
          />
          <Input value={email} 
          onChange={({target }) => setEmail(target.value)}
          label="Email Address"
          placeholder="name@example.com"
          type="text"/>

          <Input value={password} 
          onChange={({target }) => setPassword(target.value)}
          label="Password"
          placeholder="min 8 Characters"
          type="password"/>

          <Input value={adminInviteToken} 
          onChange={({target }) => setadminInviteToken(target.value)}
          label="Admin Invite Token"
          placeholder="6 digit code"
          type="text"/>

          {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}
          <button type="submit" className='btn-primary'>SIGNUP</button>
          <p className='text-[13px] text-slate-800 mt-3'>
            Already have an account?{""}
         <Link className='font-medium text-primary underline' to="/login">login</Link>
         </p>
        </div>
      </form>

      </div>

    </AuthLayout>
  )
}
export default SignUp