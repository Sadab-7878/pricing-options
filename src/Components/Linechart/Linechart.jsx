import React from "react";
import { LineChart as LC, Line, XAxis, YAxis } from "recharts";

const Linechart = () => {
  const students = [
    { name: "Alice", mathMarks: 85, physicsMarks: 80, chemistryMarks: 78 },
    { name: "Bob", mathMarks: 78, physicsMarks: 75, chemistryMarks: 72 },
    { name: "Charlie", mathMarks: 92, physicsMarks: 89, chemistryMarks: 91 },
    { name: "David", mathMarks: 74, physicsMarks: 70, chemistryMarks: 68 },
    { name: "Emma", mathMarks: 88, physicsMarks: 84, chemistryMarks: 86 },
    { name: "Fahim", mathMarks: 81, physicsMarks: 79, chemistryMarks: 75 },
    { name: "Grace", mathMarks: 95, physicsMarks: 92, chemistryMarks: 94 },
    { name: "Hannah", mathMarks: 79, physicsMarks: 76, chemistryMarks: 73 },
    { name: "Isaac", mathMarks: 84, physicsMarks: 81, chemistryMarks: 79 },
    { name: "Jack", mathMarks: 90, physicsMarks: 87, chemistryMarks: 88 },
  ];

  return (
    <>
      <LC width={800} height={400} data={students}>
        <XAxis dataKey={`name`}/>
        <YAxis />
        <Line dataKey="mathMarks" stroke="red"></Line>
        <Line dataKey={`physicsMarks`} stroke="green"></Line>
      </LC>
    </>
  );
};

export default Linechart;
