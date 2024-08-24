import { useDispatch } from "react-redux";
import { store } from "../store/store.js";

const useAppDispatch: () => typeof store.instance.dispatch = () =>
  useDispatch<typeof store.instance.dispatch>();

export { useAppDispatch };
