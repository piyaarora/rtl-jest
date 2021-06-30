import { render, screen, cleanup } from '@testing-library/react'
import Todo from '../Todo'
import renderer from 'react-test-renderer'
afterEach(() => {
    cleanup();
})
test('should render non-completed todo component', () => {
    const todo = { id: 1, title: 'buy fruits', completed: false };
    render(<Todo todo={todo} />)
    const todoEl = screen.getByTestId('todo-1')
    expect(todoEl).toBeInTheDocument()
    expect(todoEl).toHaveTextContent("buy fruits")
    expect(todoEl).not.toContainHTML('<strike>')

})

test('should render completed todo component', () => {
    const todo = { id: 2, title: 'read novel', completed: true };
    render(<Todo todo={todo} />)
    const todoEl = screen.getByTestId('todo-2')
    expect(todoEl).toBeInTheDocument()
    expect(todoEl).toHaveTextContent("read novel")
})

test('matches snapshots', () => {
    const todo = { id: 1, title: 'buy fruits', completed: false };
    const tree = renderer.create(<Todo todo={todo} />).toJSON();
    expect(tree).toMatchSnapshot();
})
