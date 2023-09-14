import React from 'react'

export default function RightComponent() {
  return (
    //entire Right component
    <div className='flex flex-col  w-10/12 h-full float-right bg-white' >
        <img src={require('../Images/camping.jpg')} className='w-full  h-screen' />
            
            {/* all icons + profile*/}
            <div className='flex flex-row absolute top-10 ml-48'>
              
              <div className='flex flex-row'>
              <div className='mr-3'>
              <img src={require('../Images/notification.png')} className='h-9 w-9 ' />
              </div>
              <div className='mr-3'>
              <img src={require('../Images/comment.png')} className='h-9 w-9 ' />
              </div>
              <div className='mr-3'>
              <img src={require('../Images/lachlan.jpg')} className='h-9 w-9 rounded-full' />
              </div>
              </div>
            </div>


            {/* button amazing trip */}
            <div className='flex flex-row absolute top-32 ml-44'>
                <button className='bg-orange-200 h-10 w-40 rounded-xl text-black font-bold text-sm'> My Amazing Trip</button>
              </div>
              <div className='absolute top-56 text-3xl text-white text-left p-3'>
                <p>
                    I like laying down on the sand and looking at the moon
                </p>
            </div>

            {/* all avatar */}
            <div className='absolute top-96 mr-10 p-4'>
                
            <div className='text-xl -ml-24 mb-2 text-white'>
                <p>27 people going to this trip</p>
                </div>
            <div className="avatar-group space-x-4">
            <div className="avatar border-transparent">
              <div className="w-12">
              <img src={require('../Images/lachlan.jpg')} className='h-11 w-11 rounded-full' />
              </div>
            </div>
            <div className="avatar border-white">
              <div className="w-12 ">
              <img src={require('../Images/raamin.jpg')} className='h-10 w-10  rounded-full ' />
              </div>
            </div>
            <div className="avatar border-orange-800">
              <div className="w-12">
              <img src={require('../Images/nonamesontheway.jpg')} className='h-10 w-10  rounded-full' />
              </div>
            </div>
            <div className="avatar border-white">
              <div className="w-12">
              <img src={require('../Images/christina.jpg')} className='h-10 w-10  rounded-full' />
              </div>
            </div>
            <div className="avatar placeholder border-orange-800 border-dotted">
              <div className="w-12 bg-orange-200 text-orange-700">
                <span>23+</span>
              </div>
            </div>
        </div>
    
            </div>


    </div>
  )
}
