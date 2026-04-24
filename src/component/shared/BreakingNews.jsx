import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  const news = [
  {
    _id: "1",
    title: "Breaking News: Major Event Unfolds in the City",
  },
  {
    _id: "2",
    title: "Breaking News: New Policy Announced by the Government",
  },
  {
    _id: "3",
    title: "Breaking News: Sports Team Wins Championship",
  },
];

  return (
    <div className="flex justify-between gap-4 px-2 container mx-auto py-4 bg-[#F3F3F3]">
      <button className="px-4 py-2 bg-[#D72050] text-white">Latest</button>
      <Marquee pauseOnHover={true} speed={100}>
        {
            news.map(n => <span key={n._id}>{n.title}</span>)
        }
      </Marquee>
    </div>
  );
};

export default BreakingNews;
