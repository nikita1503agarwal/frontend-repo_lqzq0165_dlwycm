import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Html } from '@react-three/drei'
import { EffectComposer, Bloom, ChromaticAberration, Noise, Vignette } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import { useRef, useMemo, useState } from 'react'
import * as THREE from 'three'

function Spores({ count = 2000, color = new THREE.Color('#e50914') }) {
  const points = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 20
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return arr
  }, [count])

  useFrame((state, delta) => {
    if (!points.current) return
    const pos = points.current.geometry.attributes.position
    for (let i = 0; i < pos.count; i++) {
      let y = pos.getY(i)
      y += delta * (0.4 + Math.random() * 0.2)
      if (y > 10) y = -10
      pos.setY(i, y)
    }
    pos.needsUpdate = true
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color={color} sizeAttenuation transparent opacity={0.85} />
    </points>
  )
}

function FloatingCubes() {
  const group = useRef()
  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.y += 0.003
  })

  return (
    <group ref={group}>
      {[...Array(6)].map((_, i) => (
        <Float key={i} speed={0.6} rotationIntensity={0.2} floatIntensity={0.6}>
          <mesh position={[Math.sin(i) * 3, Math.cos(i) * 1.2, -1 - i * 0.2]}>
            <boxGeometry args={[0.6, 0.6, 0.6]} />
            <meshStandardMaterial color="#5b2bff" emissive="#e50914" emissiveIntensity={0.8} metalness={0.3} roughness={0.4} />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

function SceneContent({ upsideDown }) {
  const light = useRef()
  const targetColor = useMemo(() => new THREE.Color(upsideDown ? '#5b2bff' : '#e50914'), [upsideDown])

  useFrame((state) => {
    if (light.current) {
      light.current.color.lerp(targetColor, 0.02)
      light.current.intensity = THREE.MathUtils.lerp(light.current.intensity, upsideDown ? 1.2 : 2.2, 0.02)
    }
    const { mouse } = state
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, mouse.x * 0.6, 0.02)
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, -mouse.y * 0.2, 0.02)
    state.camera.lookAt(0, 0, 0)
  })

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight ref={light} position={[2, 2, 2]} intensity={2.2} color={upsideDown ? '#5b2bff' : '#e50914'} />
      <Spores />
      <FloatingCubes />
      <EffectComposer>
        <Bloom intensity={1.2} luminanceThreshold={0.1} luminanceSmoothing={0.4} mipmapBlur />
        <ChromaticAberration blendFunction={BlendFunction.NORMAL} offset={[upsideDown ? 0.002 : 0.001, 0]}>
        </ChromaticAberration>
        <Noise premultiply blendFunction={BlendFunction.ADD} opacity={0.08} />
        <Vignette eskil offset={0.2} darkness={0.8} />
      </EffectComposer>
    </>
  )
}

export default function UpsideDownScene({ upsideDown }) {
  return (
    <div className="absolute inset-0 -z-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <color attach="background" args={["#050507"]} />
        <SceneContent upsideDown={upsideDown} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  )
}
