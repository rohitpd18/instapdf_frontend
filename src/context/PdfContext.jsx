import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "../axios";
import reducer from "../reducers/PdfReducer";

const AppContext = createContext();

const initialState = {
  isLoading: false,
  idError: false,
  pdf: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fectchPdf = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get("/api/pdf");
      const data = res.data.data;
      dispatch({ type: "MY_DATA", payload: data });
    } catch (err) {
      dispatch({ type: "API_ERROR" });
    }
  };

  useEffect(() => {
    fectchPdf();
  }, []);

  return (
    <>
      <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
    </>
  );
};

// custom hooks
const usePdfContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, usePdfContext };
