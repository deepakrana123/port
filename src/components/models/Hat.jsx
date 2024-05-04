"use client";
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export function HatModel(props) {
  const { nodes, materials } = useGLTF('/models/hat-transformed.glb')
  const modelRef=useRef()
  useFrame(() => {
    modelRef.current.rotation.y += 0.007;
  });
  return (
    <group {...props} dispose={null}
      scale={[1.6, 1.6, 1.7]}
      rotation={[0.4,-1,0]}
      position={[0,0,-1.0]}
      ref={modelRef}
      >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.initialShadingGroup}
        position={[0, -3.867, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/hat-transformed.glb')
