import React from 'react'

const Select = (props: any) => {
    return (
        <fieldset>
            <label htmlFor={props.id}>Answer</label>
            <select
            name={props.id}
            id={props.id}
            onChange={props.onChange}
            defaultValue={props.defaultValue}
            >
                <option value="default" disabled>
                - Select -
                </option>
                {props.options.map((element: string, index: number) => <option key={`options ${index}`}>{element}</option>)}
            </select>
        </fieldset>
    )
}

export default Select;

/*                 <optgroup label="Already selected">
                    <option>None</option>
                </optgroup>

                */