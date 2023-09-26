import { PieChart, Pie, Cell, Legend } from 'recharts';
const Statistics = () => {
    const donations = localStorage.getItem('donations');
    const parsed = JSON.parse(donations);
    const your = parsed.length;
    const total = 12 - your;
    // console.log(parsed.length);

    const data = [
        { name: 'Total Donation', value: total }, // Replace with your actual total donation amount
        { name: 'Your Donation', value: your },   // Replace with your actual donation amount
    ];
    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" className='font-bold text-3xl font-inter'>
            {`${(percent * 100).toFixed(1)}%`}
          </text>
        );
      };
    return (
        <div className='flex justify-center mb-44 mt-24'>
            <PieChart width={600} height={600}>
                <Pie
                    data={data}
        
                    paddingAngle={2}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={250}
                    fill="#8884d8"
                    label={renderCustomizedLabel}
                    labelLine={false}
                >
                    {data.map((index) => (
                        <Cell key={index} fill={`#${(Math.random() * 0xFFFFFF << 0).toString(16)}`} />

                    ))}
                    
                </Pie>
                <Legend />
            </PieChart>
        </div >




    );
};

export default Statistics;