import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import ViewHeader from '../ViewHeader'

describe('ViewHeader', () => {
  it('renders properly', () => {
    const action = () => {}

    render(<ViewHeader header="Header" prevAction={action} thisAction={action} nextAction={action} />)

    const heading = screen.getByRole('heading', { level: 2 })

    expect(heading).toBeInTheDocument()
  })
})
