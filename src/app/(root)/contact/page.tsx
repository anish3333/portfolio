"use client";

import ContactForm from '@/components/ContactForm'
import React from 'react'

const page = () => {
  return (
    <section className=" mt-8 flex flex-col gap-9">
      <div className="text-5xl max-w-[64rem] font-bold text-white-1">Reach out to Me</div>
      <hr/> 
      <ContactForm/> 
    </section>
  )
}

export default page