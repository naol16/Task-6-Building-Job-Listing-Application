import React from 'react'
import Image from 'next/image';
interface JobListing {
  title: string;
  description: string;
  responsibilities: string[];
  ideal_candidate: {
    age: string;
    gender: string;
    traits: string[];
  };
  when_where: string;
  about: {
    posted_on: string;
    deadline: string;
    location: string;
    start_date: string;
    end_date: string;
    categories: string[];
    required_skills: string[];

  };
  company: string;
  image: string;
  tags:String[];

}

interface jobprops{
  job:JobListing
  index:number

}

const Jobcard: React.FC<jobprops>= ({job,index}) => {
  return (
    <div className='mt-4'>
      <div className=' shadow-sm  rounded-[25px] border-[#D6DDEB] flex gap-4 p-[24px] m-12'>
        <div>
        <Image src={job.image} alt="social media" width={66} height={59}/>
        </div>
        <div>
          <h1 className='title'>{job.title}</h1>
          <p className='text-lg text-[#7C8493] font-[Epilogue] font-weight'>{job.company}</p>
          <p className='para'>
            {job.description}
          </p>
        <div className='flex gap-2 pt-4'>
        <button className='text-teal-500 w-24 rounded-[80px] border-3 border-teal-100 p-2 bg-teal-100'>
          In person
        </button>
        <button className='text-[#FFB836] w-24 border-3 rounded-[80px] border-[#FFB836] p-2'>
          education
        </button>
        <button className='text-[#4640DE] w-24  border-3 rounded-[80px] border-[#4640DE] p-2'>
         {job.tags[1]}
        </button>
        </div>
      </div>
 
      </div>

      </div>

  )
}

export default Jobcard
