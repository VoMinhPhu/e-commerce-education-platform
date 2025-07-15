"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";
import { useUser } from "@/stores/useUser";
import { formUpdateUserInfo } from "@/utils/form/updateInfoUser";

import {
  Form,
  FormItem,
  FormField,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import InputDateAndGender from "./InputDateAndGender";

const FormUpdateInfoUser = () => {
  const { username, phone, name, gender, address, dateOfBirth } = useUser();

  const form = useForm<z.infer<typeof formUpdateUserInfo>>({
    resolver: zodResolver(formUpdateUserInfo),
    defaultValues: {
      name: name,
      phone: phone,
      gender: gender,
      address: address,
      dateOfBirth: dateOfBirth,
    },
  });

  function onSubmit(values: z.infer<typeof formUpdateUserInfo>) {
    console.log(values);
    toast.warning("Update infomation", {
      description: "Feature not ready yet !",
    });
    form.reset();
  }
  return (
    <div className="grid grid-cols-4 gap-1">
      <div>
        <p className="h-10 flex items-center">Username</p>
        <p className="h-15 flex items-center">Name</p>
        <p className="h-15 flex items-center">Phone</p>
        <p className="h-15 flex items-center">Address</p>
        <p className="h-15 flex items-center">Date of Birth</p>
        <p className="h-15 flex items-center">Gender</p>
      </div>
      <div className="col-span-3">
        <p className="h-10 flex items-center">{username}</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full h-15 items-center gap-0">
                  <FormControl>
                    <Input
                      className="rounded-sm"
                      placeholder="Enter your name..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="w-full h-15 items-center gap-0">
                  <FormControl>
                    <Input
                      className="rounded-sm"
                      placeholder="Enter your phone..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="w-full h-15 items-center gap-0">
                  <FormControl>
                    <Input
                      className="rounded-sm"
                      placeholder="Enter your address..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="" />
                </FormItem>
              )}
            />
            <InputDateAndGender form={form} gender={gender} />
            <Button
              type="submit"
              className="w-full mt-6 cursor-pointer rounded-sm"
            >
              Apply
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default FormUpdateInfoUser;
