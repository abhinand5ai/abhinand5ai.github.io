import './Scene.css';
import React, { Component, useEffect, Ref } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const animation3J = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    const geometry = new THREE.TorusGeometry(1, 0.3, 16, 100);
    var material = new THREE.MeshBasicMaterial({ color: 0xFF6347 });
    var torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    const pointLight = new THREE.PointLight(0xFFFFFF);
    const pointHelper = new THREE.PointLightHelper(pointLight);
    scene.add(pointHelper, pointLight);
    pointLight.position.set(1, 1, 1);
    camera.position.z = 5;

    const controls = new OrbitControls(camera, renderer.domElement);

    var animate = function () {
        requestAnimationFrame(animate);
        torus.rotation.x += 0.01;
        torus.rotation.y += 0.01;
        controls.update();
        renderer.render(scene, camera);
    };
    animate();
}
const Scene = (props) => {
    const sceneRef = React.useRef();
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        camera.position.setZ(30);
        camera.position.setX(-3);
        renderer.render(scene, camera);

        sceneRef.current.appendChild(renderer.domElement);

        const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
        const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
        const torus = new THREE.Mesh(geometry, material);
        scene.add(torus);

        const pointLight = new THREE.PointLight(0xFFFFFF);
        pointLight.position.set(5,5,5);
        const ambientLight = new THREE.AmbientLight(0xFFFFFF);
        const pointHelper = new THREE.PointLightHelper(pointLight);
        scene.add(pointHelper, pointLight, ambientLight);
        pointLight.position.set(1, 1, 1);

        const controls = new OrbitControls(camera, renderer.domElement);

        var animate = function () {
            requestAnimationFrame(animate);
            torus.rotation.x += 0.01;
            torus.rotation.y += 0.01;
            controls.update();
            renderer.render(scene, camera);
        };
        animate();
    }, []);
    return (
        <div className="scene">
            <div className="scene-content" ref={sceneRef}>
                {props.children}
            </div>
        </div>
    );
}

export default Scene;