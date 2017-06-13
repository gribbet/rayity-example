import {createScene, createViewer, entity, mandelbulb, material, scale, translate, unitSphere, value} from "traymarch";

const scene = createScene([
		entity(
			scale(value(1000), unitSphere()),
			material({
				color: value(0, 0, 0),
				emissivity: value(1, 1, 1)
			})),
		entity(
			translate(value(-10, 0, 0), mandelbulb()),
			material({
				color: value(0.5, 0.5, 0.5)
			}))
	])
;

createViewer(document.body, scene);


