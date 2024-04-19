import React from 'react'

import TestimonialsComponent from './TestimonialsComponents';
import SocialComponent from './SocialComponent';
import ServicesComponent from './ServicesComponent';
import ProjectComponent from './ProjectComponent';
import ExperienceComponent from './ExperienceComponent';
import ProfileComponent from './ProfileComponent';
function AdminPage() {
 
return (
    <div className='w-full  flex-col   self-center space-y-2  flex items-center divide-y-2 divide-solid divide-gray-800'>
      <ProfileComponent/>
      <ProjectComponent/>
      <TestimonialsComponent/>
      <ServicesComponent/>
      <SocialComponent/>
      <ExperienceComponent/>
    </div>
  )
}

export default AdminPage