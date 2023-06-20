<template>
    <div id="container" class="container"></div>
</template>

<script>

import * as THREE from 'three';

export default {

    
}
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGL1Renderer({
    canvas: document.querySelector('#CEO3d'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight);
camera.getWorldPosition.setZ(30);

renderer.render(scene, camera);



</script>