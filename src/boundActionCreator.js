import store from './store/store';
const boundActionCreator = (type, payload) => {
  store.dispatch({
    type,
    ...payload
  });
};
export default boundActionCreator;
