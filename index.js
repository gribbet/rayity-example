import {createViewer, entity, material, plane, scale, scene, translate, unitBox, unitSphere, value} from "traymarch";

createViewer(document.body, scene([
	entity(
		unitSphere(),
		material({
			color: value(0.8, 0.8, 1)
		})),
	entity(
		translate(value(0, 0, 4),
			scale(value(5), unitBox())),
		material({
			color: value(0.8, 0.8, 0.8)
		})),
	entity(
		plane(value(0, 0, -1), value(5)),
		material({
			emissivity: value(1, 1, 1)
		}))
]));


