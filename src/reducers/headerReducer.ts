import {
  Header,
  HeaderChangeAction,
  NOTES_HEADER,
  GOAL_HEADER,
} from "../store/types";

export const initialState: Header = GOAL_HEADER;

export default (state = initialState, action: HeaderChangeAction) => {
  switch (action.type) {
    case GOAL_HEADER:
      return action.type;
    case NOTES_HEADER:
      return action.type;
    default:
      return state;
  }
};
