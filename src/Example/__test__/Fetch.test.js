// __tests__/fetch.test.js
import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Fetch from '../Fetch'

const server = setupServer(
    rest.get('/comments', (req, res, ctx) => {
        return res(ctx.json({ comments: 'hello there' }))
    })
)


beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('loads and displays comments', async () => {
    render(<Fetch url="/comments" />)

    fireEvent.click(screen.getByText('Load comments'))

    await waitFor(() => screen.getByRole('heading'))

    expect(screen.getByRole('heading')).toHaveTextContent('hello there')
    expect(screen.getByRole('button')).toBeDisabled()
})

test('handles server error', async () => {
    server.use(
        rest.get('/comments', (req, res, ctx) => {
            return res(ctx.status(500))
        })
    )

    render(<Fetch url="/comments" />)

    fireEvent.click(screen.getByText('Load comments'))

    await waitFor(() => screen.getByRole('alert'))

    expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!')
    expect(screen.getByRole('button')).not.toBeDisabled()
})