import { useState } from 'react'
import { Tab } from '@headlessui/react'

import FinanceImage from "../../assets/image 53.png"
import ClientImage from "../../assets/image 511.png"
import PersonalImage from "../../assets/image 61.png"


import Router from "next/router"
import Image from "next/image"
import Link from "next/link"



function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


export default function Tabs() {
  let [categories] = useState({
    Finances: [
      {
        id: 1,
        title: 'Monitor and manage your expenditures the easy way.',
        content:'See the cost of everything with one glimpse. Identify which purchases were worth it and which were not.',
        date: {FinanceImage},
        commentCount: "/htmlcss",
        
        color:"black",
        buttonstyle: "hover:bg-gradient-to-r from-blue-600  to-red-800 hover:from-red-800 hover:to-blue-400",


        firstBullet: "Neatly organized into various categories ( e.g. Recent, Monthly, History",
        secondBullet: "Instantly see the total expense, revenue and income to determine whether the investment was worth it.",
        
      },
    
    ],
    Clients: [
      {
        id: 1,
        title: 'Keep the information of a project and the client organized and at one place ',
        content: 'Work in an organized manner with your clients. See the work , your progress and the deadline to deliver efficiently and on time. ',
        date: {FinanceImage},
        commentCount: "/javascript",
        
        color:"black",
        buttonstyle: "hover:bg-yellow-600 ",
        image: {FinanceImage},


        firstBullet: "Neatly organized into various categories ( e.g. Recent, Monthly, History",
        secondBullet: "Instantly see the total expense, revenue and income to determine whether the investment was worth it.",
      },
     
    ],
    Personal: [
      {
        id: 1,
        title: 'Be informed when what happens , do not let your work take over your personal life.',
        content: 'Divide the business from your personal life to maintain a healthy work-life balance and never forget a family meeting.',
        date: {FinanceImage},
        commentCount:"/reactjs",
        
        color:"black",
        buttonstyle: "hover:bg-blue-400 ",
        image: {FinanceImage},


        firstBullet: "Neatly organized into various categories ( e.g. Recent, Monthly, History",
        secondBullet: "Instantly see the total expense, revenue and income to determine whether the investment was worth it.",

        
      },
      
    ],
  })

  function handleTransfer() {
    Router.push("/products")
  }

  return (
    <div className="max-w-5xl mt-32 lg:mt-64 px-4 text-black  py-16 mx-auto  " >
       <h1
            className=" mx-8  xl:mx-[120px] text-4xl sm:text-5xl font-bold xl:text-6xl 2xl:text-7xl mb-8 text-center"
          >
            Whatever you  {" "}
            <span className="font-extrabold text-pk ">need</span>{" "}
            {" "} , it is 
            <span className="font-extrabold text-bl"> available</span> .
          </h1>
      
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl  py-3 bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg  text-lg py-7 hover:shadow-xl duration-500 font-extrabold shadow-black  leading-5 text-black ',
                  'ring-white ring-opacity-60 ring-offset-4 ring-offset-pk focus:outline-none focus:ring-4',
                  selected
                    ? 'bg-white shadow'
                    : 'text-pk hover:bg-white/[0.12] hover:text-black '
                    
                )
                
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 bg-[#7D8AE8] ring-offset-2 ring-offset-teal-900 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md  "
                  >
                    <h3 className=" text-2xl lg:text-3xl xl:text-4xl mt-4 mb-4 font-extrabold ">
                      {post.title}
                    </h3>

                    <h4 className='text-xl lg:text-xl xl:text-2xl mt-4 mb-4 font-semibold'>{post.content}</h4>

                     <ul className="text-xl lg:text-2xl list-disc ml-8 mb-8">
                      <li> {post.firstBullet} </li>
                      <li> {post.secondBullet}</li>
                      
                    </ul>

                    
                      
                

                   
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}