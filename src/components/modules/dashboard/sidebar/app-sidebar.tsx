"use client";

import * as React from "react";
import {
  List,
  ListCollapseIcon,
  ListOrderedIcon,
  LucideListOrdered,
  SquareTerminal,
  UserPen,
  UserPlus2Icon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import { useUser } from "@/context/UserContext";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUser();
  const path = user?.role === "admin" ? "admin" : "user";
  return (
    <Sidebar collapsible="icon" {...props} className="mt-16">
      <SidebarContent>
        {user?.role === "admin" ? (
          <NavMain
            items={[
              {
                title: "My Profile",
                url: `/${path}/profile`,
                icon: UserPen,
                isActive: true,
              },
              {
                title: "My Order",
                url: `/${path}/my-order`,
                icon: ListOrderedIcon,
                isActive: true,
              },
              {
                title: "Medicine Shop",
                url: "/admin/medicine-shop",
                icon: SquareTerminal,
                items: [
                  {
                    title: "Add Medicine",
                    url: "/admin/medicine-shop/add-medicine",
                  },
                  {
                    title: "Manage Medicine",
                    url: "/admin/medicine-shop/manage-medicine",
                  },
                ],
              },
              {
                title: "All Orders",
                url: "/admin/all-orders",
                icon: List,
                isActive: true,
              },
              {
                title: "All Users",
                url: "/admin/all-users",
                icon: ListCollapseIcon,
                isActive: true,
              },
            ]}
          />
        ) : (
          <NavMain
            items={[
              {
                title: "My Profile",
                url: `/${path}/profile`,
                icon: UserPen,
                isActive: true,
              },
              {
                title: "My Order",
                url: `/${path}/order`,
                icon: ListOrderedIcon,
                isActive: true,
              },
            ]}
          />
        )}
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
