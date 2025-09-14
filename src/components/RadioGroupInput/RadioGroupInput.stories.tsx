import type { Meta, StoryObj } from '@storybook/react-vite';
import RadioGroupInput from './RadioGroupInput';
import { radioGroupInput, radioGroupInputMultiple, radioGroupInputPreselected } from './RadioGroupInput.fixtures';
import { expect, userEvent, within } from 'storybook/test';

const meta = {
	component: RadioGroupInput,
	tags: ['autodocs'],
} satisfies Meta<typeof RadioGroupInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		props: {
			input: radioGroupInput,
		},
	},
	parameters: {
		pageLayout: 'page',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		// Get the radio group
		const radio = canvas.getByRole('radiogroup');
		await expect(radio).toBeVisible();
		// Get all radio options
		const radioOptions = canvas.getAllByRole('radio');
		// Select the first radio option
		await userEvent.click(radioOptions[0]);
		await expect(radioOptions[0]).toBeChecked();
		// If more than one, select the second and check
		if (radioOptions.length > 1) {
			await userEvent.click(radioOptions[1]);
			await expect(radioOptions[1]).toBeChecked();
		}
		// Select the first radio option again and check
		await userEvent.click(radioOptions[0]);
		await expect(radioOptions[0]).toBeChecked();
	},
};

/**
 * Storybook story for demonstrating a radio group input with multiple options.
 *
 * - Renders a radio group using the provided `radioGroupInputMultiple` input props.
 * - Sets the `pageLayout` parameter to 'page'.
 * - In the `play` function:
 *   - Locates the radio group and asserts its visibility.
 *   - Iterates through all radio options, clicking each one and asserting it becomes checked.
 *
 * Useful for testing and showcasing the behavior of radio group inputs in forms.
 */
export const MultipleOptions: Story = {
	args: {
		props: {
			input: radioGroupInputMultiple,
		},
	},
	parameters: {
		pageLayout: 'page',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		// Get the radio group
		const radio = canvas.getByRole('radiogroup');
		await expect(radio).toBeVisible();
		// Get all radio options
		const radioOptions = canvas.getAllByRole('radio');
		// Select each option in turn and check
		for (const radioOption of radioOptions) {
			await userEvent.click(radioOption);
			await expect(radioOption).toBeChecked();
		}
	},
};

/**
 * Storybook story for the RadixUIRadioGroupInput component with a preselected value.
 *
 * This story demonstrates:
 * - Rendering the radio group with a preselected option.
 * - Verifying the radio group and its options are visible and accessible.
 * - Checking that the preselected radio option is correctly marked as checked.
 * - Simulating user interaction by selecting another radio option and verifying its checked state updates accordingly.
 *
 * @example
 * <PreselectedValue />
 *
 * @remarks
 * The `play` function uses testing-library's `within` and `userEvent` utilities to interact with the rendered component and assert its behavior.
 */
export const PreselectedValue: Story = {
	args: {
		props: {
			input: radioGroupInputPreselected,
		},
	},
	parameters: {
		pageLayout: 'page',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		// Get the radio group
		const radio = canvas.getByRole('radiogroup');
		await expect(radio).toBeVisible();
		// Get all radio options
		const radioOptions = canvas.getAllByRole('radio');
		// Find the preselected option
		const preselected = radioOptions.find((radio) => radio.getAttribute('aria-checked') === 'true' && radio.getAttribute('data-state') === 'checked');
		await expect(preselected).toBeChecked();
		// Select another option and check
		const otherOption = radioOptions.find((radio) => radio.getAttribute('aria-checked') !== 'true' && radio.getAttribute('data-state') !== 'checked');
		await expect(otherOption).not.toBeChecked();
		if (otherOption) {
			await userEvent.click(otherOption);
			await expect(otherOption).toHaveAttribute('aria-checked', 'true');
			await expect(otherOption).toHaveAttribute('data-state', 'checked');
			await expect(otherOption).toBeChecked();
		}
	},
};
