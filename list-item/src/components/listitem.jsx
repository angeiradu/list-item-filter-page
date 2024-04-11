import React from 'react'
import Ange from '../assets/ange.jpg'
import { IoIosStar } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";

export default function Login(){
  return (
    <div className='bg-[#f0f6ff] h-screen'>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10 py-[30px] px-1 md:p-[50px] lg:p-[150px] xl:p-[150px] text-sm'>
        <div className='bg-white rounded w-full p-[20px]'>
          <table className='w-full'>
            <thead>
              <th className='text-left'>Ranking</th>
              <th className='text-left'>Player name</th>
              <th className='text-left'>Age group</th>
              <th className='text-left'>Height</th>
              <th className='text-left'>Position</th>
              <th className='text-left'>Star Rating</th>
            </thead>
            <tbody>
              <tr>
                <td colSpan="7" >
                  <hr className='my-4' />
                </td>
                
              </tr>
              <tr>
                <td>
                  <div className='bg-[#b6822d] rounded-full w-6 h-6 pt-[2px] text-center text-white'>1</div>
                </td>
                <td>
                  <div className='flex gap-2'>
                    <img className='rounded-full w-8 h-8' src={Ange} alt="" />
                    <div className='w-full'>Jordan Aderson</div>
                  </div>
                </td>
                <td>U-18</td>
                <td>6`5"</td>
                <td>PG</td>
                <td>
                <div className='flex text-[#b6822d]'>
                  <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />
                </div>
                </td>
                <td>
                <div className='text-blue-500 flex gap-1'>
                  <div>Veiw</div>
                  <div className='pt-1'><MdArrowForwardIos /></div>
                </div>
                </td>
              </tr>
            </tbody>
           </table>
          </div>
        <div className='bg-white rounded w-full'>
          <h1>page 2</h1>
        </div>
      </div>
    </div>
  )
}