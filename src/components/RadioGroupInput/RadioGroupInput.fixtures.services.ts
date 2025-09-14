// Primitive label helpers
const isNull = (value: unknown): value is null => value === null;
const isBigInt = (value: unknown): value is bigint => typeof value === 'bigint';
const isSymbol = (value: unknown): value is symbol => typeof value === 'symbol';
/**
 * Checks if a value is a string primitive.
 * @param value - The value to check.
 * @returns {boolean} True if value is a string primitive.
 */
export const isString = (value: unknown): value is string => typeof value === 'string';

/**
 * Checks if a value is a number primitive (not NaN).
 * @param value - The value to check.
 * @returns {boolean} True if value is a number primitive and not NaN.
 */
export const isNumber = (value: unknown): value is number => typeof value === 'number' && !Number.isNaN(value);

/**
 * Checks if a value is a boolean primitive.
 * @param value - The value to check.
 * @returns {boolean} True if value is a boolean primitive.
 */
export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean';

/**
 * Checks if a value is undefined.
 * @param value - The value to check.
 * @returns {boolean} True if value is undefined.
 */
export const isUndefined = (value: unknown): value is undefined => value === undefined;

/**
 * Checks if a value is a primitive type (string, number, boolean, undefined, null, symbol, bigint).
 * @param value - The value to check.
 * @returns {boolean} True if value is a primitive.
 */
export const isPrimitive = (value: unknown): boolean =>
	isString(value) || isNumber(value) || isBoolean(value) || isUndefined(value) || isNull(value) || isSymbol(value) || isBigInt(value);

const getTypeOf = (value: unknown): string => typeof value;

/**
 * Returns a string label describing the primitive value's type.
 * This function is pure and does not mutate any external state.
 *
 * @param value - The primitive value to label.
 * @returns {string} The label for the primitive value.
 *
 * Example usage:
 *   getPrimitiveLabelValue(42); // 'number'
 *   getPrimitiveLabelValue(null); // 'null'
 *   getPrimitiveLabelValue(Symbol('sym')); // 'symbol'
 */
export const getPrimitiveLabelValue = (value: unknown): string => {
	if (isNull(value)) return 'null';
	if (isBigInt(value)) return 'bigint';
	if (isSymbol(value)) return 'symbol';
	if (isString(value)) return 'string';
	if (isNumber(value)) return 'number';
	if (isBoolean(value)) return 'boolean';
	if (isUndefined(value)) return 'undefined';
	return getTypeOf(value);
};

/**
 * Returns the expected value (boolean) for a given primitive value for stringability tests.
 * This function is pure and always returns true for all JavaScript primitive types.
 *
 * @param value - The primitive value to check.
 * @returns {boolean} Always true for primitives.
 *
 * Example usage:
 *   getPrimitiveExpectedValue(42); // true
 *   getPrimitiveExpectedValue(null); // true
 */
export const getPrimitiveExpectedValue = (value: unknown): boolean => {
	if (isNull(value)) return true;
	if (isBigInt(value)) return true;
	if (isSymbol(value)) return true;
	if (isString(value)) return true;
	if (isNumber(value)) return true;
	if (isBoolean(value)) return true;
	if (isUndefined(value)) return true;
	return false;
};

/**
 * Returns an array of values representative of all JavaScript primitive types.
 * This function is pure and does not mutate any external state.
 *
 * @returns {unknown[]} An array containing one value for each primitive type.
 *
 * Example usage:
 *   const primitives = getAllPrimitiveValues();
 *   // ['string', 42, true, undefined, null, Symbol('sym'), 123n]
 */
export const getAllPrimitiveValues = (): unknown[] => [
	'string', // string
	42, // number
	true, // boolean
	undefined, // undefined
	null, // null
	Symbol('sym'), // symbol
	123n, // bigint
];

/**
 * Maps all primitive values to their string labels using getPrimitiveLabelValue.
 * This function is pure and composes getAllPrimitiveValues and getPrimitiveLabelValue.
 *
 * @returns {string[]} An array of string labels for each primitive value.
 *
 * Example usage:
 *   getAllPrimitiveLabelValues();
 *   // ['string', 'number', 'boolean', 'undefined', 'null', 'symbol', 'bigint']
 */
export const getAllPrimitiveLabelValues = (): string[] => getAllPrimitiveValues().map(getPrimitiveLabelValue);

