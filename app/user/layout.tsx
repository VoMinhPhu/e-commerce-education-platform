import NavSiteUser from "./_component/NavSiteUser";

function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-16 bg-primary-foreground">
      <div className="max-w-300 mx-auto grid grid-cols-5 py-4">
        <NavSiteUser />
        {children}
      </div>
    </div>
  );
}

export default UserLayout;
