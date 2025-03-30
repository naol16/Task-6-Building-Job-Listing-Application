'use client'

import React from 'react'
import job from "../../../../jobs.json"
import Jobcard  from '../joblist/joblist'
import Layout from '../layout/layout'
import Link from 'next/link'


const Jobs = () => {
  return (
    <>
    <div>
    <Layout/>
    { 
      job.jobs.map((job,index)=>(
        <div>
        <Link href={`/dashboard/${index}`}>
        <Jobcard job={job} index={index} key={index}/>
        </Link>
        </div>
  
      ))
    }
    </div>
    </>
  )
}

export default Jobs
