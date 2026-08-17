import { render, screen } from '@testing-library/react'
import Experiencia from './Experiencia'

describe('Experiencia', () => {
  it('lista todas as empresas onde o usuário atuou', () => {
    render(<Experiencia />)

    ;[
      'RD Distribuidora',
      'Ibrowse',
      'Mercado Livre',
      'Universidade Potiguar',
      'IFRN',
      'COMSERMEL',
    ].forEach((empresa) => {
      expect(screen.getByText(new RegExp(empresa, 'i'))).toBeInTheDocument()
    })
  })

  it('exibe a seção de certificações', () => {
    render(<Experiencia />)
    expect(
      screen.getByRole('heading', { name: /certificações/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Formação Java Developer/i)).toBeInTheDocument()
  })
})
