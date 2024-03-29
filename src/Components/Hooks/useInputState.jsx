import { useState } from "react";

function useInputState(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);
    }
    function resetInput(e) {
        setValue("");
    }


    return [value, handleChange, resetInput];
}

export default useInputState;