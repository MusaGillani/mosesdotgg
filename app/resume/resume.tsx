import React from "react";
import styles from "./pdf.modules.css";

function Resume() {
  return (
    <div className={styles.a4}>
      {/* content */}
      <div className="grid grid-cols-3 gap-4 bg-[#EFEFEF] p-[20px] text-black">
        <div className="col-span-1 border border-red-400">
          <p>left side</p>
          {/* 
              left side with 
                  image,
                  contact details     
                  achievements,
                  hobbies
          */}
        </div>

        <div className="col-span-2  border border-red-400">
          <p>right side</p>
          {/* 
            right side - main section
              Profile/Bio
              Experience
              Projects
              Education
              skills
          */}
        </div>
      </div>
    </div>
  );
}

export default Resume;
