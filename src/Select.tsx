import React from 'react'

const Select = (props: any) => {
    return (
        <fieldset>
            <label htmlFor={props.label}>Valitse oikea vastaus</label>
            <select
            /*name={}
            id={}
            onChange={}
            value={} */
            >
                <option value="default" disabled>
                - Valitse -
                </option>
                {props.options.map((element) => <option>{element}</option>)}
                <optgroup label="Jo valittu">
                    <option>
                     Valinta 1
                    </option>
                </optgroup>
            </select>
        </fieldset>
    )
}

export default Select;