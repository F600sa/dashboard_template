import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "01 Apr",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "02 Apr",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "03 Apr",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "04 Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "05 Apr",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "06 Apr",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "07 Apr",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  // Rest of the data...
];

function Chart() {
  return (
    <div>
      <div className="bg-white rounded-lg container  w-[1430px] mx-auto sm:w-[400px] shadow-md flex justify-center flex-col">
        <div className="flex flex-row gap-2">
          <div className="py-[20px] pl-[10px] "> Sales</div>
          <div className="h-[15px] w-[15px] pt-[25px] ">
            <img
              src="/assets/images/Vector (2).png"
              alt="Avatar"
              className=" "
            />
          </div>
        </div>
        <ResponsiveContainer width="100%" height={500}>
          <AreaChart
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />

            <YAxis className="sm:hidden" />

            <Tooltip />
            <Area type="monotone" dataKey="pv" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart;
