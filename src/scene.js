import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import React, { Suspense, useEffect, useState, useRef } from 'react'
import { useFrame, useLoader} from '@react-three/fiber'
import { PerspectiveCamera, Environment, MeshDistortMaterial, ContactShadows, Grid, PresentationControls } from '@react-three/drei'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'

import KiccModel from './assets/models/kicc.glb'

// React-spring animates native elements, in this case <mesh/> etc,
// but it can also handle 3rd–party objs, just wrap them in "a".
// const AnimatedMaterial = a(MeshStandardmaterial)

export default function Scene({ setBg }) {
  const KICCgltf = useLoader(GLTFLoader, KiccModel)
  // console.log(KICCgltf)
  const buildingRef = useRef()
  const light = useRef()
  const [mode, setMode] = useState(false)
  const [down, setDown] = useState(false)
  const [hovered, setHovered] = useState(false)

  // Make the mesh float and follow the mouse
  // This is frame-based animation, useFrame subscribes the component to the render-loop
  useFrame((state) => {
    light.current.position.x = state.mouse.x * 20
    light.current.position.y = state.mouse.y * 20
    if (buildingRef.current) {
        buildingRef.current.position.x = THREE.MathUtils.lerp(buildingRef.current.position.x, hovered ? state.mouse.x / 2 : 0, 0.2)
        buildingRef.current.position.y = THREE.MathUtils.lerp(
        buildingRef.current.position.y,
        Math.sin(state.clock.elapsedTime / 1.5) / 6 + (hovered ? state.mouse.y / 2 : 0),
        0.2
      )
    }
    
  })

  // Springs for color and overall looks, this is state-driven animation
  // React-spring is physics based and turns static props into animated values
  const [{ wobble, coat, color, ambient, env }] = useSpring(
    {
      wobble: down ? 1.2 : hovered ? 1.05 : 1,
      coat: mode && !hovered ? 0.04 : 1,
      ambient: mode && !hovered ? 1.5 : 0.5,
      env: mode && !hovered ? 0.4 : 1,
      color: hovered ? '#1496bd' : mode ? '#202020' : 'white',
      config: (n) => n === 'wobble' && hovered && { mass: 2, tension: 1000, friction: 10 }
    },
    [mode, hovered, down]
  )

  return (
    <>
      <PresentationControls
        global
        zoom={0.8}
        rotation={[0, -Math.PI / 1.6, 0]}
        polar={[0, Math.PI / 4]}
        azimuth={[-Math.PI / 4, Math.PI / 4]}>
          
        <a.ambientLight intensity={ambient} />
        <a.pointLight ref={light} position-z={-15} intensity={env} color="#84c3d6" />

        <Suspense fallback={null}>
          <a.mesh
            geometry={KICCgltf.nodes.building.geometry}
            ref={buildingRef}
            scale={wobble}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onPointerDown={() => setDown(true)}
            onPointerUp={() => {
              setDown(false)
              // Toggle mode between dark and bright
              setMode(!mode)
              setBg({ background: !mode ? '#202020' : '#f0f0f0', fill: !mode ? '#f0f0f0' : '#202020' })
            }}>
            <a.meshStandardMaterial color={color} envMapIntensity={0} clearcoat={coat} clearcoatRoughness={0} metalness={0.1} />
          </a.mesh>
          <Environment preset="warehouse" />
          <ContactShadows
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, -1.6, 0]}
            opacity={mode ? 0.8 : 0.4}
            width={15}
            height={15}
            blur={2.5}
            far={1.6}
            />
        </Suspense>
      </PresentationControls>
    </>
  )
}
