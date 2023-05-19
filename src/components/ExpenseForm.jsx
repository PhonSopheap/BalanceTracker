import React, { useState, useReducer } from 'react';
import moment from 'moment';
import { DateSingleInput } from '@datepicker-react/styled'

const initialState = {
    date: moment()._d,
    showDatepicker: false,
}
function reducer(state, action) {
    switch (action.type) {
        case 'focusChange':
            return { ...state, showDatepicker: action.payload }
        case 'dateChange':
            return action.payload
        default:
            throw new Error()
    }
}

const ExpenseForm = (props) => {
    const [description, setDescription] = useState(props.expense ? props.expense.description : '');
    const [note, setNote] = useState(props.expense ? props.expense.note : '');
    const [catagory, setCatagory] = useState(props.expense ? props.expense.catagory : '');
    const [amount, setAmount] = useState(props.expense ? (props.expense.amount).toString() : '');
    const [createdAt, setCreatedAt] = useState(props.expense ? moment(props.expense.createdAt) : moment());
    const [state, dispatch] = useReducer(reducer, initialState)
    const [error, setError] = useState('');
    const onDescriptionChange = (e) => {
        const description = e.target.value;
        setDescription(description);
    };
    const onNoteChange = (e) => {
        const note = e.target.value;
        setNote(note);
    };
    const onCatagoryChange = (e) => {
        const catagory = e.target.value;
        setCatagory(catagory);
    };
    const onAmountChange = (e) => {
        const amount = e.target.value;

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            setAmount(amount);
        }
    };
    const onSubmit = (e) => {
        e.preventDefault();

        if (!description || !amount) {
            setError('Please provide description, amount and catagory.');
        } else {
            setError('');
            props.onSubmit({
                description,
                amount: parseFloat(amount, 10) * 100,
                createdAt: createdAt.valueOf(),
                note,
                catagory
            });
        }
    };
    return (
        <form className="form" onSubmit={onSubmit}>
            {error && <p className="form__error">{error}</p>}
            <input
                type="text"
                placeholder="Description"
                autoFocus
                className="text-input"
                value={description}
                onChange={onDescriptionChange}
            />

            <select
                id="catagory-dropdown"
                className="text-input"
                value={catagory}
                onChange={onCatagoryChange}
            >
                <option value="" disabled>Select your option</option>
                <option value="Housing">Housing </option>
                <option value="Utilities">Utilities</option>
                <option value="Food">Food</option>
                <option value="Transportation">Transportation </option>
                <option value="Insurance">Insurance</option>
                <option value="Medical & Healthcare">Medical & Healthcare</option>
                <option value="Investing & Debt Payments"> Investing & Debt Payments</option>
                <option value="Subscriptions">Subscriptions</option>
                <option value="Recreation & Entertainment">Recreation & Entertainment</option>
                <option value="Other">Other</option>

            </select>

            <input
                type="text"
                placeholder="Amount"
                className="text-input"
                value={amount}
                onChange={onAmountChange}
            />
            <DateSingleInput
                onDateChange={data => {
                    dispatch({ type: 'dateChange', payload: data })
                    setCreatedAt(data.date)
                }}
                onFocusChange={focusedInput => dispatch({ type: 'focusChange', payload: focusedInput })}
                date={state.date} // Date or null
                showDatepicker={state.showDatepicker} // Boolean
            />
            <textarea
                placeholder="Add a note for your expense (optional)"
                className="textarea"
                value={note}
                onChange={onNoteChange}
            >
            </textarea>

            <div>
                <button className="button">Save Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;