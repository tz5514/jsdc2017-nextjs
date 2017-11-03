export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export default {
  increment: () => ({ type: INCREMENT_COUNTER }),
  decrement: () => ({ type: DECREMENT_COUNTER })
}
