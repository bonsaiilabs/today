import { Header, HeaderChangeAction } from "../store/types";

export function changeHeader(header: Header): HeaderChangeAction {
  return {
    type: header,
  };
}
