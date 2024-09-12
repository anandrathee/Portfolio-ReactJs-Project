import React from 'react';
import Button from './Button';
import { MdOutlineArrowRightAlt } from "react-icons/md";

const MyProjects = () => {
  const data = [
    {
      image: "/projects/1.png",
      title: "TMDB - Search Your Favourites Movies",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam recusandae veritatis repellat, dicta pariatur suscipit odit assumenda quaerat facere nobis."
    },
    {
      image: "/projects/1.png",
      title: "TMDB - Search Your Favourites Movies",
      des: "Another project description goes here. It provides some detail about the project and what was accomplished."
    },
  ];

  return (
    <div id='myProjects' className='projects flex items-center justify-center bg-white  px-8 lg:px-32 w-full h-full flex-col gap-10 overflow-hidden'>
      <div className="project-top w-full flex items-center justify-between mt-[5rem]">
        <div className="project-top-left flex flex-col items-start justify-between">
          <p className='project-top-para font-semibold text-[#5840BA]'>- Projects</p>
          <h1 className='project-head text-4xl font-semibold text-[#5840BA]'>My <span className='text-green-500'>Latest Projects</span></h1>
        </div>
        <div className="service-top-right">
        <div className="project-btn-top bg-black border-none  relative   gap-2 flex rounded-full items-center justify-center">
                <a href="" className='project-link bg-green-500 z-10 flex text-sm items-center justify-center gap-2 rounded-full font-semibold ml-8 hover:-translate-x-8 transition duration-500 px-4 py-3 '>View All Projects </a>
                
              </div>
        </div>
      </div>

      {data.map((item, index) => (
        <div key={index} className="project-card w-full h-[26vw] bg-[#705BC4] text-white rounded-3xl flex p-3 items-center justify-between gap-5">
          <div className="project-left-img w-[50%] h-full rounded-3xl overflow-hidden relative bg-white">
            <img src={item.image} alt={item.title} className='pro-img w-full h-full object-cover rounded-xl' />
          </div>

          <div className="project-right-container w-[50%] h-full flex flex-col items-start justify-evenly rounded-3xl p-3">
            <div className="project-right-content-top w-full gap-3 rounded-full text-center flex">
              <Button text={"UI/UX Design"} color={"bg-green-500 text-black font-semibold rounded-full w-26 h-8"} />
              <Button text={"App Design"} color={"bg-green-500 text-black font-semibold rounded-full w-26 h-8"} />
              <Button text={"Wireframe"} color={"bg-green-500 text-black font-semibold rounded-full w-26 h-8"} />
            </div>
            <div className='project-right-content-bottom flex items-start justify-center gap-5 flex-col'>
              <h1 className='pro-bottom-title font-semibold'>{item.title}</h1>
              <p className='pro-bottom-des text-sm w-[28rem] leading-6'>{item.des}</p>
              <div className="project-btn bg-black border-none  relative   gap-2 flex rounded-full items-center justify-center">
                <a href="" className='pro-link bg-green-500 z-10 flex items-center justify-center gap-2 rounded-full text-sm text-black font-semibold ml-8 hover:-translate-x-8 transition duration-500 px-6 py-3 '>View {item.title.slice(0,4)} </a>
                
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MyProjects;