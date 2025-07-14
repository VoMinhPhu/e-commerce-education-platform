"use client";

import Link from "next/link";

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
        <div>Empowering learners to thrive in the digital commerce world.</div>
        <div className="p-16">
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
