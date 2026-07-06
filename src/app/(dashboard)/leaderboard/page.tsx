'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const devs = [
  { name: 'Alice', reward: 250 },
  { name: 'Bob', reward: 180 },
  { name: 'Carol', reward: 120 },
];

export default function Leaderboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Leaderboard</h1>
      <Card className="bg-white/5 border-white/10 max-w-md">
        <CardHeader>
          <CardTitle className="text-white">Top Developers</CardTitle>
        </CardHeader>
        <CardContent>
          {devs.map((d, i) => (
            <div key={d.name} className="flex items-center gap-3 py-2 border-b border-white/10">
              <span className="text-white/60 font-bold">{i + 1}</span>
              <Avatar>
                <AvatarFallback>{d.name[0]}</AvatarFallback>
              </Avatar>
              <span className="flex-1 text-white">{d.name}</span>
              <span className="text-green-400">{d.reward} NIM</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
