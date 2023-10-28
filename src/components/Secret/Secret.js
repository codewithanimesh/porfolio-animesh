import { Button, Input } from '@mui/material'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Secret = () => {
  const [code, setCode] = useState('');
  const [auth, setAuth] = useState(false);


  const handleCodeSubmit = () => {
    if (code === 'kant2022594') {
      toast.success("Access Granted", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setAuth(true);

    } else {
      toast.error("Wrong Code Bro you are not Authorised person☕!!!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    }
  };
  return (
    <div>


      {auth ? (
        <div>
          <h1 className='text-center'> Welcome To Secret Page</h1>
          <h1 className='text-center'> You are Authenticated!!!</h1>
        </div>


      ) : (
        <div>
          <h1 className='text-center'>This is Secret page You are not allowed to visit here!!</h1>
          <div className='container'>

            <div className='row'>
              <div className='col-md-6 d-flex justify-content-center flex-column gap-3'>
                <h4 className='text-center'>Enter Code to access this page</h4>
                <Input type="password" placeholder='Enter Code' value={code} onChange={(e) => setCode(e.target.value)} />
                <Button variant='contained' onClick={handleCodeSubmit} color='success'> Submit</Button>

              </div>
              <div className='col-md-6'>
                <img className='w-100 h-auto ' src="https://cdn.dribbble.com/users/2507445/screenshots/5827735/internet-safety-hacker.gif" alt="anything" />
              </div>

            </div>


          </div>


        </div>



        ) };


          <ToastContainer />
        </div>
      )
    }

      export default Secret;