
import Bar from "./Bar";
import Header from '../../components/Header';




const BarChart = () => {
  // const theme = useTheme();
  return (
    <div>
      <Header title={"Bar Chart"} subTitle={"The minimum wage in Germany, France and Spain (EUR/month)"} />
      <Bar />
    </div>
  );
};

// @ts-ignore
export default BarChart;
