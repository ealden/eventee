import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import DayView from '../DayView'

describe('DayView', () => {
  it('renders properly', () => {
    render(<DayView />)

    const heading = screen.getByRole('heading', { level: 2 })

    expect(heading).toBeInTheDocument()
  })
})
