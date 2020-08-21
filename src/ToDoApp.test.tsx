import React from 'react';

import {cleanup, render} from '@testing-library/react'
import {ToDoApp} from "./ToDoApp";

afterEach(cleanup)

it('renders the "My Dashboard" title on the main page', ()=> {
    const {queryByText} = render(<ToDoApp/>)
    expect(queryByText(/My Dashboard/i)).toBeInTheDocument()
})