import {Mesh, MeshLambertMaterial, SphereGeometry} from 'three';
import SceneSet from 'scene';

class Sphere extends SceneSet {
	constructor(color, x, y, z) {
		super();

		this.geometry = new SphereGeometry(1, 5, 5);
		this.material = new MeshLambertMaterial({
			color: color
		});
		this.ball = new Mesh(this.geometry, this.material);
		this.ball.position.set(x, y, z);
		this.scene.add(this.ball);

		this.animate();
	}

	animate() {
		super.animate();
		this.ball.rotation.x += 0.01;
		this.ball.rotation.y += 0.01;
	}
}

export default Sphere;
