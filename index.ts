import {
	createViewer,
	difference,
	intersection, mandelbulb,
	material,
	model,
	orbit,
	plane,
	scale,
	scene,
	translate,
	unitBox,
	unitCylinder,
	unitSphere,
	value, sierpinski, rotateX, blend, offset, twistZ, rotateY, expand, stretch, rotate, rotateZ, repeat, wrapX, twistY, torus, union, mirror, Expression, Shape, spotlight
} from "traymarch";

createViewer(document.body, scene({
	air: material({
		scatter: value(1000)
	}),
	camera: orbit({
		fieldOfView: value(90 / 180 * Math.PI),
		distance: value(10),
		aperture: value(0.05),
		offset: `vec2(time * 0.05, 0)`
	}),
	models: [
		model({
			shape: scale(value(1000),
				unitSphere()),
			material: spotlight({
				color: value(0.1),
				direction: value(0, 1, -1),
				spread: value(0.01),
				ambient: value(0.5, 0.6, 0.9)
			})
		}),
		model({
			shape: plane(value(0, 1, 0), value(3.2)),
			material: material({
				color: value(0.8)
			})
		}),
		model({
			shape: mirror(value(1, 1, 0),
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
									unitBox())))))),
			material: material({
				color: value(0.9, 0.5, 0.5),
				smoothness: value(0.99)
			})
		})
	]
}), {
		width: 256,
		height: 256,
		epsilon: 1e-3,
		steps: 100,
		bounces: 30,
		iterations: 4,
		memory: 0.95
	});

