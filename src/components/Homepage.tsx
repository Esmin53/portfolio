"use client"

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import HtmlStringTypeWriter from './HtmlStringTypwriter'
import TypeWriter from './TypeWriter'
import StatueComponent from './StatueComponent'
import GeneralInfo from './GeneralInfo'

function Homepage() {

    return (
        <div className='w-full h-screen p-16 flex items-center justify-center gap-4 overflow-x-hidden'>
            <GeneralInfo />
            <StatueComponent />
        </div>
  )
}

export default Homepage