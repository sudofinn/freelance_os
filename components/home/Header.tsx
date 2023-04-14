import React from 'react'
import Link from "next/link"
import Router from "next/router"
import Image from "next/image"




import FreelanceIcon from "../../assets/icons8-notion.svg"
import HeaderImg from "../../assets/easlofreelancenew.jpg"
import HeaderImgTwo from "../../assets/iPhone 12 Pro (Wooden Hands)_freelanceos_mockup_ex.png"


import HeaderPic from "../../assets/header_pic.png"

const Footer = () => {
	
  return (
    <div className="bg-black"  >
      <h1 className='text-5xl pt-16 pb-16 text-center font-extrabold block  text-white'>Plan.Work.Earn.</h1>
       <div className=' flex justify-center pb-64'>
        
        <Image className='flex ' src={HeaderPic} alt="Header" />
        
        {/*add autoPlay prop to play */}

    </div> 
    </div>



  )
}

export default Footer