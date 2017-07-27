import {
    camera,
    createViewer,
    difference,
    material,
    model,
    orbit,
    plane,
    repeat,
    scale,
    scene,
    spotlight,
    unitSphere,
	value,
	options,
} from 'traymarch';


createViewer(
	document.body,
	scene({
		air: material({
			scatter: value(1000),
		}),
		camera: orbit({
			fieldOfView: value(60 / 180 * Math.PI),
			distance: value(50),
			aperture: value(0.05),
			target: value(0),
			offset: value(0.25, 0.1)
		}),
		models: [
			model({
				shape: scale(value(1000),
					unitSphere()),
				material: spotlight({
					color: value(0.3),
					direction: value(1, 1, 1),
					spread: value(0.01),
					ambient: value(0.5, 0.6, 0.9)
				})
			}),
			model({
				shape: plane(value(0, 1, 0), value(0.5)),
				material: material({
					color: value(0.1),
					smoothness: value(0.8)
				})
			}),
			model({
				shape: repeat(value(4, 0, 1),
					difference(
						unitSphere(),
						scale(value(0.9),
							unitSphere()))),
				material: material({
					smoothness: value(0),
				})
			})
		]
	}), options({
		width: 512,
		height: 512,
		epsilon: 1e-5,
		steps: 200,
		bounces: 10,
		iterations: 1,
		cheapNormals: false
	}));

