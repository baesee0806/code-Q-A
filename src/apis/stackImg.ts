import HTML from "../assets/images/HTML.png";
import CSS from "../assets/images/CSS.png";
import JS from "../assets/images/JS.png";
import TS from "../assets/images/TS.png";

export const stackImg = (stack: string) => {
  if (stack === "HTML") {
    return HTML;
  }
  if (stack === "CSS") {
    return CSS;
  }
  if (stack === "JS") {
    return JS;
  }
  if (stack === "TS") {
    return TS;
  }
};
