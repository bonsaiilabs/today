import React from 'react';

import {cleanup, render} from '@testing-library/react'
import {ToDoApp} from "./ToDoApp";

afterEach(cleanup)

describe('When the page initially loaded', () => {
    it('renders the "My Dashboard" title on the main page', ()=> {
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