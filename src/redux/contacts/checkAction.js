const isPendingAction = action =>
  typeof action.type === 'string' && action.type.endsWith('/pending');

const isRejectedAction = action => action.type.endsWith('/rejected');

export { isPendingAction, isRejectedAction };
