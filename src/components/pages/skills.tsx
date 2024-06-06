import React from 'react'
import SkillsCard from '../SkillCard'
import { skillsSorted } from '@/constants'

const Skills = () => {
  return (
    <section>
      <div className='text-xl text-white font-semibold h-full w-full bg-divink-300'>
        <SkillsCard skills={skillsSorted}/>
      </div>
    </section>
  )
}

export default Skills