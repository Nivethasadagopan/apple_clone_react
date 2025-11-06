import React from 'react'
import iphoneairlogo from "../assets/iphoneairlogo.png";
import iphoneair from "../assets/iphoneair.png";
import iphone172x from "../assets/iphone172x.png";

const section = () => {
  return (
    <>
    <section class="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-4xl mx-auto px-6">
         <img src={iphoneairlogo} alt="iphoneairlogo"className="h-40 mx-auto py-10 px-20"/>
         <p className=" text-center  font-medium text-lg  text-gray-500">The thinnest iPhone ever with the power of pro inside. More durable than any previous iPhone. Our best display ever with Ceramic Shield 2 on the front. The powerful A19 Pro chip. An advanced 48MP Fusion camera system. And the new Center Stage front camera.</p>
          <p className="mt-3 text-center text-gray-500 max-w-5xl">Pre-order starting at 5:30 PM IST on 12 Sep</p>
         <p className="mt-1 text-center text-gray-500 max-w-5xl">Available from 19th sep</p>
      </div>


    <div class="flex  justify-center items-center gap-8 space-x-6 ">
        <button className=" mt-4 px-4 py-2 bg-white text-black border border-black hover:bg-black hover:text-white rounded-full">Learn more</button>
        <button className=" mt-4 px-4 py-2 bg-white text-black border border-black hover:bg-black hover:text-white rounded-full">view pricing</button>
       
        
        
    </div>
    </section>

      <div>
          <img src={iphoneair} alt="iphoneair" className="h-auto w-120 mx-auto py-10 px-20"/>"
        </div>

        <div className=" text-center mx-auto max-w-3xl px-4">
          <h1 className="text-6xl font-bold text-center bg-gradient-to-r from-purple-500 via-blue-400 to-green-500 bg-clip-text text-transparent">iPhone 17</h1>
          <p className= "mt-4  font-medium text-lg text-gray-500 ">Even more delightful. Even more durable. Our best display ever with ProMotion up to 120Hz and the new Ceramic Shield 2 on the front. An advanced 48MP Dual Fusion camera system. And the new Center Stage front camera.</p>
          <p className="mt-3 text-gray-500 max-w-5xl">Pre-order starting at 5:30 PM IST on 12 Sep</p>
          <p className="mt-1 text-gray-500 max-w-5xl">Available from 19th sep</p>

           <div className="flex justify-center items-center space-x-6 gap-8">
             <button className=" mt-4 px-4 py-2 bg-white text-black border border-black hover:bg-black hover:text-white rounded-full">Learn more</button>
             <button className=" mt-4 px-4 py-2 bg-white text-black border border-black hover:bg-black hover:text-white rounded-full">view pricing</button>

           </div>
        </div>

        <div>
          <img src={iphone172x} alt="iphone172x" className=" mt-4 h-auto w-96 mx-auto py-10 px-20"/>
        </div>
           
        
    </>
         
    
  )
}

export default section