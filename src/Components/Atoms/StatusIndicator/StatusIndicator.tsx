import React from "react";
import { Item } from "../Container/Container";
import { StatusIndicatorProps } from "./StatusIndicator.types";

export const StatusIndicator: React.FC<StatusIndicatorProps> = (
  props: StatusIndicatorProps
): JSX.Element => {
  return (
    <Item justifyContent="flex-end" variant="status-indicator" gap="4px">
      {props.status ? (
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z"
            fill="#00E8A4"
          />
        </svg>
      ) : (
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z"
            fill="#FF3548"
          />
        </svg>
      )}
      {props.status ? "Open Now" : "Closed"}
    </Item>
  );
};
