import React, { useContext, useReducer } from 'react';

const defaultContext = {
  text: '',
  page: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'update':
      return {...state, ...action.payload};
    case 'reset':
      return {...state, ...defaultContext};
    default:
      return state;
  }
}

export const SearchContext = React.createContext(defaultContext);

export const useSearch = () => {
  return useContext(SearchContext);
};

export const AppSearch = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultContext);

  const update = payload => {
    dispatch({type: 'update', payload });
  }

  const onChange = (v) => update({text: v})
  const setPageName = (pageName) => update({page: pageName})

  return (
    <SearchContext.Provider value={{onChange, setPageName, text: state?.text, searchPage: state?.page}}>
      {children}
    </SearchContext.Provider>
  );
};