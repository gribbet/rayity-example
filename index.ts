import {
	createViewer,
	model,
	material,
	mouseCamera,
	scale,
	scene,
	translate,
	unitBox,
	unitSphere,
	value
} from "traymarch";

createViewer(document.body, scene({
	camera: mouseCamera({
		fieldOfView: value(100 / 180 * Math.PI),
		distance: value(5),
		aperture: value(0.01)
	}),
	entities: [
		model(
			translate(value(0, 20, 0),
				scale(value(2), unitBox())),
			material({
				emissivity: value(8, 8, 8)
			})),
		model(
			translate(value(0, 10, 0),
				scale(value(10), unitBox())),
			material({
				color: value(0.8, 0.8, 0.8)
			})),
		model(
			translate(value(0, 2, -4),
				unitSphere()),
			material({
				color: value(0.7, 0.7, 0.9)
			}))
	]
}), {
	epsilon: 1e-4,
	steps: 100,
	bounces: 10
});


