import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/FilterReducer";
import { usePdfContext } from "./PdfContext";

const FilterContext = createContext();

const initialState = {
  filterPdf: [],
  allPdf: [],
  filterVal: ""
};

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {pdf}= usePdfContext()

  // get filter value
  const filter= ()=>{
    dispatch({type: "GET_FILTER_VALUE", payload: pdf})
  }

  useEffect(() => {
    dispatch({type: "LOAD_FILTER_PRODUCTS", payload: pdf})
  }, [pdf]);


  // // Filter pdf
  // useEffect(()=>{
  //   dispatch({type: "FILTER_PDF",payload: pdf})
  //   console.log("hii");
  // }, [state.filterVal])

  return (
    <>
      <FilterContext.Provider value={{ ...state, filter }}>
        {children}
      </FilterContext.Provider>
    </>
  );
};

// custom hooks
const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterProvider, FilterContext, useFilterContext };
