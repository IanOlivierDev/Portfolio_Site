import * as THREE from "./node_modules/three/build/three.module.js";
import one from '/Logo/Logo_seperated/one-cropped.png';
import planeTexture from '/Images/black_Stars.jpg';

//Scene and Camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,500/500, 0.1, 1000);
camera.position.set(0,0,3);
camera.aspect = 200/200;

//Renderer
const canvas = document.querySelector('#THREEJSCanvas');
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true
});


renderer.setSize(250, 250);

function setCanvasSize() {
    if (window.matchMedia("(min-width: 1500px)").matches) {
        // canvas.style.width = '700px';
        // canvas.style.height = '700px';
        renderer.setSize(700, 700);
    }else if(window.matchMedia("(min-width: 600px)").matches && window.matchMedia("(max-height: 600px)").matches){
        // canvas.style.width = '250px';
        // canvas.style.height = '250px';
        renderer.setSize(250, 250);
    }else if(window.matchMedia("(min-width: 600px)").matches){
        // canvas.style.width = '400px';
        // canvas.style.height = '400px';
        renderer.setSize(400, 400);
    }else{
        // canvas.style.width = '250px';
        // canvas.style.height = '250px';
        renderer.setSize(250, 250);
    }
}


//BOX
var cubeTextureLoader = new THREE.TextureLoader();
var cubeTexture = cubeTextureLoader.load(one);

const geometry = new THREE.BoxGeometry(1.2, 1.2, 1.2); 
const material = [
    new THREE.MeshStandardMaterial({ map: cubeTexture}), // Right side
    new THREE.MeshStandardMaterial({ map: cubeTexture}), // Left side
    new THREE.MeshStandardMaterial({ map: cubeTexture}), // Top side
    new THREE.MeshStandardMaterial({ map: cubeTexture}), // Bottom side
    new THREE.MeshStandardMaterial({ map: cubeTexture}), // Front side
    new THREE.MeshStandardMaterial({ map: cubeTexture})  // Back side
    // new THREE.MeshLambertMaterial( { color: '#FFFFFF' } ); 
    ]; 

const cubeMesh = new THREE.Mesh(geometry, material); 
scene.add(cubeMesh);

//Plane
const texture = new THREE.TextureLoader().load(planeTexture);
var imgGeometry = new THREE.PlaneGeometry(50, 50);
var imgMaterial = new THREE.MeshLambertMaterial({ map: texture });
var plane = new THREE.Mesh(imgGeometry, imgMaterial);
plane.position.z = -10;
scene.add(plane);


//Light
const light = new THREE.PointLight( 0xffffff, 150);
light.position.set( 0, 3, 8);
scene.add(light);


function animate(){
    requestAnimationFrame(animate);

    cubeMesh.rotation.x += 0.02;
    cubeMesh.rotation.y += 0.02;

    //Resize canvas on load
    window.addEventListener('load', setCanvasSize);
    //Resize canvas resize
    window.addEventListener('resize', setCanvasSize);
    
    renderer.render(scene, camera);
}

animate();