import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';

function running3DModel(){
    const scene = new THREE.Scene();
    scene.background = null;
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    const container = document.getElementById("3d-container");
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(15, 49, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.1;
    controls.zoomSpeed = 1.2;

    function resizeRenderer() {
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        
        // Set the renderer and camera dimensions to match the container's dimensions
        renderer.setSize(containerWidth, containerHeight);
        camera.aspect = containerWidth / containerHeight;
        camera.updateProjectionMatrix();
    }

    container.appendChild(renderer.domElement);

    window.addEventListener('resize', resizeRenderer);

    resizeRenderer();

    container.appendChild(renderer.domElement);

    let objModel;
    const objLoader = new OBJLoader();
    const mtlLoader = new MTLLoader();
    mtlLoader.load('models/tdb.mtl', (mtl) => {
        mtl.preload();
        objLoader.setMaterials(mtl);
        objLoader.load('models/tdb.obj', (object) => {
        object.scale.x = object.scale.y = object.scale.z = 0.45;
        object.rotation.x += 0.6
        object.rotation.y += 0.2
        object.rotation.z -= 0.1

        scene.add(object)
        objModel = object;
        });
    });

    const ambientLight = new THREE.AmbientLight( 0xffffff, 0.4 );
    scene.add( ambientLight );

    const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
    directionalLight.position.set( 100, 100, 0 );
    scene.add( directionalLight );

    camera.position.set(15,49,100);

    function animate() {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );
    }

    animate();
}

running3DModel()
document.addEventListener('astro:after-swap', running3DModel);