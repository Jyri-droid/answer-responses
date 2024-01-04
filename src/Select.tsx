import React from 'react'

const Select = (props: any) => {
    return (
        <fieldset>
            <label htmlFor={props.label}>Select correct answer</label>
            <select
            /*name={}
            id={}
            onChange={}
            value={} */
            >
                <option value="default" disabled>
                - Select -
                </option>
                {props.options.map((element) => <option>{element}</option>)}
                <optgroup label="Already selected">
                    <option>
                     Choice 1
                    </option>
                </optgroup>
            </select>
        </fieldset>
    )
}

export default Select;