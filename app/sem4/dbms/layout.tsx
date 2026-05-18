import Navbar from "../../components/navbar";
import Sidebar from "./components/sidebar";

export const metadata = {
  title: "Database Management Systems | openCSE",
  description:
    "Free and Open Documentations for Database Management Systems",
};

export default function DBMSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="operating-system-root min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <main className="flex-1 overflow-y-auto px-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}