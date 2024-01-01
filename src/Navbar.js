import React, { useEffect, useState } from 'react'
import Display from './Display';
import { LightTheme, Setting, Arrow, DarkTheme } from './Icons'
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from './redux';

const Navbar = () => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const storedObject = useSelector(state => state.theme)

  const [theme, setTheme] = useState(storedObject);

  const handleClick = () => {    
    setShow(!show);
  };

  const handleThemeClick = () => {  
    if(theme === "LIGHT") setTheme("DARK")  
    if(theme === "DARK") setTheme("LIGHT")  
  };

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
    dispatch(changeTheme(theme))
  }, [theme])


  return (
    <>
      <div className='flex justify-between items-center p-2' style={{ height: '8vh', backgroundColor: theme === "LIGHT" ? 'rgba(255, 255, 255, 1)' : 'rgba(22, 27, 34, 1)'}}>
        <div className='flex items-center text-black' style={{alignItems: "center",
          justifyContent: "space-between",
          gap: "0.7rem",
          borderRadius: "6px",
          padding: "0.25rem 0.4rem",
          border: "1px solid #4a4a4a",
          cursor: "pointer",
          color: "#ebebeb",
          boxShadow: theme === "DARK" ? "0 0 8px 0 #ffffff22" : "0 0 8px 0 #0000001a"}
          }>
          <button className='flex items-center gap-3 m-1' onClick={handleClick}>
            <Setting />
            <p style={{color: theme === "LIGHT" ? '#161B22' : "#ffff"}}>Display</p>
            <p></p>
            <Arrow />
          </button>
        </div>
        <div className='flex items-center'>
          <button onClick={handleThemeClick}>
            {theme === "LIGHT" 
            ? 
            <DarkTheme className='mr-4' />
            :
            <LightTheme className='mr-4' />
            }
          </button>
        </div>
      </div>  

      {show && <Display/>}

    </>
  )
}

export default Navbar