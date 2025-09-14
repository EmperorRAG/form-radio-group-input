'use client';

import { RadioGroup } from '@radix-ui/themes';
import type { RadioGroupInputProps } from './RadioGroupInput.interfaces';

export default function RadioGroupInput({
	props: {
		input: { name, key, defaultValue, options },
	},
}: RadioGroupInputProps) {
	return (
		<RadioGroup.Root key={key} defaultValue={String(defaultValue)} name={name}>
			{options?.map(({ label, value }) => {
				return (
					<RadioGroup.Item key={String(value)} value={String(value)}>
						{label}
					</RadioGroup.Item>
				);
			})}
		</RadioGroup.Root>
	);
}
