import { createContext, useMemo, useReducer, useEffect } from "react";


const TOGGLE_THEME = "TOGGLE_THEME";
const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";


export const initialState = {
  theme: localStorage.getItem("theme") || "light",
  data: [],
  favorites: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
      case TOGGLE_FAVORITE:
      const itemId = action.payload;
      const isFavorite = state.favorites.includes(itemId);
      const updatedFavorites = isFavorite
        ? state.favorites.filter((fav) => fav !== itemId)
        : [...state.favorites, itemId];
      return {
        ...state,
        favorites: updatedFavorites,
      };
    default:
      return state;
  }
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: TOGGLE_THEME });
  };

  const toggleFavorite = (id) => {
    dispatch({ type: TOGGLE_FAVORITE, payload: id });
  };


  useEffect(() => {
    localStorage.setItem("theme", state.theme);
  }, [state.theme]);


  const contextValue = useMemo(() => {
    return {
      state,
      actions: { toggleTheme, toggleFavorite },
    };
  }, [state]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};
