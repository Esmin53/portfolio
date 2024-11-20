"use client"

import React from 'react'
import StatueComponent from './StatueComponent'
import GeneralInfo from './GeneralInfo'

function Homepage() {

    return (
        <div className='w-full h-screen p-8 xl:p-12 2xl:p-16 flex items-center justify-center gap-4 overflow-x-hidden'>
            <GeneralInfo />
            <StatueComponent />
        </div>
  )
}

export default Homepage