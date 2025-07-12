import Filter from "./_component/Filter";
import ListProducts from "./_component/ListProducts";

const page = () => {
  return (
    <main className="mt-16">
      <div className="bg-primary-foreground w-full flex justify-center">
        <div className="max-w-300 w-full py-6 grid grid-cols-6 gap-4">
          <div>
            <Filter />
          </div>
          <div className="col-span-5">
            <ListProducts />
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
