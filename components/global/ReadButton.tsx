import "./style.css";
import { Tajawal } from "next/font/google";

const cairo = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800", "900"],
  display: "swap",
});
const ReadButton = ({ children }: any) => {
  return (
    <button
      className={`${cairo.className}read-button text-xl py-3 px-10 font-semibold bg-[#044123] text-white mt-3 z-30`}
    >
      {children}
    </button>
  );
};

export default ReadButton;
