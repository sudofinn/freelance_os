import React from 'react'
import Head from "next/head";


import SecondCallToActionEx from "@/components/home/SecondCallToActionforEx";
import Footer from '@/components/home/Footer'

const StartUsingFiverr = () => {
  return (
    <div className='bg-black text-white pt-16'>
      <Head>
        <title>How to start using Fiverr</title>
        <meta name="description" content="How to start using Fiverr ( blog )" />
      </Head>
        <h1 className='text-5xl lg:text-7xl font-extrabold text-center pb-4 '>We are working on it</h1>
        <p  className='text-2xl mx-auto w-2/3  lg:w-1/3 text-center '>Give us a moment, this article will be up in no time.
         While it&apos;s written, feel free to check out the FreelanceOS in more detail.</p>

        <video autoPlay  muted loop className='w-full lg:w-5/6' >         
           <source src="/videos/support_vid.mp4" type="video/mp4" />       
        </video>
        
        <SecondCallToActionEx />
        <Footer />


    </div>
  )
}

export default StartUsingFiverr