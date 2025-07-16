"use client";

import Link from "next/link";
import Image from "next/image";

import {
  Card,
  CardTitle,
  CardAction,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import FormLogin from "./_component/FormLogin";

const page = () => {
  return (
    <div className="mt-16 bg-primary-foreground">
      <div className="max-w-300 mx-auto grid grid-cols-2">
        <div className="p-4 lg:p-16 pr-0 hidden md:grid items-center justify-center">
          <div className="flex items-center justify-center">
            <Image src={"/logo.svg"} alt="logo" width={250} height={250} />
          </div>
          <p className="text-center text-xl text-muted-foreground">
            Empowering learners to thrive in the digital commerce world.
          </p>
        </div>
        <div className="p-4 lg:p-16 md:col-span-1 col-span-2">
          <Card className="w-full max-w-sm rounded-sm">
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your username below to login to your account
              </CardDescription>
              <CardAction>
                <Link href={"/register"}>
                  <Button className="cursor-pointer" variant="link">
                    Register
                  </Button>
                </Link>
              </CardAction>
            </CardHeader>
            <CardContent>
              <FormLogin />
              <Button variant="outline" className="w-full rounded-sm mt-2">
                <Image
                  src={"/google.svg"}
                  alt="google icon"
                  width={16}
                  height={16}
                />
                Login with Google
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default page;
