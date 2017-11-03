import { FETCH_NEWS_LIST } from 'NewsList/redux/NewsListAction'
const initialState = { 
  status: null,
  data: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_LIST.REQUEST:
      return {
        ...state,
        status: 'request',
        error: null
      };

    case FETCH_NEWS_LIST.SUCCESS:
      return {
        ...state,
        status: 'success',
        data: action.payload.data
      };

    case FETCH_NEWS_LIST.ERROR:
      return {
        ...state,
        status: 'error',
        error: action.payload.error
      };

    default:
      return state;
  }
}