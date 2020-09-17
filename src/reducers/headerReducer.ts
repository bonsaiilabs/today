import {
  Header,
  HeaderChangeAction,
  NOTES_HEADER,
  PRIORITIES_HEADER,
} from "../store/types";

export const initialState: Header = PRIORITIES_HEADER;

export default (state = initialState, action: HeaderChangeAction) => {
  switch (action.type) {
    case PRIORITIES_HEADER:
      return action.type;
    case NOTES_HEADER:
      return action.type;
    default:
      return state;
  }
};
