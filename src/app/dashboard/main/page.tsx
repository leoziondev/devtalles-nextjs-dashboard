import { WidgetsGrid } from "@/components";

export default function MainPage() {
  return (
    <div className="text-slate-800 p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-md text-blue-500">General Information</span>

      <WidgetsGrid />
    </div>
  );
}