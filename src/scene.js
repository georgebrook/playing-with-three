import {AmbientLight, PerspectiveCamera, Scene, SpotLight, WebGLRenderer} from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

class SceneSet {
	constructor() {
		this.fov = 45;
		this.cameraPosition = 10;

		this.scene = new Scene();
		this.camera = new PerspectiveCamera(this.fov, window.innerWidth / window.innerHeight, 1, 1000);
		this.renderer = new WebGLRenderer();
		this.renderer.setClearColor('#3e3e3e');
		this.renderer.setSize(window.innerWidth, window.innerHeight);

		document.body.appendChild(this.renderer.domElement);
		window.addEventListener( 'resize', this.onWindowResize.bind(this), false );

		this.controls = new OrbitControls(this.camera, this.renderer.domElement);
		this.ambientLight = new AmbientLight(0x0c0c0c);
		this.scene.add(this.ambientLight);

		this.spotLight = new SpotLight(0xffffff);
		this.spotLight.position.set(10, 10, 10);
		this.scene.add(this.spotLight);

		this.controls.update();
		this.camera.position.z = this.cameraPosition;
	}

	onWindowResize() {
		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();

		this.renderer.setSize(window.innerWidth, window.innerHeight);
	}

	animate() {
		requestAnimationFrame(this.animate.bind(this));
		this.renderer.render(this.scene, this.camera);
	}
}

export default SceneSet;
