import {
	createViewer,
	difference,
	intersection,
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
	value
} from "traymarch";

createViewer(document.body, scene({
	camera: mouseCamera({
		fieldOfView: value(60 / 180 * Math.PI),
		distance: value(10),
		aperture: value(0.1)
	}),
	entities: [
		model(
			plane(value(0, 1, 0), value(1)),
			material({
				color: `vec3(0.7, 0.7, 0.7) * mod(floor(0.5 * sin(p.x * 2.0) + 1.0) + floor(0.5 * sin(p.z * 2.0) + 1.0), 2.0) + vec3(0.2, 0.2, 0.2)`
			})),
		model(
			plane(value(0, -1, 0), value(10)),
			material({
				emissivity: value(5, 5, 5)
			})),
		model(
			translate(value(2, 0, -2),
				difference(
					unitBox(),
					translate(value(0, 0.2, 0),
						scale(value(0.9), unitBox())))),
			material({
				transmittance: value(0.95),
				smoothness: value(0.99),
				color: value(0.7, 0.9, 0.9),
				refraction: value(2)
			})),
		model(
			translate(value(-2, 0, 2),
				intersection(
					difference(
						unitCylinder(),
						intersection(
							scale(value(0.9),
								unitCylinder()),
							plane(value(0, -1, 0), value(-0.8)))),
					unitBox())),
			material({
				transmittance: value(0.98),
				smoothness: value(0.9995),
				color: value(0.9, 0.5, 0.5),
				refraction: value(1.4)
			})),
		model(
			translate(value(2, 0, 2),
				unitBox()),
			material({
				transmittance: value(0.9),
				scatter: value(0.1),
				color: value(0.5, 1, 0.5)
			})),
		model(
			translate(value(-2, 0, -2),
				unitSphere()),
			material({
				color: value(1, 1, 0.5),
				smoothness: value(0.99)
			}))
	]
}), {
	epsilon: 1e-5,
	steps: 150,
	bounces: 20,
	iterations: 5
});


