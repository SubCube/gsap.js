
import { useRef, useLayoutEffect } from 'react'

import './App.css'

import reactLogo from './assets/react.svg'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function App() {

  const rootRef = useRef<HTMLImageElement | null>(null)

  useLayoutEffect(() => {
    const el = rootRef.current
    gsap.fromTo(el, { rotation: 0 }, {
      rotation: 180, duration: 3, scrollTrigger: {
        trigger: el,
        toggleActions: 'restart none none none'
    }})
  }, [])
  return (
    <>
      <div className="helper"></div>
      <img src={reactLogo} className="logo react" alt="React logo" ref={rootRef} />
    </>
  )
}

export default App
