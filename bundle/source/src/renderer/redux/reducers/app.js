import { updateObject } from '@root/utils'

const defaultState = {
  count: 0,
}

const reducers = {}

reducers['TEST'] = (state, action) => updateObject(defaultState, {})

export default function reducer(state, action) {
  state = state || defaultState
  const handler = reducers[action.type]
  return handler ? handler(state, action) : state
}
