import {createScene, createViewer, entity, material, scale, translate, unitBox, unitSphere, value, plane} from "traymarch";

const scene = createScene([
	entity(
		unitSphere(),
		material({})),
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
]);

createViewer(document.body, scene);


