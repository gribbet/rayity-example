import {
	camera,
	createViewer,
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
	value,
} from 'rayity/lib';

createViewer(
	document.body,
	scene({
		air: material({
			scatter: value(50000)
		}),
		camera: orbit({
			fieldOfView: value(60 / 180 * Math.PI),
			distance: value(1.1),
			aperture: value(0.1),
			target: value(0),
			offset: value(-0.35, -0.2),
			focalFactor: value(0.75)
		}),
		models: [
			model({
				shape: scale(value(1000),
					sphere()),
				material: spotlight({
					color: value(0),
					spread: value(1),
					ambient: value(1)
				})
			}),
			/*model({
				shape: translate(value(-0.15, 0.15, 0), 
					scale(value(0.25), 
					sphere())),
				material: material({
					color: value(0),
					emissivity: value(30)
				})
			}),*/
			model({
				shape: plane(value(0, 1, 0), value(0.28)),
				material: material({
					color: value(0.5, 0.5, 0.8),
				})
			}),
			model({
				shape: rotateZ(value(-Math.PI / 4),
					skull()),
				material: material({
					color: value(0.899, 0.898, 0.897),
					//smoothness: value(0.9)
				})
			})
		]
	}), options({
		width: 256,
		height: 256,
		epsilon: 1e-5,
		steps: 80,
		bounces: 8,
		iterations: 1,
		cheapNormals: false,
		memory: 1.0,
		stepFactor: 0.6
	}));

