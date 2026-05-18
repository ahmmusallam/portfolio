'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Legend,
} from 'recharts';

// Real data from the Session Replay case study
const adoptionData = [
  { month: 'May', enterprise: 4, st: 1 },
  { month: 'Jun', enterprise: 3, st: 1 },
  { month: 'Jul', enterprise: 5, st: 1 },
  { month: 'Aug', enterprise: 8, st: 1 },
  { month: 'Sep', enterprise: 6, st: 1 },
  { month: 'Oct', enterprise: 5, st: 1 },
  { month: 'Nov', enterprise: 7, st: 1 },
  { month: 'Dec', enterprise: 7, st: 1 },
  { month: 'Jan', enterprise: 6, st: 1 },
  { month: 'Feb', enterprise: 8, st: 2 },
  { month: 'Mar', enterprise: 7, st: 2 },
  { month: 'Apr', enterprise: 8, st: 2 },
  { month: 'May', enterprise: 9, st: 2 },
  { month: 'Jun', enterprise: 11, st: 1 },
  { month: 'Jul', enterprise: 12, st: 1 },
  { month: 'Aug', enterprise: 14, st: 1 },
];

const releaseIndex = 8; // January '25 release marker

export default function AdoptionChart() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative border border-ink-800 bg-ink-900/40 p-6 md:p-8"
    >
      <div className="flex items-baseline justify-between mb-6 flex-wrap gap-2">
        <div>
          <p className="mono-label">Outcome</p>
          <h3 className="text-xl md:text-2xl font-medium text-ink-50 mt-1">Enterprise customers, MAC over time</h3>
        </div>
        <p className="mono-label text-ink-600">Real impact data</p>
      </div>

      <div className="h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={adoptionData} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="2 4" stroke="#262626" vertical={false} />
            <XAxis
              dataKey="month"
              stroke="#666"
              tick={{ fill: '#888', fontSize: 11, fontFamily: 'var(--font-jetbrains-mono)' }}
              tickLine={{ stroke: '#404040' }}
              axisLine={{ stroke: '#404040' }}
            />
            <YAxis
              stroke="#666"
              tick={{ fill: '#888', fontSize: 11, fontFamily: 'var(--font-jetbrains-mono)' }}
              tickLine={{ stroke: '#404040' }}
              axisLine={{ stroke: '#404040' }}
              width={40}
            />
            <Tooltip
              contentStyle={{
                background: '#0a0a0a',
                border: '1px solid #404040',
                borderRadius: 0,
                fontFamily: 'var(--font-jetbrains-mono)',
                fontSize: '12px',
              }}
              labelStyle={{ color: '#fafafa' }}
              itemStyle={{ color: '#d4d4d4' }}
            />
            <Legend
              wrapperStyle={{
                fontFamily: 'var(--font-jetbrains-mono)',
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#888',
              }}
            />
            <ReferenceLine
              x={adoptionData[releaseIndex].month}
              stroke="#fafafa"
              strokeDasharray="4 4"
              label={{ value: 'Release', fill: '#fafafa', fontSize: 10, position: 'top', fontFamily: 'var(--font-jetbrains-mono)' }}
            />
            <Line
              type="monotone"
              dataKey="enterprise"
              name="Enterprise"
              stroke="#fafafa"
              strokeWidth={2}
              dot={{ fill: '#fafafa', r: 3 }}
              activeDot={{ r: 6, fill: '#fafafa', stroke: '#0a0a0a', strokeWidth: 2 }}
              isAnimationActive={inView}
              animationDuration={2000}
            />
            <Line
              type="monotone"
              dataKey="st"
              name="Self-serve"
              stroke="#666666"
              strokeWidth={1.5}
              strokeDasharray="3 3"
              dot={{ fill: '#666', r: 2 }}
              isAnimationActive={inView}
              animationDuration={2000}
              animationBegin={400}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 border-t border-ink-800 pt-6">
        <div>
          <p className="mono-label">Before release</p>
          <p className="text-2xl text-ink-100 font-medium mt-1 tabular-nums">7 customers</p>
        </div>
        <div>
          <p className="mono-label">4 months later</p>
          <p className="text-2xl text-ink-50 font-medium mt-1 tabular-nums">14 customers <span className="text-base text-ink-400">↑ 2×</span></p>
        </div>
      </div>
    </motion.div>
  );
}
