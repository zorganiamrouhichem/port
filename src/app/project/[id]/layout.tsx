import Navbar from "@/app/components/Navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="">
        <Navbar/>
        {children}
      </div>
     
  );
}
