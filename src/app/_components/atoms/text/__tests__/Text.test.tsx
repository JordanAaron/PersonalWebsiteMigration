import { render, screen } from '@testing-library/react'

import { Text } from '../Text'

describe('Text Component', () => {
	const testData = 'Test text'

	test('using the body type renders text with the body styles', () => {
		render(<Text type="body">{testData}</Text>)

		const text = screen.getByText(testData)
		expect(text).toHaveClass('bodyText')
	})

	test('using the heading type renders a text with the heading styles', () => {
		render(<Text type="heading">{testData}</Text>)

		const text = screen.getByText(testData)
		expect(text).toHaveClass('headingText')
	})
})
