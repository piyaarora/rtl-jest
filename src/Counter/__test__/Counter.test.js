import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import Counter from '../Counter'
import '@testing-library/jest-dom/extend-expect'

let getByTestId;

beforeEach(() => {
    const component = render(<Counter />);
    getByTestId = component.getByTestId
})

afterEach(() => {
    cleanup()
})

test("header renders with correct text", () => {
    const headerEl = getByTestId("header");
    expect(headerEl.textContent).toBe("My Counter")
})

test("initial value of count element should be zero", () => {
    const counterEl = getByTestId("counter");
    expect(counterEl.textContent).toBe("0")
})

test("initial value of input to be 1", () => {
    const inputEl = getByTestId("input");
    expect(inputEl.value).toBe("1")
})

test("add button renders with +", () => {

    const addBtn = getByTestId("add-btn");
    expect(addBtn.textContent).toBe("+")
})

test("minus button renders with -", () => {

    const minusBtn = getByTestId("minus-btn");
    expect(minusBtn.textContent).toBe("-")
})

test("change value of input works correctly", () => {

    const inputEl = getByTestId("input")

    expect(inputEl.value).toBe("1")


    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    expect(inputEl.value).toBe("5")
})

test("clicking on plus button add 1 to counter", () => {

    const addBtnEl = getByTestId("add-btn");
    const counterEl = getByTestId("counter")

    expect(counterEl.textContent).toBe("0")

    fireEvent.click(addBtnEl)
    expect(counterEl.textContent).toBe("1")
})

test("clicking on subract button subract 1 from counter", () => {

    const subtractBtnEl = getByTestId("minus-btn");
    const counterEl = getByTestId("counter")

    expect(counterEl.textContent).toBe("0")

    fireEvent.click(subtractBtnEl)
    expect(counterEl.textContent).toBe("-1")
})

test("changing input val then clicking on add button works correctly", () => {

    const addBtnEl = getByTestId("add-btn");
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");
    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(addBtnEl)
    expect(counterEl.textContent).toBe("5")
})

test("changing input and then clicking to minus button works correctly", () => {

    const subtractBtnEl = getByTestId("minus-btn");
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(subtractBtnEl);
    expect(counterEl.textContent).toBe("-5")
})


test("adding and then subtracting leads to the correct counter number", () => {

    const addBtnEl = getByTestId("add-btn");
    const subtractBtnEl = getByTestId("minus-btn");
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");
    fireEvent.change(inputEl, {
        target: {
            value: "10"
        }
    })
    fireEvent.click(addBtnEl)
    fireEvent.click(addBtnEl)
    fireEvent.click(addBtnEl)
    fireEvent.click(addBtnEl)

    fireEvent.click(subtractBtnEl);
    fireEvent.click(subtractBtnEl);

    expect(counterEl.textContent).toBe("20")

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(addBtnEl)

    fireEvent.click(subtractBtnEl);
    fireEvent.click(subtractBtnEl);
    expect(counterEl.textContent).toBe("15")

})

test("counter contains correct className", () => {

    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");
    const addBtnEl = getByTestId("add-btn");
    const subtractBtnEl = getByTestId("minus-btn");


    expect(counterEl.className).toBe("")
    fireEvent.change(inputEl, {
        target: {
            value: "50"
        }
    })

    fireEvent.click(addBtnEl);
    expect(counterEl.className).toBe("")
    fireEvent.click(addBtnEl);
    expect(counterEl.className).toBe("green")
    fireEvent.click(addBtnEl);
    expect(counterEl.className).toBe("green")
    fireEvent.click(subtractBtnEl);
    fireEvent.click(subtractBtnEl);
    expect(counterEl.className).toBe("")
    fireEvent.click(subtractBtnEl);
    fireEvent.click(subtractBtnEl);
    fireEvent.click(subtractBtnEl);
    fireEvent.click(subtractBtnEl);
    expect(counterEl.className).toBe("red")








})