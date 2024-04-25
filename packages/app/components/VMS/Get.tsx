"use client";

import React from 'react'
import { useRouter } from 'next/navigation'
import { SESSION } from '@/app/routes';

const Get = () => {
const route = useRouter()
  return (
    <button onClick={() => route.push(`/${SESSION}`)}>
        Get Derflex Visitor Management Sofware now!
    </button>
  )
}

export default Get