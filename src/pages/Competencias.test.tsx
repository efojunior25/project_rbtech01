import { render, screen } from '@testing-library/react'
import Competencias from './Competencias'

describe('Competencias', () => {
  it('lista as principais categorias técnicas do currículo', () => {
    render(<Competencias />)

    ;[
      'Backend',
      'Frontend',
      'Banco de Dados',
      'Cloud / DevOps',
      'Qualidade',
    ].forEach((categoria) => {
      expect(
        screen.getByRole('heading', { name: categoria }),
      ).toBeInTheDocument()
    })
  })

  it('a imagem ilustrativa tem texto alternativo descritivo', () => {
    render(<Competencias />)
    expect(
      screen.getByAltText(/ilustração representando geração de ideias/i),
    ).toBeInTheDocument()
  })
})
