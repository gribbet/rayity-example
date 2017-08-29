import { random, spotlight } from 'rayity/lib';
import {
	camera,
	createViewer,
	dodecahedron,
	material,
	model,
	options,
	orbit,
	plane,
	scale,
	scene, expression,
	sphere,
	value, cube, wrapX, translate, cylinder, difference, stretch, twistY, shape, repeat, smoothBox, blend2, spheroid, Shape, union, blend, Expression
} from 'rayity';


function skull(): Shape {
	let skull =
		translate(value(0, 0.05, 0),
			spheroid((p: Expression) =>
				expression(`0.35 * 0.95 * cos(cos((${p}.y + 0.05) * 11.0) * ${p}.z * 2.3)`)));

	const globeFront = translate(
		value(0.1, 0.23, 0),
		scale(value(2.0 * 0.35 * .82), sphere()));
	skull = blend(value(0.09), skull, globeFront);

	const globeBack = translate(
		value(-0.1, 0.24, 0),
		scale(value(2.0 * 0.35 * .82), sphere()));
	skull = blend(value(0.09), skull, globeBack);

	const eyeBrow = spheroid((p: Expression) =>
		expression(`0.35 * 0.36 * cos((${p}.y + 0.07) * 7.0)`));
	const eyeBrows = union(
		translate(value(.24, 0.07, 0.1), eyeBrow),
		translate(value(.24, 0.07, -0.1), eyeBrow));
	skull = blend(value(0.02), skull, eyeBrows);

	const lateralHole = spheroid((p: Expression) =>
		expression(`0.35 * 0.28 * cos((${p}.x + 0.15) * 0.59)`))
	const lateralHoles = union(
		translate(value(0.15, -0.01, 0.31), lateralHole),
		translate(value(0.15, -0.01, -0.31), lateralHole));
	skull = blend2(value(0.02), skull, lateralHoles);

	const cheekBones = union(
		translate(value(.22, -.13, .18),
			scale(value(2.0 * 0.35 * 0.11), sphere())),
		translate(value(.22, -.13, -.18),
			scale(value(2.0 * 0.35 * 0.11), sphere())));
	skull = blend(value(0.02), skull, cheekBones);

	const inside = blend(value(0.02),
		blend(value(0.02),
			blend(value(0.02),
				translate(value(0, 0.05, 0),
					spheroid((p: Expression) =>
						expression(`0.35 * 0.90 * cos(cos((${p}.y + 0.05) * 11.0) * ${p}.z * 2.3)`))),
				translate(value(.10, 0.23, 0.00),
					scale(value(2.0 * 0.35 * 0.73),
						sphere()))),
			translate(value(-.1, 0.24, 0.00),
				scale(value(2.0 * 0.35 * 0.73),
					sphere()))),
		translate(value(.0, 0.24, 0.00),
			scale(value(2.0 * 0.35 * 0.73),
				sphere())));
	skull = blend2(value(0.02), skull, inside);

	const eyeBall = spheroid((p: Expression) =>
		expression(`0.35 * 0.28 * cos((${p}.y - 0.04) * 10.0)`));
	const eyeBalls = union(
		translate(value(0.32, -0.04, 0.140), eyeBall),
		translate(value(0.32, -0.04, -0.140), eyeBall));
	skull = blend2(value(0.03), skull, eyeBalls);

	let nose = translate(
		value(0.22, -0.05, 0),
		spheroid((p: Expression) => expression(`0.35 * 0.35 * cos(sin((${p}.y - 0.05) * 22.0) * ${p}.z * 24.0)`)));
	nose = blend2(value(0.02),
		nose,
		translate(value(.32, -0.04, .140),
			spheroid((p: Expression) => expression(`0.35 * 0.35 * cos((${p}.y - 0.04) * 10.0)`))));
	nose = blend2(value(0.02),
		nose,
		translate(value(.32, -0.04, -.140),
			spheroid((p: Expression) => expression(`0.35 * 0.35 * cos((${p}.y - 0.04) * 10.0)`))));
	nose = blend2(value(0.02),
		nose,
		translate(value(0, 0.05, 0),
			spheroid((p: Expression) =>
				expression(`0.35 * 0.9 * cos(cos((${p}.y + 0.05) * 11.0) * ${p}.z * 2.3)`))));
	skull = blend(value(0.015), skull, nose);

	skull = blend2(value(0.002),
		skull,
		translate(value(.238, -0.09, 0),
			spheroid((p: Expression) =>
				expression(`0.35 * 0.3 * cos(sin((${p}.y - 0.09) * 18.0) * ${p}.z * 29.0)`))));

	skull = blend2(value(0.01),
		skull,
		translate(value(-.15, -0.97, .0),
			scale(value(2.0 * 0.35 * 2.5),
				sphere())));


	let upperJaw = translate(value(0.13, -0.26, 0),
		scale(value(2 * 0.35 * 0.45),
			sphere()));
	upperJaw = blend2(value(0.01),
		upperJaw,
		translate(value(0.125, -0.3, 0),
			scale(value(2 * 0.35 * 0.4),
				sphere())));
	upperJaw = blend2(value(0.03),
		upperJaw,
		translate(value(-0.2, -0.1, 0),
			scale(value(2 * 0.35 * 0.9),
				sphere())));
	upperJaw = blend2(value(0.03),
		upperJaw,
		translate(value(0.13, -0.543, 0),
			scale(value(2 * 0.35 * 0.9),
				sphere())));
	upperJaw = difference(
		upperJaw,
		translate(value(0, 0.02, 0),
			spheroid((p: Expression) => expression(`0.35 * 0.90 * cos(cos((${p}.y + 0.02) * 11.) * ${p}.z * 2.3)`))));
	skull = blend(value(0.04),
		skull,
		upperJaw);

	let lowerJaw = translate(value(0.1, -0.32, 0),
		scale(value(2.0 * 0.35 * 0.43),
			sphere()));
	lowerJaw = blend2(value(0.02),
		lowerJaw,
		translate(value(0.1, -0.32, 0),
			scale(value(2 * 0.35 * 0.37),
				sphere())));
	lowerJaw = blend2(value(0.02),
		lowerJaw,
		translate(value(0.1, -0.034, 0),
			scale(value(2 * 0.35 * 1.03),
				sphere())));
	lowerJaw = blend2(value(0.02),
		lowerJaw,
		translate(value(0, -0.4, 0),
			scale(value(2 * 0.35 * 0.35),
				sphere())));


	function test(
		x: (p: Expression) => Expression,
		b: (p: Expression) => Expression): Shape {
		return shape((p: Expression) => {
			const q = expression(`${p} - ${x(p)}`);
			const d = expression(`abs(${q}) - ${b(p)}`);
			return expression(`max(min(${d}.x, min(${d}.y, ${d}.z)), 0.0) + length(max(${d}, 0.0))`);
		});
	}

	lowerJaw = blend(value(0.13),
		lowerJaw,
		test((p: Expression) =>
			expression(`0.04 - 0.03 * cos(${p}.y * 20.2), -0.23, 0.27 + sin(${p}.y) * 0.27`),
			(p: Expression) =>
				expression(`cos(${p}.y * 4.0) * 0.03, 0.12, 0.014`)));
	lowerJaw = blend(value(0.13),
		lowerJaw,
		test((p: Expression) =>
			expression(`0.04 - 0.03 * cos(${p}.y * 20.2), -0.23, -0.27 - sin(${p}.y) * 0.27`),
			(p: Expression) =>
				expression(`cos(${p}.y * 4.0) * 0.03, 0.12, 0.014`)));

	lowerJaw = difference(
		lowerJaw,
		translate(value(0, 0.153, 0.2),
			scale(value(2 * 0.35 * 0.85),
				sphere())));
	lowerJaw = difference(
		lowerJaw,
		translate(value(0, 0.153, -0.2),
			scale(value(2 * 0.35 * 0.85),
				sphere())));
	lowerJaw = blend(
		value(0.07),
		lowerJaw,
		translate(value(0.2, -0.45, 0.05),
			scale(value(2 * 0.35 * 0.05),
				sphere())));
	lowerJaw = blend(
		value(0.07),
		lowerJaw,
		translate(value(0.2, -0.45, -0.05),
			scale(value(2 * 0.35 * 0.05),
				sphere())));
	skull = blend(value(0.02), skull, lowerJaw);

	let teeth = translate(value(0.26, -0.29, 0.018),
		scale(value(2 * 0.35 * 0.053), sphere()));
	teeth = union(teeth,
		translate(value(0.26, -0.29, -0.018),
			scale(value(2 * 0.35 * 0.053), sphere())));

	teeth = union(teeth, translate(value(.25, -.29, .05), scale(value(2 * 0.35 * .05), sphere())));;
	teeth = union(teeth, translate(value(.25, -.29, -.05), scale(value(2 * 0.35 * .05), sphere())));;
	teeth = union(teeth, translate(value(.235, -.29, .08), scale(value(2 * 0.35 * .05), sphere())));;
	teeth = union(teeth, translate(value(.235, -.29, -.08), scale(value(2 * 0.35 * .05), sphere())));;
	teeth = union(teeth, translate(value(.215, -.28, .1), scale(value(2 * 0.35 * .05), sphere())));;
	teeth = union(teeth, translate(value(.215, -.28, -.1), scale(value(2 * 0.35 * .05), sphere())));;
	teeth = difference(teeth, translate(value(.16, -.35, .0), scale(value(2 * 0.35 * .33), sphere())));;
	teeth = union(teeth, translate(value(.18, -.28, .115), scale(value(2 * 0.35 * .05), sphere())));;
	teeth = union(teeth, translate(value(.18, -.28, -.115), scale(value(2 * 0.35 * .05), sphere())));;
	teeth = union(teeth, translate(value(.14, -.28, .115), scale(value(2 * 0.35 * .06), sphere())));;
	teeth = union(teeth, translate(value(.14, -.28, -.115), scale(value(2 * 0.35 * .06), sphere())));;
	teeth = union(teeth, translate(value(.11, -.28, .115), scale(value(2 * 0.35 * .06), sphere())));;
	teeth = union(teeth, translate(value(.11, -.28, -.115), scale(value(2 * 0.35 * .06), sphere())));;
	teeth = union(teeth, translate(value(.08, -.28, .115), scale(value(2 * 0.35 * .06), sphere())));;
	teeth = union(teeth, translate(value(.08, -.28, -.115), scale(value(2 * 0.35 * .06), sphere())));;
	skull = blend(value(0.03),
		skull,
		teeth);

	teeth = translate(value(.23, -.34, .018),
		scale(value(2 * 0.35 * 0.053), sphere()));
	teeth = union(teeth, translate(value(.23, -.34, -.018), scale(value(2 * 0.35 * .05), sphere())));;
	teeth = union(teeth, translate(value(.22, -.34, -.048), scale(value(2 * 0.35 * .053), sphere())));;
	teeth = union(teeth, translate(value(.22, -.34, .048), scale(value(2 * 0.35 * .053), sphere())));;
	teeth = union(teeth, translate(value(.20, -.34, -.078), scale(value(2 * 0.35 * .053), sphere())));;
	teeth = union(teeth, translate(value(.20, -.34, .078), scale(value(2 * 0.35 * .053), sphere())));;
	teeth = union(teeth, translate(value(.17, -.35, -.098), scale(value(2 * 0.35 * .053), sphere())));;
	teeth = union(teeth, translate(value(.17, -.35, .098), scale(value(2 * 0.35 * .053), sphere())));;
	teeth = union(teeth, translate(value(.14, -.35, -.11), scale(value(2 * 0.35 * .053), sphere())));;
	teeth = union(teeth, translate(value(.14, -.35, .11), scale(value(2 * 0.35 * .053), sphere())));;
	teeth = union(teeth, translate(value(.11, -.35, -.11), scale(value(2 * 0.35 * .053), sphere())));;
	teeth = union(teeth, translate(value(.11, -.35, .11), scale(value(2 * 0.35 * .053), sphere())));;
	teeth = union(teeth, translate(value(.08, -.35, -.11), scale(value(2 * 0.35 * .053), sphere())));;
	teeth = union(teeth, translate(value(.08, -.35, .11), scale(value(2 * 0.35 * .053), sphere())));;
	skull = blend(value(0.025),
		skull,
		teeth);


	return skull;
}

createViewer(
	document.body,
	scene({
		air: material({
			scatter: value(1000)
		}),
		camera: orbit({
			fieldOfView: value(60 / 180 * Math.PI),
			distance: value(2),
			aperture: value(0.02),
			target: value(0),
			offset: expression(`-0.5, 0, 0`)
		}),
		models: [
			model({
				shape: scale(value(1000),
					sphere()),
				material: spotlight({
					spread: value(0.1),
					ambient: value(1)
				})
			}),
			model({
				shape: skull(),
				material: material({
					color: value(0.25)
				})
			})
		]
	}), options({
		width: 256,
		height: 256,
		epsilon: 1e-4,
		steps: 100,
		bounces: 4,
		iterations: 1,
		cheapNormals: true,
		memory: 1
	}));

