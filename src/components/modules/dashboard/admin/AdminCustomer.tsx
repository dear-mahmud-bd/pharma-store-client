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
  admin_users: {
    label: "Admin Users",
    color: "hsl(220, 90%, 50%)", // Blue
  },
  customer_users: {
    label: "Customer Users",
    color: "hsl(140, 70%, 40%)", // Green
  },
} satisfies ChartConfig;

const AdminCustomer = ({ users }: { users: IProfile[] }) => {
  // Calculate admin and customer users
  const totalAdmin = users.filter((user) => user.role === "admin").length;
  const totalCustomer = users.filter((user) => user.role === "customer").length;
  const totalUsers = totalAdmin + totalCustomer;

  const chartData = [
    {
      category: "Users",
      admin_users: totalAdmin,
      customer_users: totalCustomer,
    },
  ];

  return (
    <Card className="flex flex-col border-gray-300">
      <CardHeader className="items-center pb-0">
        <CardTitle>Radial Chart - User Roles</CardTitle>
        <CardDescription>Admins vs Customers</CardDescription>
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
              dataKey="admin_users"
              stackId="a"
              cornerRadius={5}
              fill="hsl(220, 90%, 50%)" // Blue
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="customer_users"
              stackId="a"
              cornerRadius={5}
              fill="hsl(140, 70%, 40%)" // Green
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing Admin vs Customer statistics
        </div>
        <Button className="text-white">
          <Link href={`/admin/all-users`}>See All Users</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AdminCustomer;
