import React from "react";
import { useLoaderData } from "react-router-dom";
import { CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, ResponsiveContainer } from "recharts";

const Statistics = () => {
  const datum = useLoaderData();
  const data = datum.data.map((value) => {
    return { name: value.name, uv: value.total, pv: 2400, amt: 2400 };
  });

  return (
    <div className="container d-flex flex-column border my-5 text-center bg-light rounded shadow-sm p-3">
      <h1 className="my-5">Total Quizes on the following topics</h1>
      <ResponsiveContainer width="95%" height={300} className="mb-5">
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="uv" fill="#8884d8" barSize={30} />
      </BarChart>
      </ResponsiveContainer>
      <span>Fig:Total Quizes </span>
    </div>
  );
};

export default Statistics;
