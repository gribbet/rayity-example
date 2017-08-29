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
				expression(`0.333 * cos(cos(${p}.y * 11.0 + 0.55) * ${p}.z * 2.3)`)));

	const globeFront = translate(
		value(0.1, 0.23, 0),
		scale(value(0.574), sphere()));
	skull = blend(value(0.09), skull, globeFront);

	const globeBack = translate(
		value(-0.1, 0.24, 0),
		scale(value(0.574), sphere()));
	skull = blend(value(0.09), skull, globeBack);

	const eyeBrow = spheroid((p: Expression) =>
		expression(`0.126 * cos(${p}.y * 7.0 + 0.49)`));
	const eyeBrows = union(
		translate(value(0.24, 0.07, 0.1), eyeBrow),
		translate(value(0.24, 0.07, -0.1), eyeBrow));
	skull = blend(value(0.02), skull, eyeBrows);

	const lateralHole = spheroid((p: Expression) =>
		expression(`0.098 * cos(${p}.x * 0.59 + 0.089)`))
	const lateralHoles = union(
		translate(value(0.15, -0.01, 0.31), lateralHole),
		translate(value(0.15, -0.01, -0.31), lateralHole));
	skull = blend2(value(0.02), skull, lateralHoles);

	const cheekBones = union(
		translate(value(0.22, -0.13, 0.18),
			scale(value(0.077), sphere())),
		translate(value(0.22, -0.13, -0.18),
			scale(value(0.077), sphere())));
	skull = blend(value(0.04), skull, cheekBones);

	const inside = blend(value(0.02),
		blend(value(0.02),
			blend(value(0.02),
				translate(value(0, 0.05, 0),
					spheroid((p: Expression) =>
						expression(`0.315 * cos(cos(${p}.y * 11.0 + 0.55) * ${p}.z * 2.3)`))),
				translate(value(0.10, 0.23, 0),
					scale(value(0.511),
						sphere()))),
			translate(value(-0.1, 0.24, 0),
				scale(value(0.511),
					sphere()))),
		translate(value(0, 0.24, 0),
			scale(value(0.511),
				sphere())));
	skull = blend2(value(0.02), skull, inside);

	const eyeBall = spheroid((p: Expression) =>
		expression(`0.098 * cos(${p}.y * 10.0 - 0.04)`));
	const eyeBalls = union(
		translate(value(0.32, -0.04, 0.140), eyeBall),
		translate(value(0.32, -0.04, -0.140), eyeBall));
	skull = blend2(value(0.03), skull, eyeBalls);

	let nose = translate(
		value(0.22, -0.05, 0),
		spheroid((p: Expression) =>
			expression(`0.123 * cos(sin(${p}.y * 22.0 - 1.1) * ${p}.z * 24.0)`)));
	nose = blend2(value(0.02),
		nose,
		translate(value(0.32, -0.04, 0.140),
			spheroid((p: Expression) =>
				expression(`0.123 * cos(${p}.y * 10.0 - 0.4)`))));
	nose = blend2(value(0.02),
		nose,
		translate(value(0.32, -0.04, -0.140),
			spheroid((p: Expression) =>
				expression(`0.123 * cos(${p}.y * 10.0 - 0.4)`))));
	nose = blend2(value(0.02),
		nose,
		translate(value(0, 0.05, 0),
			spheroid((p: Expression) =>
				expression(`0.32 * cos(cos(${p}.y * 11.0 + 0.5) * ${p}.z * 2.3)`))));
	skull = blend(value(0.015), skull, nose);

	skull = blend2(value(0.002),
		skull,
		translate(value(0.238, -0.09, 0),
			spheroid((p: Expression) =>
				expression(`0.11 * cos(sin(${p}.y * 18.0 - 1.62) * ${p}.z * 29.0)`))));

	skull = blend2(value(0.01),
		skull,
		translate(value(-0.15, -0.97, 0),
			scale(value(1.75),
				sphere())));


	let upperJaw = translate(value(0.13, -0.26, 0),
		scale(value(0.315),
			sphere()));
	upperJaw = blend2(value(0.01),
		upperJaw,
		translate(value(0.125, -0.3, 0),
			scale(value(0.28),
				sphere())));
	upperJaw = blend2(value(0.03),
		upperJaw,
		translate(value(-0.2, -0.1, 0),
			scale(value(0.63),
				sphere())));
	upperJaw = blend2(value(0.03),
		upperJaw,
		translate(value(0.13, -0.543, 0),
			scale(value(0.63),
				sphere())));
	upperJaw = difference(
		upperJaw,
		translate(value(0, 0.02, 0),
			spheroid((p: Expression) =>
				expression(`0.315 * cos(cos(${p}.y * 11.0 + 0.22) * ${p}.z * 2.3)`))));
	skull = blend(value(0.04),
		skull,
		upperJaw);

	let lowerJaw = translate(value(0.1, -0.32, 0),
		scale(value(0.301),
			sphere()));
	lowerJaw = blend2(value(0.02),
		lowerJaw,
		translate(value(0.1, -0.32, 0),
			scale(value(0.259),
				sphere())));
	lowerJaw = blend2(value(0.02),
		lowerJaw,
		translate(value(0.1, -0.034, 0),
			scale(value(0.721),
				sphere())));
	lowerJaw = blend2(value(0.02),
		lowerJaw,
		translate(value(0, -0.4, 0),
			scale(value(0.245),
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
			scale(value(0.595),
				sphere())));
	lowerJaw = difference(
		lowerJaw,
		translate(value(0, 0.153, -0.2),
			scale(value(0.595),
				sphere())));
	lowerJaw = blend(
		value(0.07),
		lowerJaw,
		translate(value(0.2, -0.45, 0.05),
			scale(value(0.035),
				sphere())));
	lowerJaw = blend(
		value(0.07),
		lowerJaw,
		translate(value(0.2, -0.45, -0.05),
			scale(value(0.035),
				sphere())));
	skull = blend(value(0.02), skull, lowerJaw);

	let teeth = translate(value(0.26, -0.29, 0.018),
		scale(value(0.0371), sphere()));
	teeth = union(teeth,
		translate(value(0.26, -0.29, -0.018),
			scale(value(0.0371),
				sphere())));

	teeth = union(teeth, translate(value(0.25, -0.29, 0.05), scale(value(0.035), sphere())));;
	teeth = union(teeth, translate(value(0.25, -0.29, -0.05), scale(value(0.035), sphere())));;
	teeth = union(teeth, translate(value(0.235, -0.29, 0.08), scale(value(0.035), sphere())));;
	teeth = union(teeth, translate(value(0.235, -0.29, -0.08), scale(value(0.035), sphere())));;
	teeth = union(teeth, translate(value(0.215, -0.28, 0.1), scale(value(0.035), sphere())));;
	teeth = union(teeth, translate(value(0.215, -0.28, -0.1), scale(value(0.035), sphere())));;
	teeth = difference(teeth, translate(value(0.16, -0.35, 0), scale(value(0.231), sphere())));;
	teeth = union(teeth, translate(value(0.18, -0.28, 0.115), scale(value(0.035), sphere())));;
	teeth = union(teeth, translate(value(0.18, -0.28, -0.115), scale(value(0.035), sphere())));;
	teeth = union(teeth, translate(value(0.14, -0.28, 0.115), scale(value(0.042), sphere())));;
	teeth = union(teeth, translate(value(0.14, -0.28, -0.115), scale(value(0.042), sphere())));;
	teeth = union(teeth, translate(value(0.11, -0.28, 0.115), scale(value(0.042), sphere())));;
	teeth = union(teeth, translate(value(0.11, -0.28, -0.115), scale(value(0.042), sphere())));;
	teeth = union(teeth, translate(value(0.08, -0.28, 0.115), scale(value(0.042), sphere())));;
	teeth = union(teeth, translate(value(0.08, -0.28, -0.115), scale(value(0.042), sphere())));;
	skull = blend(value(0.03),
		skull,
		teeth);

	teeth = translate(value(0.23, -0.34, 0.018),
		scale(value(0.0371), sphere()));
	teeth = union(teeth, translate(value(0.23, -0.34, -0.018), scale(value(0.035), sphere())));;
	teeth = union(teeth, translate(value(0.22, -0.34, -0.048), scale(value(0.0353), sphere())));;
	teeth = union(teeth, translate(value(0.22, -0.34, 0.048), scale(value(0.0353), sphere())));;
	teeth = union(teeth, translate(value(0.20, -0.34, -0.078), scale(value(0.0353), sphere())));;
	teeth = union(teeth, translate(value(0.20, -0.34, 0.078), scale(value(0.0353), sphere())));;
	teeth = union(teeth, translate(value(0.17, -0.35, -0.098), scale(value(0.0353), sphere())));;
	teeth = union(teeth, translate(value(0.17, -0.35, 0.098), scale(value(0.0353), sphere())));;
	teeth = union(teeth, translate(value(0.14, -0.35, -0.11), scale(value(0.0353), sphere())));;
	teeth = union(teeth, translate(value(0.14, -0.35, 0.11), scale(value(0.0353), sphere())));;
	teeth = union(teeth, translate(value(0.11, -0.35, -0.11), scale(value(0.0353), sphere())));;
	teeth = union(teeth, translate(value(0.11, -0.35, 0.11), scale(value(0.0353), sphere())));;
	teeth = union(teeth, translate(value(0.08, -0.35, -0.11), scale(value(0.0353), sphere())));;
	teeth = union(teeth, translate(value(0.08, -0.35, 0.11), scale(value(0.0353), sphere())));;
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
		width: 512,
		height: 512,
		epsilon: 1e-4,
		steps: 100,
		bounces: 4,
		iterations: 1,
		cheapNormals: true,
		memory: 1
	}));

