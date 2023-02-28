import ReferCard from "/components/referal/referCard";
import Banner from "/components/referal/banner";
import StepsCardSec from "/components/referal/stepsCard";
import FaqSec from "/components/referal/faqSec";

const Referal = () => {
  let cardData = [
    {
      svgType: "sign_up",
      heading: "Get your link",
      desc: "Join BLC-Exchange and get your unique tracking link. You'll earn for customers who sign up through this link.",
    },
    {
      svgType: "search_input",
      heading: "Share your link",
      desc: "Share your links via Telegram, Twitter, Emails or anyway you want. The more you promote, the more you earn.",
    },
    {
      svgType: "rewards_rs",
      heading: "Earn when they trade!",
      desc: "You earn 50% as reward of every trading fee paid by your friends. Even while you're asleep!",
    },
  ];
  return (
    <>
      <Banner />
      <ReferCard />
      <StepsCardSec cardData={cardData} />
      <FaqSec/>
    </>
  );
};

export default Referal;
