import { Font, Document, Page, Text, View, Link } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";

import { achievements } from "@/constants/achievements";
import { education } from "@/constants/education";
import { experiences } from "@/constants/experiences";
import { Fragment } from "react";
import { projects } from "@/constants/projects";
import { skills } from "@/constants/skills";

Font.register({
  family: "cmsy10",
  fontWeight: "normal",
  src: "/fonts/cmsy10.ttf",
});
Font.register({
  family: "slanted",
  fontWeight: "normal",
  src: "/fonts/Computer_Modern_slanted.ttf",
});
Font.register({
  family: "italic",
  fontWeight: "normal",
  src: "/fonts/Computer_Modern_italic.ttf",
});
Font.register({
  family: "roman",
  fontWeight: "normal",
  src: "/fonts/Computer_Modern_roman.ttf",
});
Font.register({
  family: "boldExtended",
  fontWeight: "normal",
  src: "/fonts/computer_bold_extended.ttf",
});

const tw = createTw({
  theme: {
    extend: {
      fontFamily: {
        cmsy: ["cmsy10"],
        slanted: ["slanted"],
        italic: ["italic"],
        roman: ["roman"],
        boldExtended: ["boldExtended"],
      },
    },
  },
});

const MyPdf: React.FC = () => {
  return (
    <Document
      author="Musa Gillni"
      creator="moses.gg"
      language="en"
      subject="Resume"
      title="Resume Musa Gillani"
      pageLayout="singlePage"
    >
      <Page size="A4" style={tw("px-6 py-2 font-roman")}>
        <View style={tw("m-2")}>
          <Text style={tw("text-center font-roman")}>SYED MUSA GILLANI</Text>
        </View>
        <View style={tw("flex flex-row justify-around font-roman")}>
          <Text style={tw("text-lg")}>musagillaniwork@gmail.com</Text>
          <Text style={tw("text-lg")}>+92 (323) 981 0312</Text>
          <Link
            style={tw("text-lg text-black no-underline")}
            src="https://github.com/MusaGillani"
          >
            github.com/MusaGillani
          </Link>
        </View>
        <View>
          <Text style={tw("uppercase text-sm font-roman mt-2")}>Education</Text>
          <View style={tw("border-b-2 mb-2")} />
          <View style={tw("ml-8")}>
            {education.map(({ Degree, Institution, score, tenure }, index) => (
              <Fragment key={`${index}_e`}>
                <Text style={tw("text-sm")}>{Institution}</Text>
                <View style={tw("flex flex-row justify-between")}>
                  <Text style={tw("text-sm")}>
                    {Degree} GPA: {score}
                  </Text>
                  <Text style={tw("text-sm")}>{tenure}</Text>
                </View>
              </Fragment>
            ))}
          </View>
        </View>
        <View>
          <Text style={tw("uppercase text-sm font-roman mt-2")}>
            Professional Experience
          </Text>
          <View style={tw("border-b-2 mb-2")} />
          <View style={tw("ml-8 text-sm")}>
            {experiences.map(
              ({ company, position, tenure, description }, index) => (
                <Fragment key={index}>
                  <Text style={tw("font-roman")}>{company}</Text>
                  <View style={tw("flex flex-row justify-between font-roman")}>
                    <Text>{position}</Text>
                    <Text>{tenure}</Text>
                  </View>
                  {description.map((desc, index) => (
                    <Fragment key={`${index}_d`}>
                      <View
                        style={tw(
                          "ml-5 flex flex-row items-start justify-between gap-x-2"
                        )}
                      >
                        <Text style={tw("mt-0")}>&bull; {desc}</Text>
                      </View>
                    </Fragment>
                  ))}
                </Fragment>
              )
            )}
          </View>
        </View>
        <View>
          <Text style={tw("uppercase text-sm font-roman mt-2")}>Projects</Text>
          <View style={tw("border-b-2 mb-2")} />
          <View style={tw("ml-8")}>
            {projects.map(({ name, desc, github, tech, type }, index) => (
              <Fragment key={`${index}_p`}>
                <View style={tw("flex flex-row gap-x-5 justify-between")}>
                  <Text style={tw("text-sm")}>
                    {name} - {type}
                  </Text>
                  <Text style={tw("text-sm")}>{tech}</Text>
                </View>
                <Link
                  src={`https://${github}`}
                  style={tw("no-underline text-black text-sm")}
                >
                  {github}
                </Link>
                <Text style={tw("text-sm ml-5")}>{desc}</Text>
              </Fragment>
            ))}
          </View>
        </View>
        <View>
          <Text style={tw("uppercase text-sm font-roman mt-2")}>
            Achievements
          </Text>
          <View style={tw("border-b-2 mb-2")} />
          <View style={tw("text-sm ml-8 ")}>
            {achievements.map((text, index) => (
              <Text key={`${index}_a`}>{text}</Text>
            ))}
          </View>
        </View>
        <View>
          <Text style={tw("uppercase text-sm font-roman mt-2")}>Skills</Text>
          <View style={tw("border-b-2 mb-2")} />
          <View style={tw("text-sm ml-8 ")}>
            {Object.entries(skills).map(([key, values], index) => (
              <View
                key={key}
                style={tw("text-sm flex flex-row justify-between")}
              >
                <Text style={tw("w-2/5")}>
                  {index === 0 ? key.split("_").join("/") : key}:
                </Text>
                <Text style={tw("w-3/5")}>
                  {values.map(({ title }) => title).join(", ")}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default MyPdf;
