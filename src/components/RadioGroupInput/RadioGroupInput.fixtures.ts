import {
	addObjectArrays,
	getAllFunctionExpectedValues,
	getAllFunctionLabelValues,
	getAllFunctionValues,
	getAllObjectExpectedValues,
	getAllObjectLabelValues,
	getAllObjectValues,
	getAllPrimitiveExpectedValues,
	getAllPrimitiveLabelValues,
	getAllPrimitiveValues,
	toExpectedObjectArray,
	toInputObjectArray,
	toLabelObjectArray,
	toNameObjectArray,
	toKeyObjectArray,
	toOptionsObjectArray,
	toDefaultValueObjectArray,
	toValueObjectArray,
	toArray,
} from './RadioGroupInput.fixtures.services';
import type { InputLabelExpected, RadioGroupInput } from './RadioGroupInput.types';
import { fromArray } from './RadioGroupInput.fixtures.services';

/**
 * Generates an array of expected objects for all primitive input-label combinations.
 *
 * This function combines arrays of input objects, label objects, and expected value objects
 * for all primitive values using the `addObjectArrays` utility. The resulting array
 * conforms to the `InputLabelExpected[]` type.
 *
 * @returns {InputLabelExpected[]} An array of objects representing all primitive input-label-expected combinations.
 */
export const getAllPrimitiveInputLabelExpectedObjects = () =>
	addObjectArrays(
		addObjectArrays(toInputObjectArray(getAllPrimitiveValues()), toLabelObjectArray(getAllPrimitiveLabelValues())),
		toExpectedObjectArray(getAllPrimitiveExpectedValues())
	) satisfies InputLabelExpected[];

/**
 * Generates an array of objects that combine input, label, and expected value representations
 * for all function values, labels, and expected results. This is achieved by converting each
 * set of values into their respective object arrays and merging them using `addObjectArrays`.
 * The resulting array conforms to the `InputLabelExpected[]` type.
 *
 * @returns {InputLabelExpected[]} An array of objects containing input, label, and expected value data.
 */
export const getAllFunctionInputLabelExpectedObjects = () =>
	addObjectArrays(
		addObjectArrays(toInputObjectArray(getAllFunctionValues()), toLabelObjectArray(getAllFunctionLabelValues())),
		toExpectedObjectArray(getAllFunctionExpectedValues())
	) satisfies InputLabelExpected[];

/**
 * Generates an array of objects that combine input values, label values, and expected values
 * for use in testing or fixtures. The function utilizes helper functions to transform
 * raw values into structured arrays and then merges them into a single array of objects
 * conforming to the `InputLabelExpected` type.
 *
 * @returns {InputLabelExpected[]} An array of objects each containing input, label, and expected value properties.
 */
export const getAllObjectInputLabelExpectedObjects = () =>
	addObjectArrays(
		addObjectArrays(toInputObjectArray(getAllObjectValues()), toLabelObjectArray(getAllObjectLabelValues())),
		toExpectedObjectArray(getAllObjectExpectedValues())
	) satisfies InputLabelExpected[];

/**
 * Fixture for a radio group input, constructed by composing several utility functions:
 * - `toNameObjectArray(['radios'])` and `toKeyObjectArray(['radios'])` create arrays of objects with name and key properties.
 * - `toLabelObjectArray(['Radio 1', 'Radio 2', 'Radio 3'])` and `toValueObjectArray(['1', '2', '3'])` create label and value objects for each radio option.
 * - `toOptionsObjectArray` wraps the label/value pairs as options.
 * - `toDefaultValueObjectArray(['2'])` sets the default selected value.
 * - The arrays are merged using `addObjectArrays` and finally converted to the expected structure with `fromArray`.
 *
 * The resulting object satisfies the `RadioGroupInput` type and can be used as a fixture for testing or demonstration purposes.
 */
export const radioGroupInput = fromArray(
	addObjectArrays(
		addObjectArrays(
			addObjectArrays(toNameObjectArray(['radios']), toKeyObjectArray(['radios'])),
			toOptionsObjectArray(toArray(addObjectArrays(toLabelObjectArray(['Radio 1', 'Radio 2', 'Radio 3']), toValueObjectArray(['1', '2', '3']))))
		),
		toDefaultValueObjectArray([''])
	)
) satisfies RadioGroupInput;

/**
 * Fixture for a radio group input with multiple options.
 *
 * This constant creates a `RadioGroupInput` object using a series of utility functions:
 * - Adds name and key properties with the value 'letters'.
 * - Sets up options with labels and values 'A', 'B', and 'C'.
 * - Sets the default selected value to 'B'.
 *
 * The resulting object satisfies the `RadioGroupInput` type and can be used for testing or demonstration purposes.
 */
export const radioGroupInputMultiple = fromArray(
	addObjectArrays(
		addObjectArrays(
			addObjectArrays(toNameObjectArray(['letters']), toKeyObjectArray(['letters'])),
			toOptionsObjectArray(toArray(addObjectArrays(toLabelObjectArray(['A', 'B', 'C']), toValueObjectArray(['A', 'B', 'C']))))
		),
		toDefaultValueObjectArray(['B'])
	)
) satisfies RadioGroupInput;

/**
 * Fixture for a radio group input with a preselected value.
 *
 * This object is constructed by composing several utility functions:
 * - `toNameObjectArray(['numbers'])` and `toKeyObjectArray(['numbers'])` to set the name and key.
 * - `toLabelObjectArray(['One', 'Two', 'Three'])` and `toValueObjectArray(['1', '2', '3'])` to define the radio options.
 * - `toOptionsObjectArray` and `toArray` to format the options.
 * - `toDefaultValueObjectArray(['2'])` to set the default selected value.
 * - `addObjectArrays` and `fromArray` to combine all parts into the final object.
 *
 * The resulting object satisfies the `RadioGroupInput` type and represents a radio group
 * with three options ("One", "Two", "Three"), where "Two" (value "2") is preselected.
 */
export const radioGroupInputPreselected = fromArray(
	addObjectArrays(
		addObjectArrays(
			addObjectArrays(toNameObjectArray(['numbers']), toKeyObjectArray(['numbers'])),
			toOptionsObjectArray(toArray(addObjectArrays(toLabelObjectArray(['One', 'Two', 'Three']), toValueObjectArray(['1', '2', '3']))))
		),
		toDefaultValueObjectArray(['2'])
	)
) satisfies RadioGroupInput;

/**
 * Fixture for a radio group input with empty options.
 *
 * This constant creates a `RadioGroupInput` object with:
 * - Name: 'empty-radio'
 * - Key: 'empty-radio'
 * - Options: an empty array (no selectable options)
 * - Default value: an empty string
 *
 * The value is constructed by composing several utility functions:
 * - `toNameObjectArray`: Converts the name to an object array.
 * - `toKeyObjectArray`: Converts the key to an object array.
 * - `toOptionsObjectArray`: Converts the options array to an object array (empty in this case).
 * - `toDefaultValueObjectArray`: Converts the default value to an object array.
 * - `addObjectArrays`: Merges the above arrays into a single object array.
 * - `fromArray`: Converts the final array into a `RadioGroupInput` object.
 *
 * @remarks
 * Useful for testing scenarios where a radio group input is rendered with no available options.
 *
 * @satisfies {RadioGroupInput}
 */
export const radioGroupInputEmptyOptions = fromArray(
	addObjectArrays(
		addObjectArrays(addObjectArrays(toNameObjectArray(['empty-radio']), toKeyObjectArray(['empty-radio'])), toOptionsObjectArray([])),
		toDefaultValueObjectArray([''])
	)
) satisfies RadioGroupInput;
