import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { WalletConnect } from "@/components/wallet/WalletConnect";
import { DeepLinkShare } from "@/components/wallet/DeepLinkShare";

interface PageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

export default function BountyDetail({ params }: PageProps) {
  const { id } = params;

  const bounty = {
    id: Number(id),
    title: "Fix authentication bug",
    description: "Users can't login with GitHub OAuth. This is a critical bug.",
    reward: 50,
    difficulty: "MEDIUM",
    status: "OPEN",
    repository: "codebounty-ai",
    creator: "john_doe",
  };

  return (
    <div className="p-6">
      <Link href="/bounty">
        <Button variant="ghost" className="text-white/70 hover:text-white mb-4">
          ← Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-2xl">{bounty.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">{bounty.description}</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-green-400 text-green-400">
                  {bounty.reward} NIM
                </Badge>
                <Badge variant="outline" className="border-blue-400 text-blue-400">
                  {bounty.difficulty}
                </Badge>
                <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                  {bounty.status}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-4">
          <WalletConnect />
          <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600">
            Apply
          </Button>
          <DeepLinkShare />
        </div>
      </div>
    </div>
  );
}
