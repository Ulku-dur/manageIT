"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { UserPlus } from "lucide-react";

const SignUpHeader = () => {
  const LogoPlaceholder = () => {
    return (
      <div className="flex justify-center mb-4">
        <span className="font-bold bg-primary size-10 rounded-md text-white flex justify-center items-center">
          <UserPlus />
        </span>
      </div>
    );
  };

  return (
    <CardHeader className="space-y-1">
      <LogoPlaceholder />
      <CardTitle className="text-center text-2xl">Create Account</CardTitle>
      <CardDescription className="text-center text-gray-500 dark:text-gray-400">
        Enter your details to register.
      </CardDescription>
    </CardHeader>
  );
};

const SignUpForm = () => {
  return (
    <>
      <div className="space-y-2 pt-3">
        <Label className="opacity-80" htmlFor="email">
          Email
        </Label>
        <Input
          id="email"
          placeholder="Enter your email address"
          type="email"
          className="bg-white/10 text-black h-10 dark:text-white"
        />
      </div>
      <div className="space-y-2 pt-3">
        <Label className="opacity-80" htmlFor="password">
          Password
        </Label>
        <Input
          id="password"
          placeholder="Enter your password"
          type="password"
          className="bg-white/10 text-black h-10 dark:text-white"
        />
      </div>
      <div className="space-y-2 pt-3">
        <Label className="opacity-80" htmlFor="confirmPassword">
          Confirm Password
        </Label>
        <Input
          id="confirmPassword"
          placeholder="Confirm your password"
          type="password"
          className="bg-white/10 text-black h-10 dark:text-white"
        />
      </div>
    </>
  );
};

const SignUpFooter = () => {
  return (
    <div className="text-center text-sm text-gray-500 dark:text-gray-400">
      Already have an account?
      <Button variant={"link"} className="px-1">
        <a href="/login">Log in</a>
      </Button>
    </div>
  );
};

const SignUp1 = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen py-3
      bg-neutral-100 dark:bg-neutral-800"
    >
      <form>
        <Card className="w-[520px] p-3">
          <SignUpHeader />
          <CardContent className="space-y-4 mt-4">
            <SignUpForm />
          </CardContent>
          <CardFooter className="flex flex-col gap-4 mt-6">
            <Button className="w-full text-white h-10">Sign up</Button>
            <SignUpFooter />
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default SignUp1;
