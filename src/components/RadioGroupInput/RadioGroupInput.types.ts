/**
 * @file Types and utility functions for RadioGroup input component
 * @module RadioGroupInput
 */

import type { PrimitiveStringable } from '@emperorrag/utilities';

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
