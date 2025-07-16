import NavOnMobile from "./_component/NavOnMobile";
import NavSiteUser from "./_component/NavSiteUser";

function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-16 bg-primary-foreground">
      <div className="max-w-300 mx-auto grid grid-cols-5 py-2 lg:py-4">
        <NavSiteUser />
        <NavOnMobile />
        {children}
      </div>
    </div>
  );
}

export default UserLayout;
