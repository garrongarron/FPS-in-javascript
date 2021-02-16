import { directionalLight, ambientLight } from './basic/Lights.js'
import plane1 from './objects/Plane.js'
import box from './objects/Box.js'
import box2 from './objects/Box2.js'
import setTarget from './tools/CameraController.js'

const scene = new THREE.Scene();

//lights
scene.add(directionalLight);
scene.add(ambientLight);

//ground
scene.add(plane1);

//character
scene.add(box2);
scene.add(box);
setTarget(box)

export default scene