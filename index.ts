import {
	blend,
	createViewer,
	cylinder,
	difference,
	expand,
	intersection,
	material,
	model,
	orbit,
	plane,
	repeat,
	rotateZ,
	scale,
	scene,
	spotlight,
	stretch,
	torus,
	translate,
	union,
	unitCube,
	unitSphere,
	value,
} from 'traymarch';

createViewer(document.body, scene({
	air: material({
		scatter: value(1000)
	}),
	camera: orbit({
		fieldOfView: value(60 / 180 * Math.PI),
		distance: value(3),
		aperture: value(0.05),
		target: value(0, 0.6, 0),
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
			shape: plane(value(0, 1, 0), value(0.002)),
			material: material({
				color: value(0.3, 0.35, 0.35),
				smoothness: value(0),
			})
		}),
		model({
			shape: plane(value(0, 1, 0), value(0.001)),
			material: material({
				transmittance: value(0.9),
				smoothness: value(0.95),
				refraction: value(1.1)
			})
		}),
		model({
			shape: plane(value(0, 0, 1), value(1.58)),
			material: material({
				color: value(0.2)
			})
		}),
		model({
			shape: translate(value(0, 0.5, -2),
				union(
					repeat(value(2, 2, 0),
						stretch(value(1.95, 0.95, 0.9),
							unitCube())),
					translate(value(1, 1, 0),
						repeat(value(2, 2, 0),
							stretch(value(1.95, 0.95, 0.9),
								unitCube()))))),
			material: material({
				smoothness: value(0.5),
				color: value(0.8)
			})
		}),
		model({
			shape: translate(value(0.8, 0.5, 0.25),
				difference(
					blend(value(0.1),
						intersection(
							cylinder(),
							unitCube()),
						translate(value(0, 0, 0.5),
							rotateZ(value(Math.PI / 2),
								scale(value(0.5),
									torus())))),
					intersection(
						scale(value(0.9),
							cylinder()),
						plane(value(0, -1, 0), value(-0.4))))),
			material: material({
				color: value(1, 1, 0.99),
				smoothness: value(1),
				transmittance: value(0.9),
				refraction: value(1.5),
				scatter: value(0.01)
			})
		}),
		model({
			shape: translate(value(-0.8, 0.5, 0),
				difference(
					intersection(
						blend(value(0.6),
							translate(value(0, 0.5, 0),
								scale(value(0.9),
									unitSphere())),
							translate(value(0, -0.25, 0),
								scale(value(0.5),
									unitCube()))),
						plane(value(0, 1, 0), value(-0.5))),
					intersection(
						expand(value(-0.04),
							blend(value(0.6),
								translate(value(0, 0.5, 0),
									scale(value(0.9),
										unitSphere())),
								translate(value(0, -0.25, 0),
									scale(value(0.5),
										unitCube())))),
						plane(value(0, -1, 0), value(-0.4))))),
			material: material({
				transmittance: value(0.7),
				smoothness: value(1),
				refraction: value(1.9),
				color: value(0.97, 0.97, 0.99),
				scatter: value(1)
			})
		})
	]
}), {
		width: 512,
		height: 512,
		epsilon: 1e-5,
		steps: 100,
		bounces: 40,
		iterations: 2,
		memory: 0.99999
	});

