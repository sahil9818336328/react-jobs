import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid'

const Duties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty, __) => {
        const id = uuidv4()
        return (
          <div className='job-desc' key={id}>
            <FaAngleDoubleRight />
            <p>{duty}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Duties
