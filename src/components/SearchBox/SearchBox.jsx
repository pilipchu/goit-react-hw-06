import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
export default function SearchBox({ value, onFilter }) {
  const dispatch = useDispatch();

  return (
    <div className={css.conte}>
      <label>Find contacts by name</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
