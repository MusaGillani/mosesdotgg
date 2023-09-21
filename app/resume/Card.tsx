import React, { PropsWithChildren } from "react";
import Text from "./Text";

const Card: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({ children, title }) => {
  return (
    <div className="rounded-xl bg-white p-4">
      <Text type={"primary"}>{title}</Text>
      {children}
    </div>
  );
};

export default Card;
