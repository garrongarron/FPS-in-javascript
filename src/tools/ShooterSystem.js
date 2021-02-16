import machine from '../basic/Machine.js'
import camera from '../basic/Camera.js'
import scene from '../Scene.js'
import keyListener from '../basic/KeyListener.js'

let shooting = false
let average = 8
let timeout = 0
document.addEventListener('mousedown', () => { shooting = true })
document.addEventListener('mouseup', () => { shooting = false })

const raycaster = new THREE.Raycaster();

let shoot = () => {
	raycaster.setFromCamera(new THREE.Vector2(), camera);
	const intersects = raycaster.intersectObjects(scene.children, true)[0];
	if (intersects) {
		const box = new THREE.Mesh(
			new THREE.SphereGeometry(.05, 32, 32),
			new THREE.MeshStandardMaterial({
				color: 0x660000,
			}));
		box.position.set(
			intersects.point.x,
			intersects.point.y,
			intersects.point.z,
		);
		intersects.object.attach(box)
	}
}

machine.addCallback(() => {
	if (shooting) {
		let now = new Date().getTime()
		if (keyListener.isPressed(69) && timeout < now) {
			shooting = true
			timeout = now + 1000 / average
			shoot()
		}
	}
})