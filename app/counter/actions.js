export default {
  increment () {
    return {
      type: 'INCREMENT_COUNTER'
    };
  },

  decrement () {
    return { type: 'DECREMENT_COUNTER' };
  }
};
