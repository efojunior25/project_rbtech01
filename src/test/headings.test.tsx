import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'

const rotas = ['/', '/experiencia', '/competencias', '/sobre', '/contato']

describe('Acessibilidade: hierarquia de headings', () => {
  it.each(rotas)('a página "%s" tem exatamente um h1 e nenhum salto de nível', (rota) => {
    render(
      <MemoryRouter initialEntries={[rota]}>
        <App />
      </MemoryRouter>,
    )

    const headings = screen.getAllByRole('heading')
    const niveis = headings.map((h) => Number(h.tagName[1]))

    expect(niveis.filter((n) => n === 1)).toHaveLength(1)
    expect(niveis[0]).toBe(1)

    for (let i = 1; i < niveis.length; i++) {
      expect(niveis[i] - niveis[i - 1]).toBeLessThanOrEqual(1)
    }
  })
})
