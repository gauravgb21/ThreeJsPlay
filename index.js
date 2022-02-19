import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { ARButton } from 'three/examples/jsm/webxr/ARButton.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.01, 40);
const renderer = new THREE.WebGLRenderer({
	alpha: true
});

console.log(ARButton);

renderer.xr.enabled = true;
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls( camera, renderer.domElement );

const textureLoader = new THREE.TextureLoader();
const normalTexture = textureLoader.load('/assets/normalmap.png');

const geometry = new THREE.BoxGeometry(0.3,0.3,0.3);
const material = new  THREE.MeshBasicMaterial({color: 0xe06666});
const cube = new THREE.Mesh(geometry,material);
cube.position.set(0,0,-1);
scene.add(cube);

const pointLight = new THREE.PointLight( 0xFFFFFF, 0.2 );
pointLight.position.x = 0;
pointLight.position.y = 1;
pointLight.position.z = 0;
scene.add(pointLight);

const pointLight2 = new THREE.PointLight( 0xff0000, 0.2 );
pointLight.position.x = 1;
pointLight.position.y = 1;
pointLight.position.z = 1;
scene.add(pointLight2);


const button = ARButton.createButton(renderer);
document.body.appendChild(button);

function animate() {
	requestAnimationFrame( animate );
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();