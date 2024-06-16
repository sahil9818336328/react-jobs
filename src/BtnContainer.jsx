import React from 'react'

const BtnContainer = ({ jobs, setCurrentIndex, currentIndex }) => {
  return (
    <div className='btn-container'>
      {jobs.map((item, index) => {
        return (
          <button
            key={item.id}
            className={`job-btn ${
              currentIndex === index ? 'job-btn active-btn' : 'job-btn'
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            {item.company}
          </button>
        )
      })}
    </div>
  )
}

export default BtnContainer
