import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import mySaga from '../sagas'

const sagaMiddleware = createSagaMiddleware();

const initialState = {
  counter: 0,
}

/**
 * best-pratices 
 * - Avoid having only one reducer.
 *   + So in store.js all you need to do is combine your different reducers.
 * - Proxy access to the state
 *   + you need to allow your components to access the state via selector.
 * - Prefix the name of your actions
 *   + Actions are in uppercase letters separated by ’_’. Here an example with this action: SET_USERS.
 * - Keep the immutability and readability of your reducers
 *   + const newState = {...state,
 * - Do not use the default case 
 *   + Avoid functional use for default case: switch{ default: return { value: 'bar' } }
 * - Use custom middlewares
 *   + Avoids code duplication.
 * - Avoid redux related rerender
 *   + re-render caused by the use of redux really has to be prevented
 * - Do not create a reference in the selector
 *   + const defaultUser = {}
 * - Do not transform your data in the components
 * - Don’t use useReducer for your business data
 */

function counter(state = initialState, action) {
  switch (action.type) {
  case 'INCREMENT':
    return {...state,counter: state.counter + 1};
  case 'DECREMENT':
    return {...state,counter: state.counter - 1};
  default:
    // console.log('a c t i o n: ',action.type)
    return state;
  }
}

/*
function logger(store) {
  return function wrapDispatchToAddLogging(next) {
    return function dispatchAndLog(action) {
      console.log('dispatching', action)
      let result = next(action)
      console.log('next state', store.getState())
      return result
    }
  }
}
*/
const logger = store => next => action => {
  // agrupamos lo que vamos a mostrar en
  // consola usando el tipo de la acción
  console.group(action.type);
  // mostramos el estado actual del store
  console.debug('current state', store.getState());

  // mostramos la acción despachada
  console.debug('action', action);

  // empezamos a contar cuanto se tarda en
  // aplicar la acción
  console.time('duration');

  // pasamos la acción al store
  next(action);

  // terminamos de contar
  console.timeEnd('duration');

  // mostramos el estado nuevo
  console.debug('new state', store.getState());
  // terminamos el grupo
  console.groupEnd();
};

const mainStore = createStore(counter,applyMiddleware(logger,sagaMiddleware));

//console.log(mySaga);
sagaMiddleware.run(mySaga);

mainStore.subscribe(() => {
  console.log(mainStore.getState())
});



export default mainStore;