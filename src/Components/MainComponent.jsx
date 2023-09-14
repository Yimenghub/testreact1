import React, { useEffect, useState } from 'react'
import LeftComponent from './LeftComponent'
import RightComponent from './RightComponent'

export default function MainComponent({trip, setTrip}) {
    const [newObj, setNewObj]= useState({});
    // user input
    const handleUserInput=(e)=>{
        const{name, value} = e.target;
        setNewObj({...newObj,[name]: value});
    }
    console.log(newObj);

    // submit
    const handleSubmit=()=>{
        setTrip([...trip, {...newObj,id: trip.length+1}]);
    };
    console.log(trip);

    // status
    const handleStatus=(id)=>{
        const updateStatus=trip.map((item)=>{
            if(item.id==id){
                return{
                    ...item,
                    status:(item.status = item.status=="beach" ? "forest" :item.status=="forest"?"mountain": "beach"),
                };

            }
            return item;
        })
        setTrip(updateStatus);
    };

    // show more detail
   const[showInfo,setShow]=useState({});
   const handleShow=(obj)=>{
    setShow(obj);
   }
    useEffect(()=>{
        console.log(showInfo);
    },[showInfo]);

  return (
    <div>
            <div class="grid grid-cols-12 grid-rows w-full h-full absolute bg-white">
                <div className=' col-span-1 w-20'><LeftComponent/> </div>
                <div className='bg-white col-span-8 '>
                <div>   

                <div className='flex flex-row bg-white w-full mt-20  justify-between mb-10'>
                <h1 className='text-black font-bold text-3xl'>Good Evening Team</h1>

                {/* The button to open modal */}
                <label htmlFor="my-modal-3" className="btn bg-slate-800 text-white">ADD NEW TRIP</label>

                {/*pop up card */}
                <input type="checkbox" id="my-modal-3" className="modal-toggle " />
                <div className="modal">
                <div className="modal-box relative bg-white">
                    <div className='flex flex-col w-full'>
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='flex flex-col justify-center'>
                        <div className='flex flex-row'>
                        <label for="countries" class="block  text-sm font-medium text-gray-900 mr-80">Title</label>
                        </div>
                        <div className='flex justify-center '>
                        {/* input title */}
                        <input type="text" onChange={handleUserInput} placeholder="Input Title" name='title' className="input input-bordered input-primary w-full  mt-1 mb-4 bg-white"/>
                        </div>
                        <div className='flex flex-row'>
                        <label for="countries" class="block  text-sm font-medium text-gray-900 items-start">Description</label>
                        </div>
                        <div className='flex justify-center'>
                        {/* input description */}
                        <input type="text" onChange={handleUserInput} placeholder="Input Description" name='description' className="input input-bordered input-primary w-full  mt-1 mb-4 bg-white" />
                        </div>
                        <div className='flex flex-row justify-start'>
                        <label for="countries" onChange={handleUserInput}class="block  text-sm font-medium text-gray-900 mr-64">People going</label>
                        </div>
                        <div className='flex justify-center'>
                        {/* input people going */}
                        <input type="text" onChange={handleUserInput} placeholder="00" name='peopleGoing' className="input input-bordered input-primary w-full  mt-1 mb-4 bg-white" />
                        </div>                    
                    </div>

                {/* select Input */}
                    <div className='flex flex-row justify-start'>
                    <label for="countries" class="block  text-sm font-medium text-gray-900 ">Type Of Advanture</label>
                    </div>
                    <div className='flex flex-row justify-start mt-1'>
                    <select onChange={handleUserInput} name='status' class="bg-gray-50 border mb-3  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 ">
                    <option selected >-- Choose Any Option --</option>
                    <option value="beach">Beach</option>
                    <option value="forest">Forest</option>
                    <option value="mountain">Mountain</option>
                    </select>
                    </div>
                    </div>
                   <button onClick={handleSubmit} className="btn mr-96 mt-4">SUBMIT</button></div>
                </div>
                </div>
             </div>
                
                {/* map all card */}
                <div className='grid grid-cols-3 gap-3 mx-auto'>
                {trip.map((item) => (
                    <div className="mx-auto card w-96 bg-slate-700 text-white mb-2">
                    <div className="card-body items-center text-left ">
                        
                        <div className='flex flex-col'>
                        <div className='descript'>
                        <h2 className="card-title uppercase text-right flex justify-start mb-3 text-2xl">{item.title}</h2>
                        <p className=' mb-2 text-justify'> {item.description} </p>
                        </div>
                        <p className=''>People Going</p>
                        <h1 className='text-2xl font-bold '>{item.peopleGoing}</h1>
                        </div>
                        <div className="card-actions justify-start">
                        <button onClick={()=> handleStatus(item.id)} className={`btn btn-primary px-15 ${item.status == "mountain" ? "bg-gray-500" : item.status == "forest" ? "bg-green-500" : "bg-blue-500"} w-32 mr-5`}>{item.status}</button>
                        <div>
                            
                        {/* Read detail button */}
                        <label onClick={handleShow} htmlFor={`my-modal-33 ${item.id}`} className="btn w-32 bg-slate-900">READ DETAIL</label>

                        {/* detail card */}
                        <input type="checkbox" id={`my-modal-33 ${item.id}`} className="modal-toggle" />
                        <div className="modal">
                        <div className="modal-box relative bg-white text-black">
                            <label htmlFor={`my-modal-33 ${item.id}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                           <div className='flex flex-col'>
                           <h2 className="text-lg  flex justify-start uppercase font-bold">{item.title}</h2>
                            <p className="py-4 flex  text-justify">{item.description}</p>
                            <p className='py-4 flex justify-start'>Around <h2 className='font-bold mr-1 ml-1'>{item.peopleGoing}</h2> people going there</p>
                           </div>
                        
                        </div>
                        </div>
                            {/* <label htmlFor="my-modal-33" className="btn" >READ DETAIL</label> */}
                            <input type="checkbox" id="my-modal-33" className="modal-toggle" />
                        </div>
                        </div>
                    </div>
                    </div>
                ))};
             </div>
                
                {/* right component */}
                </div>
                    <div className='bg-white col-span-3 '><RightComponent/> </div>
                </div> 

            </div>
  )
}
