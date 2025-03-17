"use client";

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { IProfile } from "@/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const chartConfig = {
  active_users: {
    label: "Active Users",
    color: "hsl(140, 90%, 30%)", // Darker Green
  },
  blocked_users: {
    label: "Blocked Users",
    color: "hsl(140, 70%, 40%)", //  Green
  },
} satisfies ChartConfig;

const TotalUsers = ({ users }: { users: IProfile[] }) => {
  // Calculate active and blocked users
  const activeUsers = users.filter((user) => !user.isBlocked).length;
  const blockedUsers = users.filter((user) => user.isBlocked).length;
  const totalUsers = activeUsers + blockedUsers;

  const chartData = [
    {
      month: "January",
      active_users: activeUsers,
      blocked_users: blockedUsers,
    },
  ];

  return (
    <Card className="flex flex-col border-gray-300">
      <CardHeader className="items-center pb-0">
        <CardTitle>Radial Chart - User Stats</CardTitle>
        <CardDescription>Active vs Blocked Users</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={360}
            innerRadius={80}
            outerRadius={160}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalUsers.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground text-xl"
                        >
                          Users
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="active_users"
              stackId="a"
              cornerRadius={5}
              fill="hsl(140, 90%, 30%)" // Darker Green
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="blocked_users"
              stackId="a"
              cornerRadius={5}
              fill="hsl(140, 70%, 40%)" //  Green
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing active and blocked users statistics
        </div>
        <Button className="text-white"><Link href={`/admin/all-users`}>See All Users</Link></Button>
      </CardFooter>
    </Card>
  );
};

export default TotalUsers;
