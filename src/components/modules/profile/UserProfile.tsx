"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, FieldValues } from "react-hook-form";
import Image from "next/image";
import { IProfile } from "@/types";
import { updateUserPassword, updateUserProfile } from "@/services/Users";
import { toast } from "sonner";

const UserProfile = ({ profileData }: { profileData: IProfile }) => {
  const [updating, setUpdating] = useState(false);
  const [changing, setChanging] = useState(false);
  const {
    register: updateProfile,
    handleSubmit: handleSubmitProfile,
    reset: profileReset,
    formState: { errors: errorsProfile },
  } = useForm();

  const {
    register: updatePassword,
    handleSubmit: handleSubmitPassword,
    watch,
    reset: passReset,
    formState: { errors: errorsPassword },
  } = useForm();

  const onSubmitProfile = async (formData: FieldValues) => {
    setUpdating(true);
    const updatedProfileData = {
      email: profileData.email,
      ...formData,
    };
    try {
      // console.log("Updated Profile:-----------------", updatedProfileData);
      const res = await updateUserProfile(updatedProfileData);
      if (res.success) {
        toast.success(res.message);
        profileReset();
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.error("Failed to update profile", error);
    }
    setUpdating(false);
  };

  const onSubmitPassword = async (formData: FieldValues) => {
    setChanging(true);
    const releventData = {
      email: profileData.email,
      oldPassword: formData.oldPassword,
      newPassword: formData.newPassword,
    };
    try {
      const res = await updateUserPassword(releventData);
      if (res.success) {
        toast.success(res.message);
        passReset();
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.error("Failed to update password", error);
    }
    setChanging(false)
  };

  return (
    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Section - User Details */}
      <Card className="p-4 shadow-md border-gray-300 rounded-lg bg-gray-100 flex items-center justify-center">
        <CardContent className="flex flex-col items-center text-center space-y-4">
          <Avatar className="w-24 h-24">
            <Image
              width={500}
              height={500}
              src={`https://i.ibb.co.com/jD1GTj4/user.png`}
              alt={profileData.name}
              className="rounded-full"
            />
          </Avatar>
          <h2 className="text-xl font-semibold">{profileData.name}</h2>
          <p className="text-gray-500">{profileData.email}</p>
          <p
            className={`text-sm font-medium ${
              profileData.isVerified ? "text-green-600" : "text-red-600"
            }`}
          >
            {profileData.isVerified ? "Verified" : "Not Verified"}
          </p>
        </CardContent>
      </Card>

      {/* Right Section - Profile Update Form */}
      <Card className="p-4 shadow-md border-gray-300 rounded-lg bg-white">
        <CardContent>
          <h3 className="text-lg font-semibold text-center mb-4">
            Update Profile
          </h3>
          <form
            onSubmit={handleSubmitProfile(onSubmitProfile)}
            className="space-y-4"
          >
            {/* New Name */}
            <div>
              <Label>New Name</Label>
              <Input
                {...updateProfile("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters long",
                  },
                })}
                placeholder="Enter new name"
              />
              {errorsProfile.name && (
                <p className="text-red-500 text-sm">
                  {errorsProfile.name.message as string}
                </p>
              )}
            </div>

            <div>
              <Label>New Phone</Label>
              <Input
                {...updateProfile("phone", {
                  required: "Phone Number is required",
                  minLength: {
                    value: 3,
                    message: "Phone must be at least 10 characters long",
                  },
                })}
                placeholder={profileData.phone}
              />
              {errorsProfile.phone && (
                <p className="text-red-500 text-sm">
                  {errorsProfile.phone.message as string}
                </p>
              )}
            </div>

            {/* Street */}
            <div>
              <Label>Street</Label>
              <Input
                {...updateProfile("address.street", {
                  required: "Street is required",
                })}
                placeholder={profileData.address?.street}
              />
              {errorsProfile.address?.street && (
                <p className="text-red-500 text-sm">
                  {errorsProfile.address.street.message as string}
                </p>
              )}
            </div>

            {/* City */}
            <div>
              <Label>City</Label>
              <Input
                {...updateProfile("address.city", {
                  required: "City is required",
                })}
                placeholder={profileData.address?.city}
              />
              {errorsProfile.address?.city && (
                <p className="text-red-500 text-sm">
                  {errorsProfile.address.city.message as string}
                </p>
              )}
            </div>

            {/* State */}
            <div>
              <Label>State</Label>
              <Input
                {...updateProfile("address.state", {
                  required: "State is required",
                })}
                placeholder={profileData.address?.state}
              />
              {errorsProfile.address?.state && (
                <p className="text-red-500 text-sm">
                  {errorsProfile.address.state.message as string}
                </p>
              )}
            </div>

            {/* Zip Code */}
            <div>
              <Label>Zip Code</Label>
              <Input
                {...updateProfile("address.zip", {
                  required: "Zip Code is required",
                  pattern: {
                    value: /^\d{4,6}$/,
                    message: "Enter a valid Zip Code",
                  },
                })}
                placeholder={profileData.address?.zip}
              />
              {errorsProfile.address?.zip && (
                <p className="text-red-500 text-sm">
                  {errorsProfile.address.zip.message as string}
                </p>
              )}
            </div>

            {/* Country */}
            <div>
              <Label>Country</Label>
              <Input
                {...updateProfile("address.country", {
                  required: "Country is required",
                })}
                placeholder={profileData.address?.country}
              />
              {errorsProfile.address?.country && (
                <p className="text-red-500 text-sm">
                  {errorsProfile.address.country.message as string}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full text-white cursor-pointer">
              {updating ? "Updating" : "Update Profile"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Change Password Section */}
      <Card className="p-4 shadow-md border-gray-300 rounded-lg bg-gray-100 col-span-1 md:col-span-2">
        <CardContent>
          <h3 className="text-lg font-semibold text-center mb-4">
            Change Password
          </h3>
          <form
            onSubmit={handleSubmitPassword(onSubmitPassword)}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <div>
              <Label>Old Password</Label>
              <Input
                {...updatePassword("oldPassword", {
                  required: "Old password is required",
                })}
                type="password"
                placeholder="Enter old password"
              />
              {errorsPassword.oldPassword && (
                <p className="text-red-500 text-sm">
                  {errorsPassword.oldPassword.message as string}
                </p>
              )}
            </div>
            <div>
              <Label>New Password</Label>
              <Input
                {...updatePassword("newPassword", {
                  required: "New password is required",
                  minLength: {
                    value: 6,
                    message: "New password must be at least 6 characters long",
                  },
                })}
                type="password"
                placeholder="Enter new password"
              />
              {errorsPassword.newPassword && (
                <p className="text-red-500 text-sm">
                  {errorsPassword.newPassword.message as string}
                </p>
              )}
            </div>
            <div>
              <Label>Confirm New Password</Label>
              <Input
                {...updatePassword("confirmNewPassword", {
                  required: "Please confirm your new password",
                  validate: (value) =>
                    value === watch("newPassword") || "Passwords do not match",
                })}
                type="password"
                placeholder="Confirm new password"
              />
              {errorsPassword.confirmNewPassword && (
                <p className="text-red-500 text-sm">
                  {errorsPassword.confirmNewPassword.message as string}
                </p>
              )}
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <Button
                type="submit"
                className="w-full text-white cursor-pointer"
              >
                {changing ? "Changing" : "Change Password"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;
