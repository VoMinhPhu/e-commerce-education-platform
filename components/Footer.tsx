import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="border-t-4 flex justify-center py-8 border-primary">
      <div className="max-w-[1200px] w-full grid md:grid-cols-3 gap-4">
        <div>
          <p className="font-semibold text-xl mb-2 ml-2 lg:ml-0">About us</p>
          <div className="px-6">
            <p className="font-semibold">E-commerce Education Platform</p>
            Your trusted eCommerce education platform. Learn how to start, run,
            and scale your online business with expert-led courses.
            <p className="font-semibold text-sm text-center md:text-left">
              © 2025 E-commerce Education Platform
            </p>
            <p className="text-center md:text-left">All rights reserved.</p>
          </div>
        </div>
        <div>
          <p className="font-semibold text-xl mb-2 ml-2 md:ml-0">
            Payment method
          </p>
          <div className="flex flex-wrap items-center gap-3 px-6">
            <Image
              src="/footer/paypal.svg"
              width={50}
              height={40}
              alt="paypal"
            />
            <Image src="/footer/visa.svg" width={50} height={40} alt="visa" />
            <Image src="/footer/vnpay.svg" width={50} height={40} alt="vnpay" />
            <Image src="/footer/momo.svg" width={50} height={40} alt="momo" />
            <Image src="/footer/atm.svg" width={50} height={40} alt="atm" />
            <Image
              src="/footer/viettelmoney.svg"
              width={50}
              height={40}
              alt="viettelmoney"
            />
            <Image
              src="/footer/zalopay.svg"
              width={50}
              height={40}
              alt="zalopay"
            />
          </div>
        </div>
        <div>
          <p className="font-semibold text-xl mb-2 ml-2 md:ml-0">Contact</p>
          <div className="flex justify-center md:justify-start gap-4 px-6">
            <Link href={"https://youtube.com"} target="_blank">
              <Image
                src="/footer/youtube.svg"
                className="w-8 h-8"
                width={40}
                height={40}
                alt="youtube"
              />
            </Link>
            <Link href={"https://facebook.com"} target="_blank">
              <Image
                src="/footer/facebook.svg"
                className="w-8 h-8"
                width={40}
                height={40}
                alt="facebook"
              />
            </Link>
            <Link href={"https://zalo.me"} target="_blank">
              <Image
                src="/footer/zalo.svg"
                className="w-8 h-8"
                width={40}
                height={40}
                alt="zalo"
              />
            </Link>
            <Link
              href={
                "https://github.com/VoMinhPhu/e-commerce-education-platform"
              }
              target="_blank"
            >
              <Image
                src="/footer/github.svg"
                className="w-8 h-8"
                width={40}
                height={40}
                alt="github"
              />
            </Link>
          </div>
          <div>
            <p className="font-semibold my-2 ml-2 lg:ml-0">
              Download app on mobile
            </p>
            <div className="flex gap-3 px-6">
              <div>
                <Image
                  src="/footer/qrcode.png"
                  width={80}
                  height={80}
                  alt="qrcode"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <Image
                  src="/footer/appstore.png"
                  width={120}
                  height={40}
                  alt="appstore"
                />
                <Image
                  src="/footer/playstore.png"
                  width={120}
                  height={40}
                  alt="playstore"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
