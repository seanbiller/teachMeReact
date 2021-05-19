import React, { Component } from "react";
import * as THREE from "three";
 
const style = {
  height: 500
};

class LandingPageDisplay extends Component {
  constructor(props) {
    super(props);
    this.el = React.createRef();
  }

  componentDidMount() {
    this.sceneSetup();
    this.addCustomSceneObjects();
    this.startAnimationLoop();
    window.addEventListener("resize", this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
    window.cancelAnimationFrame(this.requestID);
  }
  
  sceneSetup = () => {
    // get div's dimensions and use them for scene sizing
    const ref = this.el.current;
    const width = ref.clientWidth;
    const height = ref.clientHeight;
  
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(50, width/height, 0.1, 1000);
    
    // set some distance from a cube that is located at z = 0
    this.camera.position.z = 6;
  
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height);
    ref.appendChild(this.renderer.domElement); // mount using React ref
  };
  
  addCustomSceneObjects = () => {
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshPhongMaterial({
        color: 0x156289,
        emissive: 0x072534,
        side: THREE.DoubleSide,
        flatShading: true
    });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);
  
    const lights = [];
    lights[0] = new THREE.PointLight(0xffffff, 1, 0);
    lights[1] = new THREE.PointLight(0xffffff, 1, 0);
    lights[2] = new THREE.PointLight(0xffffff, 1, 0);
  
    lights[0].position.set(0, 200, 0);
    lights[1].position.set(100, 200, 100);
    lights[2].position.set(-100, -200, -100);
  
    this.scene.add(lights[0]);
    this.scene.add(lights[1]);
    this.scene.add(lights[2]);
  };
  
  startAnimationLoop = () => {
    this.cube.rotation.x += 0.003;
    this.cube.rotation.y += 0.003;
  
    this.renderer.render(this.scene, this.camera);
    this.requestID = window.requestAnimationFrame(this.startAnimationLoop); // look into why this parameter is acceptable, vs the previously passed 'animate'
  };

  handleWindowResize = () => {
    const width = this.el.current.clientWidth;
    const height = this.el.current.clientHeight;

    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;

    // Note that after making changes to most of camera properties you have to call
    // .updateProjectionMatrix for the changes to take effect.
    this.camera.updateProjectionMatrix();
  };

  render() {
    return (
      <div style={style} ref={this.el} />
    )
  }
}

export default LandingPageDisplay;