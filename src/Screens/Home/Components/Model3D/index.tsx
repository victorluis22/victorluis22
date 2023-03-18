import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Container, Canvas } from "./style";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

import SceneInit from "../../../../Services/sceneInit";

interface ModelProps {
  width?: number | null | undefined,
  height?: number | null | undefined,
  model: string,
  allowMoviment?: boolean | null | undefined,
  showStat?: boolean | null | undefined
}

const Model3D: React.FC<ModelProps> = ({width, height, model, allowMoviment, showStat}) => {

  useEffect(() => {
    const main = new SceneInit('mainCanvas', width, height, showStat, allowMoviment);
    main.initialize()
    main.animate()
    // const axesHelper = new THREE.AxesHelper( 10 );
    // main.scene.add( axesHelper );

    const loader = new GLTFLoader();
    let loadedModel: GLTF | false;
    loader.load( model, function ( gltf ) {
      loadedModel = gltf
      gltf.scene.rotation.y = 5
      gltf.scene.scale.set(5, 5, 5)
      main.scene.add( gltf.scene );
    
    }, undefined, function ( error ) {
    
      console.error( error );
    
    } );

    const animate = () => {
      if (loadedModel) {
        loadedModel.scene.rotation.x += 0.01;
        loadedModel.scene.rotation.y += 0.01;
        loadedModel.scene.rotation.z += 0.01;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, [])

  return (
    <Container>
      <Canvas id="mainCanvas" />
    </Container>
  )
}

export default Model3D;