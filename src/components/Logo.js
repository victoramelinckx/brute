import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion";
import { IQZoneIcon } from './Icons';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
      <MotionLink href="/"
      className='w-16 h-16 bg-dark text-light flex items-center justify-center
      rounded-full text-2x1 font-bold border border-solid border-transparent dark:border-light
      '
      whileHover={{
        scale:1.1,
        backgroundColor: ["rgba(252,176,69,1)", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
        transition:{duration:2, repeat: Infinity}
      }}
      >
      <IQZoneIcon/>
      </MotionLink>
    </div>
  )
}

export default Logo