import React from 'react'


export default function LeftComponent() {
  // entire left component
  return (
    <div className='flex flex-col bg-slate-300 h-full w-28'>

    <div className='mt-10 mb-10 flex justify-center'>
    <img src={require('../Images/category_icon.png')} className='h-8 w-8 ' />
    </div>

    <div className='mt-8  flex justify-center'>
    <img src={require('../Images/cube.png')} className='h-8 w-8 ' />
    </div>
   
    <div className='mt-8 flex justify-center'>
    <img src={require('../Images/comment.png')} className='h-8 w-8 ' />
    </div >

    <div className='mt-8 flex justify-center'> 
    <img src={require('../Images/list.png')} className='h-8 w-8 ' />
    </div>
   

    <div className='mt-8 mb-8 flex justify-center'> 
    <img src={require('../Images/success.png')} className='h-8 w-8 ' />
    </div>

    <div className='mt-8 flex justify-center'> 
    <img src={require('../Images/security.png')} className='h-8 w-8 ' />
    </div>

    <div className='mt-8  flex justify-center'> 
    <img src={require('../Images/users.png')} className='h-8 w-8  ' />    </div>
    <div className='mt-8 flex justify-center'> 
    <img src={require('../Images/list.png')} className='h-8 w-8 ' />
    </div>

    <div className='mt-16 flex justify-center'> 
    <img src={require('../Images/lachlan.jpg')} className='h-8 w-8  rounded-full' />
    </div>

    <div className='mt-8 flex justify-center'> 
    <img src={require('../Images/raamin.jpg')} className='h-8 w-8 rounded-full' />
    </div>

    <div className='mt-8 flex justify-center'> 
    <img src={require('../Images/nonamesontheway.jpg')} className='h-8 w-8  rounded-full' />
    </div>

    <div className='mt-8 flex justify-center'> 
    <img src={require('../Images/plus.png')} className='h-8 w-8 ' />

    </div>
    </div>    

  )
}
