import {entity, createScene, scale, value, unitSphere, material, translate, mandelbulb, createViewer} from "typescript-raymarch";

const scene = createScene([
		entity(
			scale(value(1000), unitSphere()),
			material({
				color: value(0, 0, 0),
				emissivity: value(1, 1, 1)
			})),
		entity(
			translate(value(-1, 0, 0), mandelbulb()),
			material({
				color: value(0.5, 0.5, 0.5)
			}))
	])
;

createViewer(document.body, scene);


