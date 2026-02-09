import CarsList from "./_components/car-list";


export const metadata = {
  title: "Cars | Carverse Admin",
  description: "Manage cars in your marketplace",
};

export default function CarsPage() {
  return (
    <div className="p-6 bg-[#B8B2A7]">
      <h1 className="text-2xl font-bold text-black">
  Cars Management</h1>

      <CarsList />
    </div>
  );
}