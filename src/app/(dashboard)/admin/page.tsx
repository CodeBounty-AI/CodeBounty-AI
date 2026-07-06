'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Admin() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Admin</h1>
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-white/5 border-white/10">
          <CardHeader><CardTitle className="text-white/60 text-sm">Revenue</CardTitle></CardHeader>
          <CardContent className="text-2xl text-white">1,240 NIM</CardContent>
        </Card>
        <Card className="bg-white/5 border-white/10">
          <CardHeader><CardTitle className="text-white/60 text-sm">Users</CardTitle></CardHeader>
          <CardContent className="text-2xl text-white">42</CardContent>
        </Card>
      </div>
    </div>
  );
}
