import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { newDate } from '../../common/dates.js'
import DayView from '../DayView'

describe('DayView', () => {
  it('renders properly', () => {
    const today = newDate(2024, 7, 22)

    render(<DayView events={[]} today={today} />)

    const heading = screen.getByRole('heading', { level: 2 })

    expect(heading).toBeInTheDocument()
  })
})
