import "./globals.css";

export const metadata = {
  title: "Teenager Party Letters",
  description: "The Teenager Party letters frontend.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
