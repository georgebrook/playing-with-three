import {BoxGeometry, Mesh, MeshLambertMaterial} from 'three';
import SceneSet from 'scene';
import * as Tween from 'gsap';

class Box extends SceneSet {
	constructor(color) {
		super();

		this.cubes = [];

		this.geometry = new BoxGeometry(1, 1, 1);
		this.material = new MeshLambertMaterial({
			color: color
		});

		for (let i = 0; i < 10; i++) {
			this.cubes.push(this.addCube());
		}
		this.scene.add(this.cubes);

		this.animate();

		this.tl = new Tween.TimelineMax().delay(1);
		this.tl
			.to(this.cube.scale, 3, {x: 2, ease: 'easeOut'})
			.to(this.cube.scale, 3, {y: 2, ease: 'easeOut'})
			.to(this.cube.scale, 3, {z: 2, ease: 'easeOut'});
	}

	addCube() {
		this.cube = new Mesh(this.geometry, this.material);
		this.cube.position.set(
			Math.random() * 0.5,
			Math.random() * 0.5,
			0
		);
		this.cube.castShadow = true;
	}

	animate() {
		super.animate();
		this.cube.rotation.x += 0.01;
		this.cube.rotation.y += 0.01;
	}

}

export default Box;
