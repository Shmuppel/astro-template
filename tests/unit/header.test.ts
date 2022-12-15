import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/svelte'

// TODO: this one's really not cooperating
import Header from '@components/header.svelte'

test('shows proper heading when rendered', () => {
  render(Header, { myname: 'World' })
  const heading = screen.getByText('Hello World!')
  expect(heading).toBeInTheDocument()
})
