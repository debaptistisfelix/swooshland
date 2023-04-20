import { useState, createContext } from "react";


export const AnimationContext = createContext();

export function AnimationProvider(props) {
    const [cartAnim, setCartAnim] = useState(false);

    const [wishAnim, setWishAnim] = useState(false)


    return (
        <AnimationContext.Provider value={{ cartAnim, setCartAnim, wishAnim, setWishAnim }}>
            {props.children}
        </AnimationContext.Provider>
    )
};