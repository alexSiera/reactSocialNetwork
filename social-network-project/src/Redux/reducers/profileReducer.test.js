import profileReducer, { actions } from './profileReducer';
// 1. Test data
const initialState = {
  posts: [
    {
      id: 1,
      message: 'Hi how are you ?',
      likesCount: 12,
    },
    {
      id: 2,
      message: "It's my first post",
      likesCount: 11,
    },
    {
      id: 3,
      message: 'Blabla',
      likesCount: 13,
    },
    {
      id: 4,
      message: 'Dada',
      likesCount: 15,
    },
  ],
};

test('length of post should be incremented', () => {
  // 2. Action
  const action = actions.addPostAC('It-kamasutra');
  const newState = profileReducer(initialState, action);
  // 3. Expectation
  expect(newState.posts).toHaveLength(5);
});
test('message of new post should be It-kamasutra', () => {
  // 2. Action
  const action = actions.addPostAC('It-kamasutra');
  const newState = profileReducer(initialState, action);
  // 3. Expectation
  expect(newState.posts[4].message).toBe('It-kamasutra');
});
test('after deleting length of messages should be decrement', () => {
  // 2. Action
  const action = actions.deletePostAC(1);
  const newState = profileReducer(initialState, action);
  // 3. Expectation
  expect(newState.posts).toHaveLength(3);
});

test(`after deleting length of messages massive should't be decrement if id is incorrect`, () => {
  // 2. Action
  const action = actions.deletePostAC(1000);
  const newState = profileReducer(initialState, action);
  // 3. Expectation
  expect(newState.posts).toHaveLength(4);
});
