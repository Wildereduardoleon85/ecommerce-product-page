import { useEffect, useState } from 'react'

function useMediaQuery(): boolean {
  const [windowSize, setWindowSize] = useState([window.innerWidth])
  const isMobile = windowSize[0] <= 820

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth])
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  })

  return isMobile
}

export default useMediaQuery
