"use client";

import Link from "next/link";

import {
  Card,
  CardTitle,
  CardHeader,
  CardAction,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FormRegister from "./_component/FormRegister";

const page = () => {
  return (
    <div className="mt-16 bg-primary-foreground">
      <div className="max-w-300 mx-auto grid grid-cols-2">
        <div>1</div>
        <div className="p-16">
          <Card className="w-full max-w-sm rounded-sm">
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your username below to login to your account
              </CardDescription>
              <CardAction>
                <Link href={"/login"}>
                  <Button className="cursor-pointer" variant="link">
                    Login
                  </Button>
                </Link>
              </CardAction>
            </CardHeader>
            <CardContent>
              <FormRegister />
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
