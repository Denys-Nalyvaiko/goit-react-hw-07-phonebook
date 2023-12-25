const isPendingAction = ({ type }) =>
  typeof type === 'string' && type.endsWith('/pending');

const isFulfilledAction = ({ type }) => type.endsWith('/fulfilled');

const isRejectedAction = ({ type }) => type.endsWith('/rejected');

export { isPendingAction, isFulfilledAction, isRejectedAction };
