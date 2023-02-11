import React from "react"

function Input({}, ref) {
    return <input ref={ref} type='text' placeholder='Enter something' />
}

export default React.forwardRef(Input);