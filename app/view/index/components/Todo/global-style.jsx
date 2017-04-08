import { injectGlobal } from 'styled-components';

export default injectGlobal`
.todo {
  padding: 10px 20px;
  margin-top: -1px;
  border: 1px solid #ddd;
  background: #fff;
  cursor: pointer;
  &:hover {
    background: #fcfcfc;
  }
  & a {
    color: #bbb;
    &:hover {
      color: #2d2d34;
    }
  }
}

.todoList {
  & .complete {
    background: rgba(255, 255, 0, 0.24);
    & span {
      text-decoration: line-through;
      opacity: .3;
    }
  }
}
`;