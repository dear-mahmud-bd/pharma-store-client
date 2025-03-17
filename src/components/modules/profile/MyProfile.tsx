import React from "react";
import { IProfile, UserType } from "@/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MyProfile = ({ profileData }: { profileData: IProfile }) => {
  return (
    <div className="flex flex-col gap-6 p-4 md:p-6 lg:p-8">
      <Card className="border-gray-300">
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row items-center gap-6">
          <Image
            src="https://i.ibb.co.com/jD1GTj4/user.png"
            alt={profileData.name}
            width={100}
            height={100}
            className="rounded-full border shadow-md"
          />
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-xl font-semibold">{profileData.name}</h2>
            <p className="text-gray-600">{profileData.email}</p>
            <Badge
              className={
                profileData.role === UserType.admin
                  ? "bg-blue-500"
                  : "bg-green-500"
              }
            >
              {profileData.role.toUpperCase()}
            </Badge>
            <Badge
              className={
                profileData.isVerified ? "bg-green-500" : "bg-yellow-500"
              }
            >
              {profileData.isVerified ? "Verified" : "Not Verified"}
            </Badge>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="text-white">
            <Link href={`/user/profile`}>Edit Profile</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-gray-300">
        <CardHeader>
          <CardTitle>Contact Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p>
              <span className="font-medium">Phone:</span>{" "}
              {profileData.phone || "N/A"}
            </p>
            {profileData.address && (
              <p>
                <span className="font-medium">Address:</span>{" "}
                {profileData.address.street}, {profileData.address.city},
                {profileData.address.state}, {profileData.address.zip},{" "}
                {profileData.address.country}
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MyProfile;