/**
 * Maps all primitive values to their expected boolean values using getPrimitiveExpectedValue.
 * This function is pure and composes getAllPrimitiveValues and getPrimitiveExpectedValue.
 *
 * @returns {boolean[]} An array of expected boolean values for each primitive value.
 *
 * Example usage:
 *   getPrimitiveExpectedValues();
 *   // [true, true, ...]
 */
export const getAllPrimitiveExpectedValues = (): boolean[] => getAllPrimitiveValues().map(getPrimitiveExpectedValue);

// Function label helpers
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
const isArrowFunction = (fn: Function): boolean => !fn.name || fn.name === 'anonymous';
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
const isNamedFunction = (fn: Function): boolean => !!fn.name && fn.name !== 'anonymous';

/**
 * Returns a string label describing the function value's type.
 * This function is pure and does not mutate any external state.
 *
 * @param fn - The function value to label.
 * @returns {string} The label for the function value.
 *
 * Example usage:
 *   getFunctionLabelValue(() => {}); // 'arrow function'
 *   getFunctionLabelValue(function namedFunc() {}); // 'named function'
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const getFunctionLabelValue = (fn: Function): string => {
	if (isArrowFunction(fn)) return 'arrow function';
	if (isNamedFunction(fn)) return 'named function';
	return 'function';
};

/**
 * Returns the expected value (boolean) for a given function value for stringability tests.
 * This function is pure and always returns true for any function.
 *
 * @param fn - The function value to check.
 * @returns {boolean} Always true for functions.
 *
 * Example usage:
 *   getFunctionExpectedValue(() => {}); // true
 *   getFunctionExpectedValue(function namedFunc() {}); // true
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const getFunctionExpectedValue = (fn: Function): boolean => {
	if (isArrowFunction(fn)) return true;
	if (isNamedFunction(fn)) return true;
	return false;
};

/**
 * Returns an array of representative function values (arrow and named functions).
 * This function is pure and does not mutate any external state.
 *
 * @returns {Function[]} An array containing representative function values.
 *
 * Example usage:
 *   const functions = getAllFunctionValues();
 *   // [() => {}, function namedFunc() {}]
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const getAllFunctionValues = (): Function[] => [
	() => {
		/* empty */
	}, // arrow function
	function namedFunc() {
		/* empty */
	}, // named function
];

/**
 * Maps all function values to their string labels using getFunctionLabelValue.
 * This function is pure and composes getAllFunctionValues and getFunctionLabelValue.
 *
 * @returns {string[]} An array of string labels for each function value.
 *
 * Example usage:
 *   getAllFunctionLabelValues();
 *   // ['arrow function', 'named function']
 */
export const getAllFunctionLabelValues = (): string[] => getAllFunctionValues().map(getFunctionLabelValue);

/**
 * Maps all function values to their expected boolean values using getFunctionExpectedValue.
 * This function is pure and composes getAllFunctionValues and getFunctionExpectedValue.
 *
 * @returns {boolean[]} An array of expected boolean values for each function value.
 *
 * Example usage:
 *   getFunctionExpectedValues();
 *   // [true, true]
 */
export const getAllFunctionExpectedValues = (): boolean[] => getAllFunctionValues().map(getFunctionExpectedValue);

// Object label helpers
const isArray = (obj: object): boolean => Array.isArray(obj);
const isDate = (obj: object): boolean => obj instanceof Date;
const isRegExp = (obj: object): boolean => obj instanceof RegExp;
const hasCustomToStringTag = (obj: object): boolean => typeof obj === 'object' && Symbol.toStringTag in obj;
const throwsOnToString = (obj: object): boolean => {
	if (
		typeof obj === 'object' &&
		Object.prototype.hasOwnProperty.call(obj, 'toString') &&
		typeof (obj as { toString: () => string }).toString === 'function'
	) {
		try {
			(obj as { toString: () => string }).toString();
		} catch {
			return true;
		}
	}
	return false;
};
const isPlainObject = (obj: object): boolean => {
	return typeof obj === 'object' && !isArray(obj) && !isDate(obj) && !isRegExp(obj) && !hasCustomToStringTag(obj) && !throwsOnToString(obj);
};
/**
 * Returns a string label describing the object value's type.
 * This function is pure and does not mutate any external state.
 *
 * @param obj - The object value to label.
 * @returns {string} The label for the object value.
 *
 * Example usage:
 *   getObjectLabelValue({}); // 'plain object'
 *   getObjectLabelValue([]); // 'array'
 *   getObjectLabelValue(new Date()); // 'Date'
 *   getObjectLabelValue(/abc/); // 'RegExp'
 *   getObjectLabelValue({ [Symbol.toStringTag]: 'Custom' }); // 'custom Symbol.toStringTag'
 *   getObjectLabelValue({ toString() { throw new Error('fail'); } }); // 'throws on toString'
 */
