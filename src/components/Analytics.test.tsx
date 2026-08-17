import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Analytics from './Analytics'

describe('Analytics', () => {
  it('não injeta nenhum script quando VITE_GA_MEASUREMENT_ID não está definido', () => {
    const { container } = render(
      <HelmetProvider>
        <MemoryRouter>
          <Analytics />
        </MemoryRouter>
      </HelmetProvider>,
    )
    expect(container).toBeEmptyDOMElement()
  })
})
