export const GlobalActions = {
  setTitle: "SET_TITLE",
  setUserName: "SET_USER_NAME",
  setCategories: "SET_CATEGORIES",
};

const globalInitial = {
  title: "Merhaba",
  userName: "",
};

export const globalReducer = (state = globalInitial, action) => {
  switch (action.type) {
    case GlobalActions.setTitle:
      return { ...state, title: action.payload };

    case GlobalActions.setUserName:
      return { ...state, userName: action.payload };

    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};
