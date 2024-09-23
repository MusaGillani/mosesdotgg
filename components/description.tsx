import { cn } from "@/lib/utils";
import { roboto } from "@/fonts";

const Description: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("text-xl", roboto.className, className)}>
      <p>
        I&apos;m a software engineer at Auxcube, graduated with a
        Bachelor&apos;s in Computer Engineering from{" "}
        <a
          href="https://giki.edu.pk/"
          className="font-bold text-discord-purple dark:text-teal-900"
          target="_blank"
        >
          GIK
        </a>
      </p>
      <p>
        I love to learn about software and always on the hunt for new Open
        Source Projects to play around with. Eager to work in teams or solo.
      </p>
    </div>
  );
};

export default Description;
