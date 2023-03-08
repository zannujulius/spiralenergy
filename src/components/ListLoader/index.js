import React from "react";
import "./styles.css"

const Table = () => {
  return (
    <table>
      <tbody>
        {Array(4)
          .fill()
          .map((_, index) => (
            <tr>
              <td class="td-2">
                <span></span>
              </td>
              <td class="td-3">
                <span></span>
              </td>
              <td class="td-4"></td>
              <td class="td-5">
                <span></span>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
