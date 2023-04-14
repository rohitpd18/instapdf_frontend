const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filterPdf: [...action.payload],
        allPdf: [...action.payload],
      };  

    case "GET_FILTER_VALUE":
        const userFilterValue= document.getElementById('search').value
        const filteredPdf = state.allPdf.filter((ele)=>ele.name.toLowerCase().includes(userFilterValue.toLowerCase()))
        return{
            ...state,
            filterPdf: filteredPdf
        }
      
  }
};

export default FilterReducer;
