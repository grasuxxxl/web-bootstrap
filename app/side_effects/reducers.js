import { Effects, loop } from 'redux-loop';

export function fetchDetails (id) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () { resolve({ id }); }, 500);
  });
};

const loadingStart = (state, payload) => {
  return loop(
    { ...state, loading: true },
    Effects.promise(fetchDetails, payload.id)
  );
};

const loadingSuccess = (state, payload) => {
  return {
    ...state,
    loading: false,
    details: payload
  };
};

const loadingFailure = (state, payload) => {
  return {
    ...state,
    loading: false,
    error: payload.message
  };
};

export default function (state, action) {
  switch (action.type) {
    case 'LOADING_START': return loadingStart(state, action.payload);
    case 'LOADING_SUCCESS': return loadingSuccess(state, action.payload);
    case 'LOADING_FAILURE': return loadingStart(state, action.payload);
    default: return state;
  }
};
