import React from "react";

export const FavoritesContext = React.createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
});

export default function FavoritesContextProvider({ children }) {
    const [favorites, setFavorites] = React.useState([]);

    const addFavoriteHandler = (id) => {
        setFavorites((prevFavorites) => {
            return prevFavorites.concat(id);
        });
    };

    const removeFavoriteHandler = (id) => {
        setFavorites((prevFavorites) => {
            return prevFavorites.filter((favorite) => favorite !== id);
        });
    };

    const context = {
        ids: favorites,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
    };

    return <FavoritesContext.Provider value={context}>{children}</FavoritesContext.Provider>;
}
