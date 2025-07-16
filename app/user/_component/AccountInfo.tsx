import FormUpdateInfoUser from "./FormUpdateInfoUser";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { CardDescription, CardTitle } from "@/components/ui/card";

const AccountInfo = () => {
  return (
    <div>
      <div className="grid gap-1 py-2">
        <CardTitle>Profile infomation</CardTitle>
        <CardDescription>
          Manage profile information to keep your account secure
        </CardDescription>
      </div>
      <Separator className="my-1" />
      <div className="grid grid-cols-3 p-4">
        <div className="col-span-3 lg:hidden">
          <div className="flex items-center justify-center p-6">
            <Avatar className="w-20 h-20 cursor-pointer">
              <AvatarImage src={"https://github.com/evilrabbit.png"} />
            </Avatar>
          </div>
          <div className="grid items-center justify-center gap-2">
            <Button className="rounded-sm">Select image</Button>
            <div className="grid gap-1">
              <CardDescription>Maximum file size 1 MB</CardDescription>
              <CardDescription>Format: .JPEG, .PNG</CardDescription>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 col-span-3">
          <FormUpdateInfoUser />
        </div>

        <div className="lg:col-span-1 hidden lg:block">
          <div className="flex items-center justify-center p-6">
            <Avatar className="w-20 h-20 cursor-pointer">
              <AvatarImage src={"https://github.com/evilrabbit.png"} />
            </Avatar>
          </div>
          <div className="grid items-center justify-center gap-2">
            <Button className="rounded-sm">Select image</Button>
            <div className="grid gap-1">
              <CardDescription>Maximum file size 1 MB</CardDescription>
              <CardDescription>Format: .JPEG, .PNG</CardDescription>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
