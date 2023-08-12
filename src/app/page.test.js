import { render } from '@testing-library/react'
import Home from './page'

describe('Home', () => {
  test('Render app', () => {
    render(<Home />)
  })
})
