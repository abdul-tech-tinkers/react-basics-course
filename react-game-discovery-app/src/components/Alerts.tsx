import React, { ReactNode } from "react";
interface Props {
  children: ReactNode; // you can pass html content as well to Alert componentn
  /**
   *     <Alerts>
        Hello <b>World</b>
      </Alerts>
   */
  color?: "primary" | "warning";
  onClose: () => void;
}
const Alerts = ({ children, color = "primary", onClose }: Props) => {
  return (
    <div
      className="alert alert-primary alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        onClick={onClose}
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Alerts;
