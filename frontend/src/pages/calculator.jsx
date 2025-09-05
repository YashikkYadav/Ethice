// src/components/XirrCalculator.js
import React, { useState, useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  differenceInDays,
  differenceInMonths,
  differenceInQuarters,
  differenceInYears,
  addDays,
  addMonths,
  addQuarters,
  addYears,
} from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const XirrCalculator = () => {
  const [frequency, setFrequency] = useState("Yearly");
  const [startDate, setStartDate] = useState(new Date("2021-01-01"));
  const [maturityDate, setMaturityDate] = useState(new Date("2024-01-01"));
  const [recurringAmount, setRecurringAmount] = useState(10000);
  const [maturityAmount, setMaturityAmount] = useState(60000);

  // Get number of periods and add function based on frequency
  const { periods, addFn } = useMemo(() => {
    switch (frequency) {
      case "14 Days":
        return {
          periods: Math.floor(differenceInDays(maturityDate, startDate) / 14),
          addFn: (date, i) => addDays(startDate, i * 14),
        };
      case "Monthly":
        return {
          periods: differenceInMonths(maturityDate, startDate),
          addFn: (date, i) => addMonths(startDate, i),
        };
      case "Quarterly":
        return {
          periods: differenceInQuarters(maturityDate, startDate),
          addFn: (date, i) => addQuarters(startDate, i),
        };
      case "Half Yearly":
        return {
          periods: differenceInMonths(maturityDate, startDate) / 6,
          addFn: (date, i) => addMonths(startDate, i * 6),
        };
      case "Yearly":
      default:
        return {
          periods: differenceInYears(maturityDate, startDate),
          addFn: (date, i) => addYears(startDate, i),
        };
    }
  }, [frequency, startDate, maturityDate]);

  // Total invested amount
  const totalInvested = recurringAmount * periods;

  // XIRR approximation (simplified CAGR approach)
  const years = differenceInYears(maturityDate, startDate) || 1;
  const xirr =
    (((maturityAmount / totalInvested) ** (1 / years)) - 1) * 100;

  // Generate projection data
  const data = [];
  let portfolio = 0;
  for (let i = 0; i <= periods; i++) {
    const currentDate = addFn(startDate, i);
    portfolio += recurringAmount;
    const growth = (
      portfolio *
      Math.pow(1 + xirr / 100, i / periods * years) // scale growth over time
    ).toFixed(0);

    data.push({
      year: currentDate.getFullYear(),
      investment: portfolio,
      growth: parseInt(growth),
    });
  }

  return (
    <section className="bg-white p-6 rounded-xl shadow-md relative">
      <h2 className="text-2xl font-semibold mb-6">XIRR Calculator</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Form */}
        <div className="space-y-4">
          {/* Frequency */}
          <div>
            <p className="font-medium mb-2">Investment Frequency</p>
            {["14 Days", "Monthly", "Quarterly", "Half Yearly", "Yearly"].map(
              (opt) => (
                <label key={opt} className="mr-4">
                  <input
                    type="radio"
                    value={opt}
                    checked={frequency === opt}
                    onChange={() => setFrequency(opt)}
                    className="mr-1"
                  />
                  {opt}
                </label>
              )
            )}
          </div>

          {/* Dates */}
          <div className="flex justify-between">
            <label className="block mb-2 font-medium">Start Date :</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="yyyy-MM-dd"
              className="border rounded px-3 py-2 w-[200px] relative"
              popperClassName="z-50"
            />
          </div>
          <div className="flex justify-between">
            <label className="block mb-2 font-medium">Maturity Date :</label>
            <DatePicker
              selected={maturityDate}
              onChange={(date) => setMaturityDate(date)}
              dateFormat="yyyy-MM-dd"
              className="border rounded px-3 py-2 w-[200px] relative"
              popperClassName="z-50"
            />
          </div>

          {/* Amounts */}
          <div className="flex justify-between">
            <label className="block mb-2 font-medium">
              Recurring Investment (₹) :
            </label>
            <input
              type="number"
              value={recurringAmount}
              onChange={(e) => setRecurringAmount(Number(e.target.value))}
              className="border rounded px-3 py-2 w-[200px]"
            />
          </div>
          <div className="flex justify-between">
            <label className="block mb-2 font-medium">Maturity Amount (₹) :</label>
            <input
              type="number"
              value={maturityAmount}
              onChange={(e) => setMaturityAmount(Number(e.target.value))}
              className="border rounded px-3 py-2 w-[200px]"
            />
          </div>
        </div>

        {/* Right: Chart + XIRR */}
        <div>
          <div className="mb-4 p-4 bg-green-50 rounded-md">
            <p className="text-gray-600">Your XIRR</p>
            <p
              className={`text-3xl font-bold ${
                xirr < 0 ? "text-red-600" : "text-green-600"
              }`}
            >
              {isNaN(xirr) ? "—" : `${xirr.toFixed(2)}%`}
            </p>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="investment"
                stroke="#16a34a"
                name="Investment Amount"
              />
              <Line
                type="monotone"
                dataKey="growth"
                stroke="#2563eb"
                name="Portfolio Growth (returns)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default XirrCalculator;
