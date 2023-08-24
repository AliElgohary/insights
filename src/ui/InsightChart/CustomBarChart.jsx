import styled from "styled-components";
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import UserSVG from "../SVG/UserSVG";

function generateRandomData() {
  const data = [];
  for (let i = 0; i < 47; i++) {
    data.push({
      name: `Page ${i + 1}`,
      uv: Math.floor(Math.random() * 5000),
      pv: Math.floor(Math.random() * 5000),
      amt: Math.floor(Math.random() * 5000),
    });
  }
  return data;
}

const HeaderContainer = styled.div`
  padding: 30px;
`;

const Header = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  color: #000;
  font-family: Karla;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Headertext = styled.span`
  color: #000;
  font-family: Karla;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ChartContainer = styled.div`
  border-radius: 10px;
  padding: 30px;
`;

function CustomisedChart() {
  const testData = generateRandomData();

  return (
    <div>
      <HeaderContainer>
        <Header>
          <span>100,000</span>
          <UserSVG />
        </Header>

        <Headertext>Participants</Headertext>
      </HeaderContainer>

      <ChartContainer style={{ height: "500px" }}>
        <ResponsiveContainer>
          <BarChart data={testData}>
            <Bar dataKey="uv" fill="#FED500" radius={[11, 11, 0, 0]} />
            <Tooltip label={testData[0].name}
              contentStyle={{
                color: "black",
                backgroundColor: "#fff",
                border: "1px solid #D6D6D6",
                width: "244px",
                height: "123px",
                borderRadius: "13px",
                boxShadow: "8px 8px 8px 0px rgba(0, 0, 0, 0.25)",
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}

export default CustomisedChart;