export const getObjectLabelValue = (obj: object): string => {
	if (isArray(obj)) return 'array';
	if (isDate(obj)) return 'Date';
	if (isRegExp(obj)) return 'RegExp';
	if (hasCustomToStringTag(obj)) return 'custom Symbol.toStringTag';
	if (throwsOnToString(obj)) return 'throws on toString';
	if (isPlainObject(obj)) return 'plain object';
	return 'object';
};

/**
 * Returns the expected value (boolean) for a given object value for stringability tests.
 * This function is pure and always returns true for any object, including arrays, dates, regexps, etc.
 *
 * @param obj - The object value to check.
 * @returns {boolean} Always true for objects.
 *
 * Example usage:
 *   getObjectExpectedValue({}); // true
 *   getObjectExpectedValue([]); // true
 *   getObjectExpectedValue(new Date()); // true
 *   getObjectExpectedValue(/abc/); // true
 */
export const getObjectExpectedValue = (obj: object): boolean => {
	if (isArray(obj)) return true;
	if (isDate(obj)) return true;
	if (isRegExp(obj)) return true;
	if (hasCustomToStringTag(obj)) return true;
	if (throwsOnToString(obj)) return true;
	if (isPlainObject(obj)) return true;
	return false;
};

/**
 * Returns an array of representative object values (plain object, array, Date, RegExp, custom object).
 * This function is pure and does not mutate any external state.
 *
 * @returns {object[]} An array containing representative object values.
 *
 * Example usage:
 *   const objects = getAllObjectValues();
 *   // [ {}, [], new Date(), /abc/, { [Symbol.toStringTag]: 'Custom' }, { toString() { throw new Error('fail'); } } ]
 */
export const getAllObjectValues = (): object[] => [
	{}, // plain object
	[], // array
	new Date(), // Date
	/abc/, // RegExp
	{ [Symbol.toStringTag]: 'Custom' }, // custom object with Symbol.toStringTag
	{
		toString() {
			throw new Error('fail');
		},
	}, // object that throws on String conversion
];

/**
 * Maps all object values to their string labels using getObjectLabelValue.
 * This function is pure and composes getAllObjectValues and getObjectLabelValue.
 *
 * @returns {string[]} An array of string labels for each object value.
 *
 * Example usage:
 *   getAllObjectLabelValues();
 *   // ['plain object', 'array', 'Date', 'RegExp', 'custom Symbol.toStringTag', 'throws on toString']
 */
export const getAllObjectLabelValues = (): string[] => getAllObjectValues().map(getObjectLabelValue);

/**
 * Maps all object values to their expected boolean values using getObjectExpectedValue.
 * This function is pure and composes getAllObjectValues and getObjectExpectedValue.
 *
 * @returns {boolean[]} An array of expected boolean values for each object value.
 *
 * Example usage:
 *   getObjectExpectedValues();
 *   // [true, true, ...]
 */
export const getAllObjectExpectedValues = (): boolean[] => getAllObjectValues().map(getObjectExpectedValue);

/**
 * Converts an array of values into an array of objects, where each object has one property
 * with the property name provided as input and its value being the corresponding value from the array.
 * This function is pure and does not mutate any external state.
 *
 * @param propertyName - The property name to use for each object.
 * @param values - The array of values to convert.
 * @returns {object[]} An array of objects with the specified property name and values.
 *
 * Example usage:
 *   toObjectArray('input', [1, 2, 3]);
 *   // [ { input: 1 }, { input: 2 }, { input: 3 } ]
 */
export const toObjectArray = <K extends string, T>(propertyName: K, values: T[]): Record<K, T>[] =>
	values.map((value) => ({ [propertyName]: value }) as Record<K, T>);

/**
 * Converts an array of values into an array of objects with the property name 'input'.
 * This is a curried version of toObjectArray with propertyName preset to 'input'.
 *
 * @param values - The array of values to convert.
 * @returns {object[]} An array of objects with the property 'input' and corresponding values.
 *
 * Example usage:
 *   toInputObjectArray([1, 2, 3]);
 *   // [ { input: 1 }, { input: 2 }, { input: 3 } ]
 */
