import React from 'react'
import herologo from "../assets/herologo.png";
import iphonepro from "../assets/iphonepro.png";
import iphoneprosmall from "../assets/iphoneprosmall.png";

const Hero = () => {
  return (
    <section className="bg-black text-white min-h-screen   flex flex-col items-center justify-center text-center px-6">
        <img src={herologo}
        alt=" hero logo"
        className="h-96 w-96 mt-2 mb-6"/>

        <p className="  font-bold text-center text-lg lg:text-3xl text-gray-500 max-w-4xl">Get to know the next generation of iPhone — iPhone 17 Pro, iPhone 17 and the all-new iPhone Air. Explore the new AirPods Pro 3 featuring the world’s best in-ear Active Noise Cancellation. And discover the latest Apple Watch family, which provides more powerful health insights than ever.</p>

        <button className=" bg-black px-8 py-3 text-sm text-white  mb-2 mt-6 rounded-full hover:bg-white hover:text-black border-2 border-white">Watch the event</button>
         
         <img src={iphonepro} alt="iphonepro" className="h-40 w-40 mb-6 mt-40"/>
         <h1 className=" font-bold text-center text-lg text-gray-500 max-w-4xl">The most powerful iPhone ever. Breakthrough battery life. Our best display ever with Ceramic Shield 2 on the front, the powerful A19 Pro chip, all 48MP rear cameras and the new Center Stage front camera.</h1>
          <p className="mt-3 text-gray-500 max-w-5xl">Pre-order starting at 5:30 PM IST on 12 Sep</p>
                   <p className="mt-1 text-center text-gray-500 max-w-5xl">Available from 19th sep</p>

    <div class="flex  justify-center items-center gap-8 space-x-6 ">
        <button className=" mt-4 px-4 py-2 bg-black text-white border border-white  hover:bg-white hover:text-black rounded-full">Learn more</button>
        <button className=" mt-4 px-4 py-2 bg-black text-white border border-white hover:bg-white hover:text-black rounded-full">view pricing</button>
    </div>
    <img src={iphoneprosmall} alt="iphoneprosmall"className="h-40 w-40 mb-6 mt-10"/>

    </section>
  )
}

export default Hero