import {
	createViewer,
	difference,
	intersection, mandelbulb,
	material,
	model,
	mouseCamera,
	plane,
	scale,
	scene,
	translate,
	unitBox,
	unitCylinder,
	unitSphere,
	value, sierpinski, rotateX, twistZ, rotateY, rotateZ, repeat, wrapX, twistY, Shape, torus, union
} from "traymarch";

createViewer(document.body, scene({
	camera: mouseCamera({
		fieldOfView: value(60 / 180 * Math.PI),
		distance: value(20),
		aperture: value(0.1)
	}),
	models: [
		model(
			scale(value(1000),
				unitSphere()),
			material({
				emissivity: value(2, 2, 2)
			})),
		model(
			scale(value(2),
				unitSphere()),
			material({
				emissivity: value(200, 200, 200)
			})),
		model(
			rotateY(value(0.7),
				rotateZ(value(0.4),
					rotateX(value(0.2),
						repeat(value(2, 2, 2),
							intersection(
								union(
									union(
										translate(value(1, 0, 1),
											torus()),
										translate(value(-1, 1, 0),
											rotateX(value(Math.PI / 2),
												torus()))),
									translate(value(0, -1, -1),
										rotateZ(value(Math.PI / 2),
											torus()))),
								unitBox()))))),
			material({
				transmittance: value(0.99),
				scatter: value(0.02),
				refraction: value(2),
				smoothness: value(0.9),
				color: value(0.5, 0.8, 0.9)
			}))
	]
}), {
		width: 128,
		height: 128,
		epsilon: 1e-4,
		steps: 150,
		bounces: 40,
		iterations: 4
	});

