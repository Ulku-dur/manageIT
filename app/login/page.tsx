"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import { Lock } from "lucide-react";

const LoginHeader = () => {
  const LogoPlaceholder = () => {
    return (
      <div className="flex justify-center mb-4">
        <span className="font-bold bg-primary size-10 rounded-md text-white flex justify-center items-center">
          <Lock />
        </span>
      </div>
    );
  };

  return (
    <CardHeader className="space-y-1">
      <LogoPlaceholder />
      <CardTitle className="text-center text-2xl">Welcome Back</CardTitle>
      <CardDescription className="text-center text-gray-500 dark:text-gray-400">
        Enter your username and password to continue.
      </CardDescription>
    </CardHeader>
  );
};

const LoginForm = () => {
  return (
    <>
      <div className="space-y-2">
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
      <div className="space-y-2">
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
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember" className="text-sm">
            Remember me
          </Label>
        </div>
        <Button variant={"link"} className="px-0">
          <a href="#" className="text-sm hover:underline">
            Forgot password
          </a>
        </Button>
      </div>
    </>
  );
};

const SocialLogin = () => {
  return (
    <>
      <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-3">
        Or login with
      </div>
      <div className="flex w-full gap-4">
        <Button
          variant="outline"
          className="w-full h-10 flex items-center justify-center gap-2"
        >
          <Image src="/google.svg" alt="google" width={20} height={20} />
          Google
        </Button>
        <Button
          variant="outline"
          className="w-full h-10 flex items-center justify-center gap-2"
        >
          <Image src="/github.svg" alt="" width={20} height={20} />
          GitHub
        </Button>
      </div>
    </>
  );
};

const LoginFooter = () => {
  return (
    <div className="text-center text-sm text-gray-500 dark:text-gray-400">
      Don`t have an account?
      <Button variant={"link"} className="px-1">
        <a href="/register">Register</a>
      </Button>
    </div>
  );
};

const SignIn1 = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen py-3
    bg-neutral-100 dark:bg-neutral-800"
    >
      <form>
        <Card className="w-[520px] p-3">
          <LoginHeader />
          <CardContent className="space-y-4 mt-4">
            <LoginForm />
          </CardContent>
          <CardFooter className="flex flex-col gap-4 mt-4">
            <Button className="w-full text-white h-10">Sign in</Button>
            <SocialLogin />
            <LoginFooter />
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default SignIn1;
