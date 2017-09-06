import {
	camera,
	viewer,
	expression,
	material,
	model,
	options,
	orbit,
	plane,
	repeat,
	scale,
	scene,
	skull,
	smoothBox,
	sphere,
	spotlight,
	translate, rotateZ,
	value, cube
} from 'rayity/lib';

viewer(
	document.body,
	scene({
		air: material({
			scatter: value(50000)
		}),
		camera: orbit({
			fieldOfView: value(60 / 180 * Math.PI),
			radius: value(1.1),
			aperture: value(0.02),
			target: value(0),
			offset: value(-0.35, -0.2),
			focalFactor: value(0.75)
		}),
		models: [
			model({
				shape: scale(value(0.2), sphere()),
				material: material({
					emissivity: value(2)
				})
			}),
			model({
				shape: rotateZ(value(-Math.PI / 4),
					skull()),
				material: material({
					color: value(0.899, 0.898, 0.897),
					transmittance: value(0.99),
					smoothness: value(0.5),
					refraction: value(1.8),
				})
			})
		]
	}), options({
		width: 512,
		height: 512,
		epsilon: 1e-5,
		steps: 80,
		bounces: 20,
		iterations: 1,
		cheapNormals: false,
		memory: 1.0,
		stepFactor: 0.6,
		gamma: 3
	}));

