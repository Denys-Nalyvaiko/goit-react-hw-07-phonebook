const handlePending = state => ({
  ...state,
  isLoading: true,
});

const handleFulfilled = state => ({
  ...state,
  isLoading: false,
  error: null,
});

const handleFetchContactsFulfilled = (state, { payload }) => ({
  ...state,
  list: [...payload],
});

const handleAddContactFulfilled = (state, { payload }) => ({
  ...state,
  list: [...state.list, { ...payload }],
});

const handleDeleteContact = (state, { payload }) => ({
  ...state,
  list: state.list.filter(({ id }) => id !== payload.id),
});

const handleRejected = (state, { payload }) => ({
  ...state,
  error: payload,
  isLoading: false,
});

export {
  handlePending,
  handleFulfilled,
  handleFetchContactsFulfilled,
  handleAddContactFulfilled,
  handleDeleteContact,
  handleRejected,
};
