import HomeBtn from "@/components/HomeBtn";

export default function SubPagesLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-30 px-20">
      <HomeBtn/>
      {children}
    </main>
  );
}
