import styles from "./PromptSection.module.css";
import ideaIcon from "../../../asset/icons8-idea-64.png";

const prompt = [
  {
    id: 1,
    prompt:
      "Explain the key rules of rugby. Start with the basics and go step-by-step.",
    icon: ideaIcon,
  },
  {
    id: 2,
    prompt:
      "Teach me the concept of game theory in simple terms, including real-world examples.",
    icon: ideaIcon,
  },
  {
    id: 3,
    prompt:
      "Draft a packing list for my weekend fishing and camping trip in Yosemite with friends. Make a table for the list, with a column for if I have the item yet or not. Draft an email with the table included.",
    icon: ideaIcon,
  },
  {
    id: 4,
    prompt:
      "I have a masters in fine arts that I'd like to apply for a museum curator role. Create a one-pager walking me through the job application process. ",
    icon: ideaIcon,
  },
];

const PromptSection = () => {
  return (
    <div className={styles["prompt-main"]}>
      {prompt.map((p) => (
        <div className={styles["prompt"]} key={p.id}>
          <p>{p.prompt}</p>
          <div className={styles["icon"]}>
            <img src={p.icon} alt="icon"></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PromptSection;