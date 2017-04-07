import Immutable, { Map, List } from 'immutable';
/*
const test = Immutable.fromJS({ a: { b: [10, 20, 30] }, c: 40 }, (key, value) => {
  const isIndexed = Immutable.Iterable.isIndexed(value);
  return isIndexed ? value.toList() : value.toOrderedMap();
});
console.log(test);
*/

export default function createReducer(initialState, handlers) {
  return (State = initialState, action) => {
    let state = State;
    // 转化为 Immutable 类型数据
    if (!Map.isMap(state) && !List.isList(state)) {
      state = Immutable.fromJS(state);
    }
    // 最终数据如果还不是 Immutable 类型,则抛出错误
    if (!Map.isMap(state) && !List.isList(state) && typeof state !== 'string') {
      throw new TypeError('Reducers must return Immutable objects.');
    }
    // Type 存在就输出对应的state
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}
