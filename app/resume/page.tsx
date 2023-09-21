import React from "react";
import Resume from "./resume";
// render PDF and also show download button
function Page() {
  return (
    <div className="h-full min-h-screen max-w-full bg-white p-5">
      <Resume />;
    </div>
  );
}

export default Page;
