import { render, screen } from '@testing-library/react'
import Home from './Home'

describe('Home', () => {
  it('linka para a página de experiência e de competências', () => {
    render(<Home />)

    expect(
      screen.getByRole('link', { name: /ver toda a experiência/i }),
    ).toHaveAttribute('href', '/experiencia')
    expect(
      screen.getByRole('link', { name: /ver todas as competências/i }),
    ).toHaveAttribute('href', '/competencias')
  })
})
