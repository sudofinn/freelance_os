import React from 'react'
import Head from "next/head";
import Image from "next/image"
import Link from "next/link"



import SecondCallToActionEx from "@/components/home/SecondCallToActionforEx";
import Footer from '@/components/home/Footer'


import FirstBlogPost from "@/assets/freelanceos_youtube_thumbnail.png"
import SecondBlogPost from "@/assets/freelanceos_1_forthumbnail.png"
import ThirdBlogPost from "@/assets/ThirdBlogPost.png"
import FourthBlogPost from "@/assets/fourthblogpost_freelanceos.jpeg"
import FifthBlogPost from "@/assets/freelanceos_youtube_banner_2_1.png"
import SixthBlogPost from "@/assets/SixthBlogPost.png"


const index = () => {
  return (
    <div className='bg-black w-full min-h-screen font-extrabold'>

      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog of the  Freelance OS" />
      </Head>


    <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 flex justify-center bg-black text-white">
   <div className="container">

      <div className="flex flex-wrap justify-center ">
         <div className="w-full ">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 ">
              
               <h2
                  className="
                  font-extrabold
                  text-4xl
                  lg:text-7xl
                  mb-4
                  "
                  >
                  The Freelancer blog
               </h2>
               <p className="text-xl lg:text-2xl text-body-color max-w-[500px] mx-auto">
                  Your source for learning everything about the world of freelancing.
               </p>
            </div>
         </div>
      </div>


      <div className="flex flex-wrap ">


         <Link href="/blog/what-is-notion" className="w-full md:w-1/2 lg:w-1/3 ">
            <div className="max-w-[370px] mx-auto mb-10">
               <div className="rounded overflow-hidden mb-8">
                  <Image src={SecondBlogPost} alt="first blog post" />
               </div>
               <div>
                  <span
                     className="
                     bg-blue-600
                     rounded
                     inline-block
                     text-center
                     py-1
                     
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
                     >
                  Feb 3, 2023
                  </span>
                     <h2
                        
                        className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        
                        "
                        >
                     What is Notion and why do Freelancers use it ?
                     </h2>
                  
               </div>
            </div>
         </Link>
 



         <Link href="/blog/start-youtube-channel" className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="max-w-[370px] mx-auto mb-10">
               <div className="rounded overflow-hidden mb-8">
                  <Image src={FirstBlogPost} alt="first blog post" />
               </div>
               <div>
                  <span
                     className="
                     bg-blue-600
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
                     >
                  May 15, 2023
                  </span>
                     <h2
                        
                        className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        
                        "
                        >
                     Do this if you want to start a start a freelancing youtube channel.
                 </h2> 
               </div>
            </div>
         </Link>


         <Link href="/blog/2024-freelancing-year" className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="max-w-[370px] mx-auto mb-10">
               <div className="rounded overflow-hidden mb-8">
                 
                  <Image src={ThirdBlogPost} alt="first blog post" />
               </div>
               <div>
                  <span
                     className="
                     bg-blue-600
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
                     >
                  Aug 12, 2023
                  </span>
                     <h2
                        className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
                        >
                     Make 2024 your freelancing year.
                  </h2>
                  
               </div>
            </div>
         </Link>

         <Link href="/blog/10-best-niches" className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="max-w-[370px] mx-auto mb-10">
               <div className="rounded overflow-hidden mb-8">
                  
                  <Image src={FourthBlogPost} alt="first blog post" />
               </div>
               <div>
                  <span
                     className="
                     bg-blue-600
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
                     >
                  Nov 6, 2023
                  </span>
                  <h2
                        className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        ">
                     Top 10 best niches to earn money as a Freelancer in 2023.
                  </h2>
                  
               </div>
            </div>
         </Link>

         <Link href="/blog/biggest-beginner-mistakes" className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="max-w-[370px] mx-auto mb-10">
               <div className="rounded overflow-hidden mb-8">
                  
                  <Image src={FifthBlogPost} alt="first blog post" />
               </div>
               <div>
                  <span
                     className="
                     bg-blue-600
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
                     >
                  July 29, 2023
                  </span>
                  <h2
                        className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
                        >
                     The biggest beginner mistakes.
                  </h2>
                  
               </div>
            </div>
         </Link>

         <Link href="/blog/price-services-correctly" className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="max-w-[370px] mx-auto mb-10">
               <div className="rounded overflow-hidden mb-8">
                  
                  <Image src={SixthBlogPost} alt="first blog post" />
               </div>
               <div>
                  <span
                     className="
                     bg-blue-600
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
                     >
                  Sep 29, 2023
                  </span>
                  <h2
                        className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
                        >
                     How to price your services correctly.
                  </h2>
                  
               </div>
            </div>
         </Link>
  
      </div>
   </div>
</section>




<div className="max-w-screen-xl p-5 mx-auto bg-black text-white ">
	<div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">

		<Link href="/blog/how-to-fiverr" className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500 ">
         
			<div className="absolute top-0 bottom-0 left-0 right-0  bg-blue-600"></div>
			<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
				<h1  className="px-3 py-2 text-xs font-semibold tracki uppercase dark:text-gray-100 bgundefined">Become</h1>
				<div className="flex flex-col justify-start text-center dark:text-gray-100">
					<span className="text-3xl font-semibold text-red-500 leadi tracki">07</span>
					<span className="leadi uppercase">June</span>
				</div>
			</div>
         <div className="z-10 p-5">
				<h2   className=" font-medium text-md hover:underline dark:text-gray-100">How to start using Fiverr </h2>
         </div>
		</Link>

      <Link href="/blog/stand-out-as-freelancer" className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500 ">
         
			<div className="absolute top-0 bottom-0 left-0 right-0  bg-red-500"></div>
			<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
				<h1  className="px-3 py-2 text-xs font-semibold tracki uppercase dark:text-gray-100 bgundefined">a</h1>
				<div className="flex flex-col justify-start text-center dark:text-gray-100">
					<span className="text-3xl font-semibold text-blue-600 leadi tracki">19</span>
					<span className="leadi uppercase">Mar</span>
				</div>
			</div>
         <div className="z-10 p-5">
				<h2   className=" font-medium text-md hover:underline dark:text-gray-100">Stand out as a freelancer </h2>
         </div>
		</Link>
     

     <Link href="/blog/get-first-client-fast" className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500 ">
         
			<div className="absolute top-0 bottom-0 left-0 right-0  bg-blue-600"></div>
			<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
				<h1  className="px-3 py-2 text-xs font-semibold tracki uppercase dark:text-gray-100 bgundefined">top</h1>
				<div className="flex flex-col justify-start text-center dark:text-gray-100">
					<span className="text-3xl font-semibold text-red-500 leadi tracki">23</span>
					<span className="leadi uppercase">Aug</span>
				</div>
			</div>
         <div className="z-10 p-5">
				<h2   className=" font-medium text-md hover:underline dark:text-gray-100">How to get your first client fast </h2>
         </div>
		</Link>

       <Link href="/blog/50-ways" className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500 ">
         
			<div className="absolute top-0 bottom-0 left-0 right-0  bg-red-500"></div>
			<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
				<h1  className="px-3 py-2 text-xs font-semibold tracki uppercase dark:text-gray-100 bgundefined">Freelancer</h1>
				<div className="flex flex-col justify-start text-center dark:text-gray-100">
					<span className="text-3xl font-semibold text-blue-600 leadi tracki">11</span>
					<span className="leadi uppercase">Nov</span>
				</div>
			</div>
         <div className="z-10 p-5">
				<h2   className=" font-medium text-md hover:underline dark:text-gray-100">50 ways to start freelancing </h2>
         </div>
		</Link>
     

	</div>
</div>
  

<SecondCallToActionEx />
<Footer />


</div>
  )
}

export default index