const pdfReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING": 
      return {
        ...state,
        isLoading: true,
      };

    case "API_ERROR":
      return {
        ...state,
        isError: ture,
        isLoading: false,
      };

    case "MY_DATA":
      return {
        ...state,
        isLoading: false,
        pdf: action.payload,
      };

    case "FILTER_DATA":
        const temp= pdf.filter((e)=>e.name===action.payload)
      return {
        ...state,
        pdf: temp
      };
  }
};

export default pdfReducer;
