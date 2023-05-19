import React, { useReducer } from 'react';
import { DateRangeInput } from '@datepicker-react/styled'

const initialState = {
    startDate: null,
    endDate: null,
    focusedInput: null,
}

function reducer(state, action) {
    switch (action.type) {
        case 'focusChange':
            return { ...state, focusedInput: action.payload }
        case 'dateChange':
            return action.payload
        default:
            throw new Error()
    }
}

const ExpenseListFilters = ({
    filters,
    setStartEndDate,
    setTextFilter,
    sortByDate,
    sortByAmount
}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleTextChange = (e) => {
        setTextFilter(e.target.value);
    };

    const handleSortChange = (e) => {
        if (e.target.value === 'date') {
            sortByDate();
        } else if (e.target.value === 'amount') {
            sortByAmount();
        }
    };

    return (
        <div className="content-container" style={{ 'marginTop': '3rem' }}>
            <div className="input-group">
                <div className="input-group-item">
                    <input
                        type="text"
                        placeholder="Search expenses"
                        className="text-input"
                        value={filters.text}
                        onChange={handleTextChange}
                    />
                </div>
                <div className="input-group-item" style={{ 'paddingRight': '3rem' }}>
                    <select
                        className="select"
                        value={filters.sortBy}
                        onChange={handleSortChange}
                    >
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                    </select>
                </div>
                <DateRangeInput
                    onDatesChange={data => {
                            dispatch({ type: 'dateChange', payload: data })
                            setStartEndDate(data)
                        }
                    }
                    onFocusChange={focusedInput => dispatch({ type: 'focusChange', payload: focusedInput })}
                    startDate={state.startDate} // Date or null
                    endDate={state.endDate} // Date or null
                    focusedInput={state.focusedInput} // START_DATE, END_DATE or null
                />
                {/* <button style={{ 'marginLeft': '3rem', 'padding': '0 2.7rem' }} className='button button--primary'>Export</button> */}
            </div>
        </div>
    );
};

export default ExpenseListFilters;
