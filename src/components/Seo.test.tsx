import { render, waitFor } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import Seo from './Seo'

describe('Seo', () => {
  it('define título, descrição e canonical sem duplicar tags no <head>', async () => {
    render(
      <HelmetProvider>
        <Seo title="Página X" description="Descrição da página X" path="/x" />
      </HelmetProvider>,
    )

    await waitFor(() => expect(document.title).toBe('Página X | Edson Junior'))

    expect(document.querySelectorAll('meta[name="description"]')).toHaveLength(1)
    expect(document.querySelectorAll('meta[property="og:title"]')).toHaveLength(1)
    expect(
      document.querySelector('meta[name="description"]'),
    ).toHaveAttribute('content', 'Descrição da página X')
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://perfilP1.prupru.org/x',
    )
  })
})
