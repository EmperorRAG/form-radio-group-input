import { expect, test } from 'vitest';
import { IsValueStringable, IsValuePrimitiveStringable } from './RadioGroupInput.types';
import {
	getAllPrimitiveInputLabelExpectedObjects,
	getAllFunctionInputLabelExpectedObjects,
	getAllObjectInputLabelExpectedObjects,
} from './RadioGroupInput.fixtures';

/**
 * Table-driven test runner for evaluating the IsValueStringable function.
 *
 * This helper function enables functional, declarative, and reusable test definitions by accepting a description and an array of test cases.
 * Each test case is an object with an input value, the expected boolean result, and an optional label for clarity.
 *
 * The function iterates over the provided cases and asserts that the IsValueStringable function returns the expected result for each input.
 *
 * @param description - A string describing the test suite.
 * @param cases - An array of test cases, each with an input, expected result, and optional label.
 *
 * @example
 * runIsValueStringableTableTest('Test primitives', [
 *   { input: 'foo', expected: true, label: 'string' },
 *   { input: 123, expected: true, label: 'number' },
 * ]);
 */
const runIsValueStringableTableTest = (description: string, cases: { input: unknown; expected: boolean; label?: string }[]) => {
	test(description, () => {
		cases.forEach(({ input, expected }) => {
			expect(IsValueStringable(input)).toBe(expected);
		});
	});
};

/**
 * Table-driven test runner for evaluating the IsValuePrimitiveStringable function.
 *
 * This helper function enables functional, declarative, and reusable test definitions by accepting a description and an array of test cases.
 * Each test case is an object with an input value, the expected boolean result, and an optional label for clarity.
 *
 * The function iterates over the provided cases and asserts that the IsValuePrimitiveStringable function returns the expected result for each input.
 *
 * @param description - A string describing the test suite.
 * @param cases - An array of test cases, each with an input, expected result, and optional label.
 *
 * @example
 * runIsValuePrimitiveStringableTableTest('Test primitives', [
 *   { input: 'foo', expected: true, label: 'string' },
 *   { input: 123, expected: true, label: 'number' },
 * ]);
 */
const runIsValuePrimitiveStringableTableTest = (description: string, cases: { input: unknown; expected: boolean; label?: string }[]) => {
	test(description, () => {
		cases.forEach(({ input, expected }) => {
			expect(IsValuePrimitiveStringable(input)).toBe(expected);
		});
	});
};

/**
 * Unit test: Verifies that IsValueStringable returns true for all primitive types.
 *
 * This test ensures that the function correctly identifies all JavaScript primitive values as stringable, as required by the acceptance criteria.
 * Steps:
 * 1. Define a set of primitive values (string, number, boolean, undefined, null, symbol, bigint).
 * 2. For each value, assert that IsValueStringable returns true.
 */
runIsValueStringableTableTest('IsValueStringable returns true for all primitive types', getAllPrimitiveInputLabelExpectedObjects());

/**
 * Unit test: Verifies that IsValueStringable returns true for various object types.
 *
 * This test covers plain objects, arrays, Date instances, and RegExp objects, ensuring that all are recognized as stringable.
 * Steps:
 * 1. Define a set of object values.
 * 2. For each value, assert that IsValueStringable returns true.
 */
runIsValueStringableTableTest('IsValueStringable returns true for objects', getAllObjectInputLabelExpectedObjects());

/**
 * Unit test: Verifies that IsValueStringable returns true for functions.
 *
 * This test ensures that both arrow functions and named functions are considered stringable.
 * Steps:
 * 1. Define an arrow function and a named function.
 * 2. For each, assert that IsValueStringable returns true.
 */
runIsValueStringableTableTest('IsValueStringable returns true for functions', getAllFunctionInputLabelExpectedObjects());

/**
 * Unit test: Verifies that IsValuePrimitiveStringable returns true for all primitive types.
 *
 * This test ensures that the function correctly identifies all JavaScript primitive values as primitive stringable, as required by the acceptance criteria.
 * Steps:
 * 1. Define a set of primitive values (string, number, boolean, undefined, null, symbol, bigint).
 * 2. For each value, assert that IsValuePrimitiveStringable returns true.
 */
runIsValuePrimitiveStringableTableTest('IsValuePrimitiveStringable returns true for all primitive types', getAllPrimitiveInputLabelExpectedObjects());

/**
 * Unit test: Verifies that IsValuePrimitiveStringable returns false for various object types.
 *
 * This test covers plain objects, arrays, Date instances, and RegExp objects, ensuring that all are recognized as NOT primitive stringable.
 * Steps:
 * 1. Define a set of object values.
 * 2. For each value, assert that IsValuePrimitiveStringable returns false.
 */
runIsValuePrimitiveStringableTableTest(
	'IsValuePrimitiveStringable returns false for objects',
	getAllObjectInputLabelExpectedObjects().map((obj) => ({ ...obj, expected: false }))
);

/**
 * Unit test: Verifies that IsValuePrimitiveStringable returns false for functions.
 *
 * This test ensures that both arrow functions and named functions are considered NOT primitive stringable.
 * Steps:
 * 1. Define an arrow function and a named function.
 * 2. For each, assert that IsValuePrimitiveStringable returns false.
 */
runIsValuePrimitiveStringableTableTest(
	'IsValuePrimitiveStringable returns false for functions',
	getAllFunctionInputLabelExpectedObjects().map((obj) => ({ ...obj, expected: false }))
);
