import classses from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

export default function Answers() {
  return (
    <div className={classses.answers}>
      <Checkbox className={classses.answer} text="Test Answer" />
    </div>
  );
}
