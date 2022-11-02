import { createContext, useContext, useState } from "react";


export const FavoritesContext = createContext();

export const useFavoriteContext = () => useContext(FavoritesContext)

export default function FavoritesProvider({ children }) {
    const [classChange, setClassChange] = useState(false)

    return (
        <FavoritesContext.Provider value={{ classChange, setClassChange }}>
            {children}
        </FavoritesContext.Provider>
    )
}