export const toInputObjectArray = <T>(values: T[]): { input: T }[] => toObjectArray<'input', T>('input', values);

/**
 * Converts an array of values into an array of objects with the property name 'label'.
 * This is a curried version of toObjectArray with propertyName preset to 'label'.
 *
 * @param values - The array of values to convert.
 * @returns {object[]} An array of objects with the property 'label' and corresponding values.
 *
 * Example usage:
 *   toLabelObjectArray(['foo', 'bar']);
 *   // [ { label: 'foo' }, { label: 'bar' } ]
 */
export const toLabelObjectArray = <T>(values: T[]): { label: T }[] => toObjectArray<'label', T>('label', values);

/**
 * Converts an array of values into an array of objects with the property name 'expected'.
 * This is a curried version of toObjectArray with propertyName preset to 'expected'.
 *
 * @param values - The array of values to convert.
 * @returns {object[]} An array of objects with the property 'expected' and corresponding values.
 *
 * Example usage:
 *   toExpectedObjectArray([true, false]);
 *   // [ { expected: true }, { expected: false } ]
 */
export const toExpectedObjectArray = <T>(values: T[]): { expected: T }[] => toObjectArray<'expected', T>('expected', values);

/**
 * Converts an array of values into an array of objects with the property name 'name'.
 * This is a curried version of toObjectArray with propertyName preset to 'name'.
 *
 * @param values - The array of values to convert.
 * @returns {object[]} An array of objects with the property 'name' and corresponding values.
 */
export const toNameObjectArray = <T>(values: T[]): { name: T }[] => toObjectArray<'name', T>('name', values);

/**
 * Converts an array of values into an array of objects with the property name 'value'.
 * This is a curried version of toObjectArray with propertyName preset to 'value'.
 *
 * @param values - The array of values to convert.
 * @returns {object[]} An array of objects with the property 'value' and corresponding values.
 */
export const toValueObjectArray = <T>(values: T[]): { value: T }[] => toObjectArray<'value', T>('value', values);

/**
 * Converts an array of values into an array of objects with the property name 'key'.
 * This is a curried version of toObjectArray with propertyName preset to 'key'.
 *
 * @param values - The array of values to convert.
 * @returns {object[]} An array of objects with the property 'key' and corresponding values.
 */
export const toKeyObjectArray = <T>(values: T[]): { key: T }[] => toObjectArray<'key', T>('key', values);

/**
 * Converts an array of values into an array of objects with the property name 'options'.
 * This is a curried version of toObjectArray with propertyName preset to 'options'.
 *
 * @param values - The array of values to convert.
 * @returns {object[]} An array of objects with the property 'options' and corresponding values.
 */
export const toOptionsObjectArray = <T>(values: T[]): { options: T }[] => toObjectArray<'options', T>('options', values);

/**
 * Converts an array of values into an array of objects with the property name 'defaultValue'.
 * This is a curried version of toObjectArray with propertyName preset to 'defaultValue'.
 *
 * @param values - The array of values to convert.
 * @returns {object[]} An array of objects with the property 'defaultValue' and corresponding values.
 */
export const toDefaultValueObjectArray = <T>(values: T[]): { defaultValue: T }[] => toObjectArray<'defaultValue', T>('defaultValue', values);

/**
 * Combines two arrays of objects into a single array of objects, merging each pair of objects by index.
 * The resulting array has objects with the combined properties of both input types.
 *
 * @param arr1 - The first array of objects.
 * @param arr2 - The second array of objects.
 * @returns {(T & U)[]} An array of objects with merged properties from both arrays.
 *
 * Example usage:
 *   addObjectArrays([{ a: 1 }], [{ b: 2 }]); // [{ a: 1, b: 2 }]
 */
export function addObjectArrays<T extends object, U extends object>(arr1: T[], arr2: U[]): (T & U)[] {
	const minLength = Math.min(arr1.length, arr2.length);
	return Array.from({ length: minLength }, (_, i) => ({ ...arr1[i], ...arr2[i] }));
}

/**
 * Wraps a value in an array.
 * @param value - The value to wrap.
 * @returns {Array<T>} An array containing the value.
 */
export const toArray = <T>(value: T): T[] => [value];

/**
 * Extracts the first value from an array.
 * @param arr - The array to extract from.
 * @returns {T} The first value.
 */
export const fromArray = <T>(arr: T[]): T => arr[0];
