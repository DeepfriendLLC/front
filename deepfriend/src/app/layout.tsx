export const BASIC_DARK_COLOR = "black";
export const BASIC_LIGHT_COLOR = "white";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
