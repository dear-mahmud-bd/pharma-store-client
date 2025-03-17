"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";
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
import { IOrder } from "@/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type OrderStatusCounts = {
  pending: number;
  processing: number;
  shipped: number;
  delivered: number;
  canceled: number;
};
const chartConfig = {
  pending: { label: "Pending", color: "hsl(40, 90%, 50%)" },
  processing: { label: "Processing", color: "hsl(220, 90%, 50%)" },
  shipped: { label: "Shipped", color: "hsl(200, 80%, 40%)" },
  delivered: { label: "Delivered", color: "hsl(140, 70%, 40%)" },
  canceled: { label: "Canceled", color: "hsl(0, 80%, 50%)" },
} satisfies ChartConfig;

const OrdersOverview = ({ orders }: { orders: IOrder[] }) => {
  const orderCounts = React.useMemo(() => {
    const counts: OrderStatusCounts = {
      pending: 0,
      processing: 0,
      shipped: 0,
      delivered: 0,
      canceled: 0,
    };
    orders.forEach((order) => {
      counts[order.status as keyof OrderStatusCounts]++;
    });

    return Object.entries(counts).map(([status, count]) => ({
      status,
      count,
      fill: chartConfig[status as keyof typeof chartConfig].color,
    }));
  }, [orders]);
  const totalOrders = orders.length;

  return (
    <Card className="flex flex-col border-gray-300">
      <CardHeader className="items-center pb-0">
        <CardTitle>Order Status Overview</CardTitle>
        <CardDescription>Distribution of Orders by Status</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={orderCounts}
              dataKey="count"
              nameKey="status"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalOrders.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total Orders
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Orders Summary <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Overview of orders categorized by status
        </div>
        <Button className="text-white">
          <Link href={`/admin/all-orders`}>See All Orders</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OrdersOverview;
