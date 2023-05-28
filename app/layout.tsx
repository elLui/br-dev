import './globals.css'
import Nav001 from "@/components/navbar/nav_001";
import Header001 from "@/components/header/header_001";


export const metadata = {
  title: 'Bitter Route',
  description: 'Southern Born Hard Rock',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
        lang="en"
      className="h-full w-full"
    >
      <body className="font-graffiti bg-gradient-to-tr from-accented-dark-red to-flannel-red h-screen min-h-screen max-w-fit">
      <Header001 />
      {children}</body>
    </html>
  )
}
