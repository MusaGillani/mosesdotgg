import React, { PropsWithChildren } from "react";
import Text from "./Text";

const Card: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({ children, title }) => {
  return (
    <div className="rounded-xl bg-white px-4 py-2.5">
      <Text type={"primary"} size="xl">
        {title}
      </Text>
      {children}
    </div>
  );
};

export default Card;
