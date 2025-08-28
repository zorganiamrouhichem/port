
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html >
      <body
      >
         <div className="min-h-screen bg-[#efefef]">
      <div className="max-w-7xl mx-auto px-4">
        {children}
      </div>
    </div>
      </body>
    </html>
  );
}
