import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text 
          x={x} 
          y={y} 
          fill="white"          
          textAnchor={x > cx ? 'start' : 'end'} 
          dominantBaseline="central" 
          className='font-bold font-inter'
        >

            {`${(percent * 100).toFixed(1)}%`}

        </text>
    );
};

const Statistics = () => {
    const donations = localStorage.getItem('donations');
    const parsed = JSON.parse(donations);
    const your = parsed.length;
    const total = 12 - your;

    const data = [
        { name: 'Total Donation', value: total },
        { name: 'Your Donation', value: your },
    ];

    return (
        <div className="mt-24 mb-32">
            <ResponsiveContainer width={'100%'} height={400}>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    paddingAngle={2}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    fill="#8884d8"
                    label={renderCustomizedLabel}
                    labelLine={false}
                >
                    {data.map((index) => (
                        <Cell 
                          key={index} 
                          fill={`#${(Math.random() * 0xFFFFFF << 0).toString(16)}`} 

                        />

                    ))}

                </Pie>
                 <Legend/>
                
            </PieChart>
        </ResponsiveContainer>
        </div>
        
    );
};

export default Statistics;