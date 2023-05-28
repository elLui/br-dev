import './globals.css'


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
    <html lang="en">
      <body className="font-graffiti">{children}</body>
    </html>
  )
}
