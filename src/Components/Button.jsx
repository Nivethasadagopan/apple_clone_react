import React from 'react'
import airpods2x from "../assets/airpods2x.png";
import applewatchseries from "../assets/applewatchseries.jpg";
import applewatchlogo from "../assets/applewatchlogo.png";
import applewatchse from "../assets/applewatchse.png";
import applewatchse1 from "../assets/applewatchse1.png";

const Button = () => {
  return (
    
    <section class="bg-gradient-to-b from-gray-100 to-white">
        <div className="text-center ">
      <h1  className="font-bold text-4xl mb-3 pt-12">Airpods Pro 3</h1>
      <p className= "mt-4  font-medium text-lg text-gray-500 max-w-3xl mx-auto">Featuring the world’s best in-ear Active Noise Cancellation.1 Exceptional sound quality. All-new heart rate sensing during workouts.2 Live Translation to communicate across languages.3 And improved battery life with up to 8 hours of listening time.4 </p>
      <p className="mt-3 font-medium text-gray-500">Available from 19th sep</p>
      </div>

    <div className="flex justify-center items-center space-x-6 gap-8">
             <button className=" mt-4 px-4 py-2 bg-white text-black border border-black hover:bg-black hover:text-white rounded-full">Learn more</button>
             <button className=" mt-4 px-4 py-2 bg-white text-black border border-black hover:bg-black hover:text-white rounded-full">pre-order</button>

             </div>
            <div>
                <img src={airpods2x} alt="airpods2x"className="h-96 mx-auto py-10 px-20"/>
            </div>
               
               <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${applewatchseries})` }}>

                <div className="absolute inset-0  flex flex-col items-center justify-center">
                    <img src={applewatchlogo} alt="apple watch logo" className="w-96 mt-96"/> 
                    <p className= "text-white mt-4 text-lg font-medium text-1g text-center">The ultimate watch for a healthy life. Wake up to your sleep score.<br/>  
                    Boost your fitness with new Workout Buddy.<br/>
                    And enjoy up to 24 hours of battery life.</p>  
                <p className="text-white ">Available from 19 Sep</p>  
                   <div className="flex justify-center items-center space-x-6 gap-8">
             <button className=" mt-4 px-4 py-2 bg-white text-black border border-black hover:bg-black hover:text-white rounded-full">Learn more</button>
             <button className=" mt-4 px-4 py-2 bg-white text-black border border-black hover:bg-black hover:text-white rounded-full">pre-order</button>

             </div>


                     </div>

               </div>

           <section1 className= "text-white relative-h-screen">
            <img src={applewatchse} alt="apple watch logo" className="w-64  mt-10 mx-auto "/> 
            <p className= "mt-4  font-bold text-lg text-gray-500 max-w-3xl mx-auto">All-new essentials for a great value. Now you can track your sleep score. Get richer health insights in the Vitals app.7 Charge up to 2x faster with new fast charging.8 And see your info at a glance with the Always-On display. </p>
      <p className=" text-center mt-3 font-normal text-gray-500">Available from 19th sep</p>
      

    <div className="flex justify-center items-center space-x-6 gap-8">
             <button className=" mt-6 px-4 py-2 bg-white text-black border border-black hover:bg-black hover:text-white rounded-full">Learn more</button>
             <button className=" mt-6 px-4 py-2 bg-white text-black border border-black hover:bg-black hover:text-white rounded-full">pre-order</button>

             </div>

             <img src={applewatchse1} alt="apple watch logo" className="w-120  mt-10 mx-auto "/> 

            
           </section1>

           <section2>
        
    </section2>
            

           

    </section>

    

    
    

    
  )
}

export default Button