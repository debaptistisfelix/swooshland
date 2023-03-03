import { useState } from "react";

function useInputState(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);
    }


    return [value, handleChange];
}

export default useInputState;