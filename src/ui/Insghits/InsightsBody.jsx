import styled from "styled-components";
import InsigtsBodyComponent from "./InsigtsBodyComponent";
import DownArrow from "../SVG/DownSVG";
import UpArrow from "../SVG/UpSVG";
import ThinkingSVG from "../SVG/ThinkingSVG";

const InsightsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
`;

const insightsData = [
  {
    arrow: <DownArrow />,
    header: "Signups are slowing down. -5% new than last week",
    content:
      "Tip: Promote more your product online, and make sure to drive as much traffic as possible to the signup form. Here is an article on user acquisition",
  },
  {
    arrow: <UpArrow />,
    header: "Form completion rate is good (20% conversation rate)",
    content:
      "Tip: You could increase conversion rates by asking fewer questions, making sure you are bringing qualified leads to your forms.",
  },
  {
    arrow: <UpArrow />,
    header: "80% of your signups are referrals, congrats!",
    content:
      "You are doing an outstanding job to motivating your users to invite their friends. Make sure to keep engaging with them with email marketing campaigns.",
  },
  {
    arrow: <ThinkingSVG />,
    header: "Growth tips for you to try next",
    content:
      "Have you considered created email flows to remind your subscribers to invite their friends and celebrate referrals milestones? Read this guide on how to do it",
  },
];

function InsightsBody() {
  return (
    <div>
      <InsightsContainer>
        <InsigtsBodyComponent
          arrow={insightsData[0].arrow}
          header={insightsData[0].header}
        />
        <InsigtsBodyComponent
          arrow={insightsData[1].arrow}
          header={insightsData[1].header}
        />
        <InsigtsBodyComponent
          arrow={insightsData[2].arrow}
          header={insightsData[2].header}
        />
        <InsigtsBodyComponent
          arrow={insightsData[3].arrow}
          header={insightsData[3].header}
        />
      </InsightsContainer>
    </div>
  );
}

export default InsightsBody;
