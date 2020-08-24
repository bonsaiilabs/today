import React from 'react';

import {cleanup, render, screen } from '@testing-library/react'
import {ToDoApp} from "./ToDoApp";
import userEvent from '@testing-library/user-event'


afterEach(cleanup)

describe('When the page initially loaded', () => {
    it('renders the "My Dashboard" title on the main page', () => {
        const {queryByText} = render(<ToDoApp/>)
        expect(queryByText(/My Dashboard/i)).toBeInTheDocument()
    })

    it('renders the form where todo can be added', () => {
        const {container, getByPlaceholderText, getByRole} = render(<ToDoApp/>)
        expect(container.querySelector('#todo-form')).toBeVisible()
        expect(getByPlaceholderText('Enter your task')).toBeVisible()
        expect(getByRole('button')).toBeVisible()
    })

    it('renders all the todos in a section', () => {
        const {container} = render(<ToDoApp/>)
        expect(container.querySelector('#all-todos')).toBeVisible()
    })
})

describe('When a user interacts with the form', () => {
    // https://github.com/testing-library/user-event#typeelement-text-options
    it('fills the text box when user provides the input', () => {
        render(<ToDoApp/>)

        const todo: string = "Finish the test";
        userEvent.type(screen.getByRole('textbox'), todo)
        expect(screen.getByRole('textbox')).toHaveValue(todo)
    })

    it.skip('adds a todo when a user clicks on the "ADD" button', () => {
    })
})