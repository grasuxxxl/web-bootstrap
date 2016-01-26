export default {
  loadingStart (payload) {
    return { type: 'LOADING_START', payload };
  },

  loadingSuccess (payload) {
    return { type: 'LOADING_SUCCESS', payload };
  },

  loadingFailure (payload) {
    return { type: 'LOADING_FAILURE', payload };
  }
};
