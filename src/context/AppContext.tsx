import React, { PropsWithChildren, useContext, useReducer } from "react";

export const DATA_CENTER_USER = "@yourpal_user";
export const DATA_CENTER_TOKEN = "@yourpal_token";
export const DATA_CENTER_HUB = "@yourpal_hub"



const defaultContext = {
  user: null,
  isLoggedIn: false,
  newChat: false,
  category: 'Candidate',
  savedResumes: [],
  setSavedResumes: (_savedResumes: any[]) => {},
  changeCategory: (_category: string) => {},
  signIn: (_data: any) => {},
  setNewChat: (_value:boolean) => {},
  signOut: () => {},
  updateUser: (_user: any) => {},
  loadData: () => {},
} as any;

interface AppContextInterface {
  user: any | null;
  isLoggedIn: boolean;
  newChat: boolean;
  category:string;
  savedResumes: any[],
  setSavedResumes: (value: any[]) => void;
  signIn: (data: any) => void;
  signOut: () => void;
  updateUser: (data:  any) => void;
  loadData: () => void;
  setNewChat: (value:boolean) => void;
  changeCategory: (value: string) => void;
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case "update":
      return { ...state, ...action.payload };
    case "reset":
      return { ...state, ...defaultContext };
    default:
      return state;
  }
}

export const AppContext =
  React.createContext<AppContextInterface>(defaultContext);

export const useApp = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, defaultContext);

  const update = (payload: any) => {
    dispatch({ type: "update", payload });
  };

  const signIn = (data: any) => {
    update({
      user: data,
      isLoggedIn: true,
    });
    localStorage.setItem(DATA_CENTER_TOKEN, data.token);
    localStorage.setItem(DATA_CENTER_USER, JSON.stringify(data));
  };

  const signOut = () => {
    localStorage.removeItem(DATA_CENTER_TOKEN);
    localStorage.removeItem(DATA_CENTER_USER);
    update({
      user: null,
      isLoggedIn: false,
    });
  };

  const loadData = () => {
    // let d = localStorage.getItem(DATA_CENTER_USER);
    // if (d) {
    //   signIn(JSON.parse(d));
    //   // update({ user: JSON.parse(d), isLoggedIn: true });
    // }
    let token = localStorage.getItem(DATA_CENTER_TOKEN);
  if (token) {
    // Token exists, fetch user data from local storage
    let userData = localStorage.getItem(DATA_CENTER_USER);
    if (userData) {
      // User data found, sign in the user
      signIn(JSON.parse(userData));
    } else {
      // User data not found, sign out the user
      signOut();
    }
  }
  };

  const updateUser = (data: any) => {
    update({ user: data });
  };



  const setNewChat = (value:any) => {
    update({newChat: value})
  }

  const changeCategory = (value: string) => {
    update({category: value})
  }

  const setSavedResumes = (value: any[]) => {
    update({savedResumes: value})
  }


 


  let value: AppContextInterface = {
    user: state?.user,
    isLoggedIn: state?.isLoggedIn,
    newChat: state?.newChat,
    category: state?.category,
    changeCategory,
    savedResumes: state?.savedResumes,
    setSavedResumes,
    setNewChat,
    signIn,
    signOut,
    updateUser,
    loadData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};