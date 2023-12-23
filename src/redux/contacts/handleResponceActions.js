const handlePending = state => ({
  ...state,
  isLoading: true,
});

const handleFetchContactsFulfilled = (state, { payload }) => ({
  ...state,
  list: [...payload],
  isLoading: false,
  error: null,
});

const handleAddContactFulfilled = (state, { payload }) => ({
  ...state,
  list: [...state.list, { ...payload }],
  isLoading: false,
  error: null,
});

const handleDeleteContact = (state, { payload }) => ({
  ...state,
  list: state.list.filter(({ id }) => id !== payload.id),
  isLoading: false,
  error: null,
});

const handleRejected = (state, { payload }) => ({
  ...state,
  error: payload,
  isLoading: false,
});

export {
  handlePending,
  handleFetchContactsFulfilled,
  handleAddContactFulfilled,
  handleDeleteContact,
  handleRejected,
};
