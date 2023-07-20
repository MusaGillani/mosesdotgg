import { cn } from "@/lib/utils";
import { roboto } from "@/fonts";

const Description: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("mt-10 text-3xl", roboto.className, className)}>
      <p>
        I&apos;m an associate software engineer at Devsinc, graduated with a
        Bachelor&apos;s in Computer Engineering from GIK
      </p>
      <br />
      <p>
        I love to learn about software and always on the hunt for new Open
        Source Projects to play around with. Eager to work in teams or solo.
      </p>
      <br />
      <p>
        Currently working with{" "}
        <a
          href="https://nextjs.org"
          className="rounded-3xl text-center font-bold text-discord-purple transition ease-in-out dark:text-white"
          target="_blank"
        >
          @Next.js
        </a>{" "}
        and learning about React Server Components and Island Architecture
        paradigm
      </p>
      <br />
      <br />
    </div>
  );
};

export default Description;
