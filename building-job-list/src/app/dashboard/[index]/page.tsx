'use client'
// import React from 'react'
// import { useParams } from 'next/navigation'
// import job from '../../../../jobs.json'

// const dashboard = () => {
// const params = useParams()
// const indexValue = params.index ? parseInt(params.index as string, 10) : -1;
// const ageCategory = job.jobs[indexValue].ideal_candidate.age === "18-24" ? "Young (18-24 year old)" : "Any";

//   return (
//     <div className='flex gap-[62px] p-4'>
//       <div>
//       <div className='p-4'>
//       <h1 className='title'>
//        Description
//       </h1>
//       <p className='para'>
//         {job.jobs[indexValue].description}
//       </p>
//       </div>
//       <div className='p-4'>
//         <h1 className='title'>responsibilities</h1>
//       <p className='para'>
//       {job.jobs[indexValue].responsibilities.map((responsibilty,index)=>(
//         <li key={index}>
//           {responsibilty}
//         </li>
//       ))}
//       </p>
//       </div>
//       <div className='p-4'>
//         <h1 className='title'>ideal candidate we want</h1>
//        <li className='para'>
//         {`${ageCategory} ${job.jobs[indexValue].ideal_candidate.gender} ${job.jobs[indexValue].title}`}
//        </li>
//        {job.jobs[indexValue].ideal_candidate.traits.map((traits,index)=>(
//         <li key={index} className='para'>
//           {traits}
//         </li>
//       ))
//     }
//       </div>
//       </div>
//      <div>
//       {/* here the section for the  of about and  catagroies and  required skill  could add based on  the screen shot  right part */}
//      </div>
//     </div>
//   )
// }

// export 

'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import job from '../../../../jobs.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  faCalendarAlt,
  faFolderOpen,
  faCheckCircle,
  faTag,
  faMapMarkerAlt,
  faPlayCircle,
  faStopCircle
} from "@fortawesome/free-solid-svg-icons";
import Jobs from '@/app/components/jobs/jobs';


const dashboard = () => {
  const params = useParams();
  const indexValue = params.index ? parseInt(params.index as string, 10) : -1;
  const currentJob = job.jobs[indexValue];
  const ageCategory =
    currentJob?.ideal_candidate?.age === '18-24'
      ? 'Young (18-24 year old)'
      : 'Any';

  return (
    <div className="flex gap-[62px] p-4">
      <div>
      <div className='p-4'>
      <h1 className='title'>
       Description
      </h1>
      <p className='para'>
        {job.jobs[indexValue].description}
      </p>
      </div>
      <div className='p-4'>
        <h1 className='title'>responsibilities</h1>
      <p className='para'>
      {job.jobs[indexValue].responsibilities.map((responsibilty,index)=>(
        <li key={index} className='list-none'>
          <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-green-500" />
          {responsibilty}
        </li>
      ))}
      </p>
      </div>
      <div className='p-4'>
        <h1 className='title'>ideal candidate we want</h1>
       <li className='para' key={indexValue}>
        {`${ageCategory} ${job.jobs[indexValue].ideal_candidate.gender} ${job.jobs[indexValue].title}`}
       </li>
       {job.jobs[indexValue].ideal_candidate.traits.map((traits,index)=>(
        <li key={index} className='para'>
          {traits}
        </li>
      ))
    }
      </div>
      <div className='p-4'>
        <h1 className='title'>
          When & Where
        </h1>
        <li className='list-none para font-black text-[#25324B] ' key={0}>
        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-green-500 rounded-b-full border-amber-100 p-2 text-lg" />
        {currentJob.when_where}
        </li>
      </div>
      </div>
  

      
      
 
      <div className="space-y-5">
  {/* About Section */}
  <div className="bg-white rounded-md shadow-sm p-5">
  <h2 className="title">About</h2>

  {/* Posted On */}
  <div className="flex items-center mb-2 text-gray-500 text-sm">
    <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-green-500" />
    <span className="icondescription">Posted On</span>
  </div>
  <p className="detaildescription">{currentJob.about.posted_on}</p>

  {/* Deadline */}
  <div className="flex items-center mb-2 text-gray-500 text-sm">
  <FontAwesomeIcon icon={faHeart} className="mr-2 text-green-500" />
  <span className='icondescription'>deadline</span>
  </div>

  <p className="detaildescription">{currentJob.about.deadline}</p>

  {/* Location */}
  <div className="flex items-center mb-2 text-gray-500 text-sm  mr-3">
    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-green-500 rounded-b-full border-amber-100 p-2" />
    <span className="icondescription">Location</span>
  </div>
  <p className="detaildescription">{currentJob.about.location}</p>

  {/* Start Date */}
  <div className="mt-4">
    <div className="flex items-center mb-2 text-gray-500 text-sm  mr-3">
      <FontAwesomeIcon icon={faPlayCircle} className="mr-2 text-green-500" />
      <span className="icondescription">Start Date</span>
      </div>
    
    <p className="detaildescription">{currentJob.about.start_date}</p>

    {/* End Date (Green Background) */}
    <div className="flex items-center mb-2">
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 mr-3">
        <FontAwesomeIcon icon={faStopCircle} className="text-green-500" />
      </div>
      <span className="icondescription">end date</span>
    </div>
    <p className="detaildescription">{currentJob.about.end_date}</p>
  </div>
</div>

  {/* Categories Section */}
  <div className="bg-white rounded-md shadow-sm p-5">
    <h2 className="title">Categories</h2>
    {currentJob.about.categories.map((category, index) => (
      // <div 
      //   key={index}
      //   className="flex justify-between bg-yellow-100 text-yellow-700 rounded-full px-3 py-1 text-sm mr-2 mb-2"
      // >
      //   <FontAwesomeIcon icon={faTag} className="mr-2 text-yellow-500" />
      //   <span>{category}</span>
      // </div>
    index==0 ? <button className='text-[#FFB836] w-24 border-3 rounded-[80px] border-[#FFB836] p-2 m-2 bg-[#EB85331A]'>
      {category}
      </button>
       : <button className='text-teal-500 w-24 rounded-[80px] border-3 border-teal-100 p-2 bg-teal-100'>
      {category}
    </button>
  
    ))}
  </div>

  {/* Required Skills Section */}
  <div className="bg-white rounded-md shadow-sm p-5">
    <h2 className="title">Required Skills</h2>
  
      {currentJob.about.required_skills ?.map((skill, index) => (
        // <li key={index} className="flex items-center text-sm mb-2">
        //   <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-green-500" />
        //   <span>{skill}</span>
        // </li>
        <button className='text-[#4640DE]   border-[#4640DE] p-2 m-2 bg-[#F8F8FD]'>
        {skill}
       </button>
      ))}
  
  </div>
</div>

      </div>
  );
};

export default dashboard;


