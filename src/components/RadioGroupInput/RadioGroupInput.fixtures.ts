import {
	mergeObjects,
	toLabelObjects,
	toNameObjects,
	toKeyObjects,
	toOptionsObjects,
	toDefaultValueObjects,
	toValueObjects,
	toArray,
	fromArray,
} from '@emperorrag/utilities';
import type { RadioGroupInput } from './RadioGroupInput.types';

/**
 * Fixture for a radio group input, constructed by composing several utility functions:
 * - `toNameObjects(['radios'])` and `toKeyObjects(['radios'])` create arrays of objects with name and key properties.
 * - `toLabelObjects(['Radio 1', 'Radio 2', 'Radio 3'])` and `toValueObjects(['1', '2', '3'])` create label and value objects for each radio option.
 * - `toOptionsObjects` wraps the label/value pairs as options.
 * - `toDefaultValueObjects(['2'])` sets the default selected value.
 * - The arrays are merged using `mergeObjects` and finally converted to the expected structure with `fromArray`.
 *
 * The resulting object satisfies the `RadioGroupInput` type and can be used as a fixture for testing or demonstration purposes.
 */
export const radioGroupInput = fromArray(
	mergeObjects(
		mergeObjects(
			mergeObjects(toNameObjects(['radios']), toKeyObjects(['radios'])),
			toOptionsObjects(toArray(mergeObjects(toLabelObjects(['Radio 1', 'Radio 2', 'Radio 3']), toValueObjects(['1', '2', '3']))))
		),
		toDefaultValueObjects([''])
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
	mergeObjects(
		mergeObjects(
			mergeObjects(toNameObjects(['letters']), toKeyObjects(['letters'])),
			toOptionsObjects(toArray(mergeObjects(toLabelObjects(['A', 'B', 'C']), toValueObjects(['A', 'B', 'C']))))
		),
		toDefaultValueObjects(['B'])
	)
) satisfies RadioGroupInput;

/**
 * Fixture for a radio group input with a preselected value.
 *
 * This object is constructed by composing several utility functions:
 * - `toNameObjects(['numbers'])` and `toKeyObjects(['numbers'])` to set the name and key.
 * - `toLabelObjects(['One', 'Two', 'Three'])` and `toValueObjects(['1', '2', '3'])` to define the radio options.
 * - `toOptionsObjects` and `toArray` to format the options.
 * - `toDefaultValueObjects(['2'])` to set the default selected value.
 * - `mergeObjects` and `fromArray` to combine all parts into the final object.
 *
 * The resulting object satisfies the `RadioGroupInput` type and represents a radio group
 * with three options ("One", "Two", "Three"), where "Two" (value "2") is preselected.
 */
export const radioGroupInputPreselected = fromArray(
	mergeObjects(
		mergeObjects(
			mergeObjects(toNameObjects(['numbers']), toKeyObjects(['numbers'])),
			toOptionsObjects(toArray(mergeObjects(toLabelObjects(['One', 'Two', 'Three']), toValueObjects(['1', '2', '3']))))
		),
		toDefaultValueObjects(['2'])
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
 * - `toNameObjects`: Converts the name to an object array.
 * - `toKeyObjects`: Converts the key to an object array.
 * - `toOptionsObjects`: Converts the options array to an object array (empty in this case).
 * - `toDefaultValueObjects`: Converts the default value to an object array.
 * - `mergeObjects`: Merges the above arrays into a single object array.
 * - `fromArray`: Converts the final array into a `RadioGroupInput` object.
 *
 * @remarks
 * Useful for testing scenarios where a radio group input is rendered with no available options.
 *
 * @satisfies {RadioGroupInput}
 */
export const radioGroupInputEmptyOptions = fromArray(
	mergeObjects(mergeObjects(mergeObjects(toNameObjects(['empty-radio']), toKeyObjects(['empty-radio'])), toOptionsObjects([])), toDefaultValueObjects(['']))
) satisfies RadioGroupInput;
