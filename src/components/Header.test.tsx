import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'

describe('Header', () => {
  it('renderiza a navegação com todos os links do site', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )

    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()

    ;['Home', 'Experiência', 'Competências', 'Sobre', 'Contato'].forEach((label) => {
      expect(
        screen.getByRole('link', { name: label }),
      ).toBeInTheDocument()
    })
  })

  it('marca a página atual com aria-current via NavLink', () => {
    render(
      <MemoryRouter initialEntries={['/contato']}>
        <Header />
      </MemoryRouter>,
    )

    const contatoLink = screen.getByRole('link', { name: 'Contato' })
    expect(contatoLink).toHaveAttribute('aria-current', 'page')
  })
})
