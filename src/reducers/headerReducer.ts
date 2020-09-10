import { Header, HeaderChangeAction, NOTES, TODAY } from "../store/types";

export const initialState: Header = TODAY;

export default (state = initialState, action: HeaderChangeAction) => {
  switch (action.type) {
    case TODAY:
      return action.type;
    case NOTES:
      return action.type;
    default:
      return state;
  }
};
