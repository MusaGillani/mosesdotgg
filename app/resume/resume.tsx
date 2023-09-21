import Image from "next/image";
import Text from "./Text";

const debugClass = "border-2 border-red-400 border-dashed";
function Resume() {
  return (
    <div className="mx-auto h-[297mm] w-[210mm] border bg-white">
      {/*main content */}
      <div className="flex gap-4 bg-[#EFEFEF] px-10 py-[20px] text-black">
        <div className={"w-1/3 "}>
          {/* image card */}
          <div className="flex flex-col items-center gap-2 rounded-2xl bg-black py-10">
            <Image
              src="https://avatars.githubusercontent.com/u/62158726?v=4"
              alt="profile image"
              width={150}
              height={150}
              className={" rounded-full border-4 border-solid border-white "}
            />
            <div className="py-2" />
            <p className="text-2xl font-bold text-white">Syed Musa Gillani</p>
            <p className="text-md text-white">Fullstack Engineer</p>
          </div>
          {/* contact details  */}
          <div className="px-2 py-4">
            <Text type={"primary"}>Contact Details</Text>
            <div className="py-0.5" />
            <Text type={"primary"}>Phone: </Text>
            <Text type={"secondary"}>+92 323 9810312</Text>
            <div className="py-0.5" />
            <Text type={"primary"}>Email: </Text>
            <Text type={"secondary"}>musagillaniwork@gmail.com</Text>
            <div className="py-0.5" />
            <Text type={"primary"}>Github: </Text>
            <Text type={"secondary"}>github.com/MusaGillani</Text>
          </div>
          {/* achievements */}
          <div className="px-2 py-4">
            <Text type={"primary"}>Achievements</Text>
            <Text type={"secondary"}>Achievements 1</Text>
            <Text type={"secondary"}>Achievements 2</Text>
            <Text type={"secondary"}>Achievements 3</Text>
          </div>
          {/* hobbies */}
          <div className="px-2 py-4">
            <Text type={"primary"}>Hobbies</Text>
            <Text type={"secondary"}>Gaming</Text>
            <Text type={"secondary"}>Music</Text>
            <Text type={"secondary"}>Horse Riding</Text>
          </div>
        </div>

        {/* right side - main section */}
        <div className={"w-2/3 " + debugClass}>
          {/* 
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
