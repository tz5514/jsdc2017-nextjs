export const FETCH_NEWS_LIST = {
  REQUEST: 'FETCH_NEWS_LIST.REQUEST',
  SUCCESS: 'FETCH_NEWS_LIST.SUCCESS',
  ERROR: 'FETCH_NEWS_LIST.ERROR'
} 

export default {
  fetchNewsList: (page) => async(dispatch) => {
    dispatch({ type: FETCH_NEWS_LIST.REQUEST });
    try {
      const response = await fetch(`${API_DOMAIN}/api/news/list/${page}`);
      const data = await response.json();
      dispatch({ 
        type: FETCH_NEWS_LIST.SUCCESS, 
        payload: { data }
      });
    } catch (error) {
      dispatch({ 
        type: FETCH_NEWS_LIST.ERROR,
        payload: { error }
      });
    }
  }
}
