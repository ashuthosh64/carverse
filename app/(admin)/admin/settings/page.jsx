import { SettingsForm } from "./_components/settings-form";



export const metadata = {
  title: "Settings | Vehiql Admin",
  description: "Manage dealership working hours and admin users",
};

export default function SettingsPage() {
  return (
    <div className="p-6 bg-[#B8B2A7]">
      <h1 className="text-2xl font-bold mb-6 text-black">Settings</h1>
      <SettingsForm/>
    </div>
  );
}