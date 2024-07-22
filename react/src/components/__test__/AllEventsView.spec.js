import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import AllEventsView from '../AllEventsView'

describe('AllEventsView', () => {
  it('renders properly', () => {
    render(<AllEventsView events={[]} />)

    const heading = screen.getByRole('heading', { level: 2 })

    expect(heading).toBeInTheDocument()
  })
})
