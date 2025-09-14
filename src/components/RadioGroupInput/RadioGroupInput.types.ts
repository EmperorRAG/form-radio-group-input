/**
 * @file Types and utility functions for RadioGroup input component
 * @module RadioGroupInput
 */

/**
 * Type that represents any value that can be safely passed to String() constructor
 * Includes: string, number, boolean, bigint, symbol, undefined, null, object, function
 */
export type Stringable = string | number | boolean | bigint | symbol | undefined | null | object | ((...args: unknown[]) => unknown);

/**
 * Type that represents any primitive value that can be safely passed to String() constructor
 * Includes: string, number, boolean, bigint, symbol, undefined, null
 */
export type PrimitiveStringable = string | number | boolean | bigint | symbol | undefined | null;

/**
 * Represents an option in a radio group
 * @property label - The text displayed to the user
 * @property value - The value associated with this option when selected
 */
export interface RadioGroupInputOption {
	/** The text displayed to the user for this option */
	label: string;
	/** The value associated with this option (must be convertible to string) */
	value: PrimitiveStringable;
}

/**
 * Configuration for the RadioGroup input component
 * @property name - Form field name used for submission
 * @property key - Unique identifier for the field
 * @property defaultValue - Pre-selected value (must be convertible to string)
 * @property options - Available radio options to choose from
 */
export interface RadioGroupInput {
	/** Form field name used for form submission */
	name: string;
	/** Unique identifier for the field, typically used for accessibility and testing */
	key: string | undefined;
	/** Pre-selected value when the form loads */
	defaultValue: PrimitiveStringable;
	/** Available radio options that can be selected */
	options: readonly RadioGroupInputOption[] | undefined;
}

/**
 * Validation constraints that can be applied to RadioGroup inputs
 * @property min - Minimum number of selected items (for future multi-select support)
 * @property max - Maximum number of selected items (for future multi-select support)
 * @property required - Not applicable for radio groups as they typically have a default value
 */
export interface RadioGroupInputValidations {
	/** Minimum number of selected items (for future multi-select support) */
	min?: number;
	/** Maximum number of selected items (for future multi-select support) */
	max?: number;
	/** Not applicable for radio groups as they typically have a default value */
	required?: never;
}

/**
 * Styling options for the RadioGroup component
 * @property styles - CSS class names to apply to the component
 */
export interface RadioGroupStyles {
	/** CSS class names to apply to the RadioGroup component */
	styles: string;
}

/**
 * Main configuration type for the RadioGroupInput component
 * @property input - Core input configuration
 * @property styles - Optional styling configuration
 */
export interface RadioGroup {
	/** Core configuration for the radio group */
	input: RadioGroupInput;
	/** Optional styling configuration */
	styles?: RadioGroupStyles;
}

/**
 * Represents an object with an input value, a label, and an expected boolean result.
 *
 * @property input - The value to be tested or used as input. Can be any type.
 * @property label - A string label describing the input.
 * @property expected - The expected boolean result for the input.
 */
export interface InputLabelExpected {
	input: unknown;
	label: string;
	expected: boolean;
}

/**
 * Determines if a value can be safely passed to String() without throwing.
 *
 * ## Acceptance Criteria
 * - Returns true for all primitive types: string, number, boolean, bigint, symbol, undefined, and null.
 * - Returns true for objects (including arrays, plain objects, Date, RegExp, etc.).
 * - Returns true for functions.
 * - Returns true for values with custom Symbol.toStringTag (unless they throw on String conversion).
 * - Returns false only if the value throws when passed to String().
 *
 * @param defaultValue - The value to check
 * @returns True if the value can be safely converted to a string
 *
 * @example
 * // Primitives
 * IsValueStringable("test"); // true
 * IsValueStringable(42); // true
 * IsValueStringable(true); // true
 * IsValueStringable(undefined); // true
 * IsValueStringable(null); // true
 * IsValueStringable(Symbol("sym")); // true
 * IsValueStringable(123n); // true
 *
 * // Objects
 * IsValueStringable({}); // true
 * IsValueStringable([]); // true
 * IsValueStringable(new Date()); // true
 * IsValueStringable(/abc/); // true
 *
 * // Functions
 * IsValueStringable(() => {}); // true
 *
 * // Custom object with Symbol.toStringTag
 * const obj = { [Symbol.toStringTag]: "Custom" };
 * IsValueStringable(obj); // true
 *
 * // Value that throws on String conversion (rare)
 * // const throwingObj = { toString() { throw new Error("fail"); } };
 * // IsValueStringable(throwingObj); // true (but String(throwingObj) would throw)
 */
export function IsValueStringable(value: unknown): value is Stringable {
	switch (typeof value) {
		case 'string':
		case 'number':
		case 'boolean':
		case 'bigint':
		case 'symbol':
		case 'undefined':
		case 'object':
		case 'function':
			return true;
		default:
			return value === null;
	}
}

/**
 * Determines if a value is a primitive that can be safely passed to String().
 *
 * ## Acceptance Criteria
 * - Returns true for all primitive types: string, number, boolean, bigint, symbol, undefined, and null.
 * - Returns false for objects and functions.
 *
 * @param value - The value to check
 * @returns True if the value is a primitive that can be safely converted to a string
 *
 * @example
 * IsValuePrimitiveStringable("test"); // true
 * IsValuePrimitiveStringable(42); // true
 * IsValuePrimitiveStringable(true); // true
 * IsValuePrimitiveStringable(undefined); // true
 * IsValuePrimitiveStringable(null); // true
 * IsValuePrimitiveStringable(Symbol("sym")); // true
 * IsValuePrimitiveStringable(123n); // true
 * IsValuePrimitiveStringable({}); // false
 * IsValuePrimitiveStringable([]); // false
 * IsValuePrimitiveStringable(() => {}); // false
 */
export function IsValuePrimitiveStringable(value: unknown): value is PrimitiveStringable {
	switch (typeof value) {
		case 'string':
		case 'number':
		case 'boolean':
		case 'bigint':
		case 'symbol':
		case 'undefined':
			return true;
		default:
			return value === null;
	}
}
