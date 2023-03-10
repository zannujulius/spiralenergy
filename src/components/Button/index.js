import { css } from "@emotion/react";
import { MoonLoader } from "react-spinners";
import { themeColor } from "../../constant/color";
export const Button = ({
  bg,
  text,
  color,
  loading,
  loaderColor,
  loaderSize,
  onClick,
}) => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  // console.log(loading, "process");
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="w-100 h-[40px] flex items-center justify-center cursor-pointer rounded bg-gray-900"
      style={{
        // background: bg || themeColor.black,
        width: "100%",
      }}
    >
      {loading ? (
        <MoonLoader
          css={override}
          color={loaderColor || themeColor.white}
          size={loaderSize || 20}
          speedMultiplier={1}
        />
      ) : (
        <div
          className="font-light "
          style={{
            color: color || themeColor.white,
          }}
        >
          {text}
        </div>
      )}
    </button>
  );
};
