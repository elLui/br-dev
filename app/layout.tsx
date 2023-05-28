import './globals.css'
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
        <html lang="en"
        className="scroll-smooth antialiased">
        {/*min-h-screen for the body. This ensures that the body takes at least the full height of the viewport, but can grow taller if the content requires it*/}
        <body className="font-graffiti min-h-screen bg-gradient-to-tr from-accented-dark-red to-flannel-red">
        <Header001/>
        {children}
        </body>
        </html>
    )
}
