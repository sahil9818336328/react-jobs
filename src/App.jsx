import { useEffect } from 'react'
import { useState } from 'react'
import JobInfo from './JobInfo'
import BtnContainer from './BtnContainer'

const url = 'https://www.course-api.com/react-tabs-project'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const fetchJobs = async () => {
    try {
      const response = await fetch(url)
      const newJobs = await response.json()
      setJobs(newJobs)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if (isLoading) {
    return (
      <section className='jobs-center'>
        <div className='loading'></div>
      </section>
    )
  }
  return (
    <section className='jobs-center'>
      <BtnContainer
        jobs={jobs}
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
      />
      <JobInfo jobs={jobs} currentIndex={currentIndex} />
    </section>
  )
}
export default App
