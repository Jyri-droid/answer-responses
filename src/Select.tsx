import React from 'react'

const Select = (props: any) => {
    const notSelectedOptions: string[] = props.options.filter((element: string) => !props.selection.includes(element));
    const alreadySelectedOptions: string[] = props.options.filter((element: string) => props.selection.includes(element));
    const currentValue: string = props.selection[props.id] || "default";
    return (
        <fieldset>
            <label htmlFor={props.id}>Answer</label>
            <select
            name={props.id}
            id={props.id}
            value={currentValue}
            onChange={props.onChange}
          >
                <option value="default" disabled>
                - Select -
                </option>
                {notSelectedOptions.length > 0 && <optgroup label="Not selected yet">
                    {notSelectedOptions.map((element: string, index: number) => <option value={element} key={`selectedOptions ${index}`}>{element}</option>)}
                </optgroup>}
                {alreadySelectedOptions.length > 0 && <optgroup label="Already selected">
                    {alreadySelectedOptions.map((element: string, index: number) => <option value={element} key={`notSelectedOptions ${index}`}>{element}</option>)}
                </optgroup>}
            </select>
        </fieldset>
    )
}

export default Select;