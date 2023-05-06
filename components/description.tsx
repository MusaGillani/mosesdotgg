import { roboto } from "@/fonts";

const Description: React.FC = () => {
  return (
    <div className={`text-xl ${roboto.className} mt-10`}>
      <p>
        I&apos;m an associate software engineer at Devsinc, graduated with a
        Bachelor&apos;s in Computer Engineering from GIK
      </p>
      <p>
        I love to learn about software and always on the hunt for new Open
        Source Projects to play around with. Eager to work in teams or solo.
      </p>
      <p>
        Currently working with{" "}
        <a
          href="https://nestjs.org"
          className="font-bold text-discord-purple"
          target="_blank"
        >
          @Next JS
        </a>{" "}
        and learning about React Server Components and Island Architecture
        paradigm
      </p>
    </div>
  );
};

export default Description;
