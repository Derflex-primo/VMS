import React from 'react'
import Portal from '../components/Session/Portal'

interface Props {

}


const Session: React.FC<Props> = () => {
  return (
    <div className='h-[100vh] flex justify-center items-center'>
        <Portal />
    </div>
  )
}

export default Session