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
	value, sierpinski, rotateX, blend, twistZ, rotateY, expand, stretch, rotate, rotateZ, repeat, wrapX, twistY, torus, union, mirror, Expression, Shape, spotlightMaterial
} from "traymarch";

createViewer(document.body, scene({
	camera: mouseCamera({
		fieldOfView: value(60 / 180 * Math.PI),
		distance: value(20),
		aperture: value(0.2)
	}),
	models: [
		model(
			scale(value(1000), unitSphere()),
			spotlightMaterial({
				color: value(0.5),
				direction: value(1, 1, 0),
				spread: value(0.01),
				ambient: value(0.5, 0.6, 0.9)
			})),
		model(
			plane(value(0, 1, 0), value(3)),
			material({
				color: value(0.9)
			})),
		model(
			repeat(value(10, 0, 10),
				mirror(value(1, 1, 0),
					mirror(value(1, 0, 1),
						mirror(value(0, 1, 1),
							rotate(
								value(1, 0, -1),
								value(Math.atan(Math.sqrt(2))),
								blend(
									value(2.2),
									translate(value(0, 4, 0),
										unitSphere()),
									translate(value(0, 1, 0),
										unitBox()))))))),
			material({
				smoothness: value(0.9),
				color: value(0.8, 0.8, 0.7)
			}))
	]
}), {
		width: 256,
		height: 256,
		epsilon: 1e-4,
		steps: 100,
		bounces: 8,
		iterations: 2
	});

