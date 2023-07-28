import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/web'
import Overlay from './overlay'
import Scene from './scene'

function App() {
  // This spring controls the background and the svg fill (text color)
  const [{ background, fill }, set] = useSpring({ background: '#f0f0f0', fill: '#202020' }, [])
 
  return (
    <a.main style={{ background }}>
      <section className='heroSection'>
        <Overlay fill={fill} />
        <Canvas className='canvas' dpr={[1, 2]}>
          <Scene setBg={set} />
        </Canvas>
      </section>
      <section className='Content'>
        <a.h2 style={{color:fill}}>weekly Feature</a.h2>
        <a.h3 style={{color:fill}}>Diving in Nairobi City</a.h3>
        <div className='details'>
          <span>sub-heading</span>
          <span>Brief Text</span>
          <p>As a valued member of our community, you'll receive exciting updates, special offers, and early insights into the landmark's creation.</p>
          <button>Call To Action</button>
          <img alt='ocean' src="https://images.unsplash.com/photo-1682687981603-ae874bf432f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"/>
        </div>
      </section>
    </a.main>
  )
}

export default App;
