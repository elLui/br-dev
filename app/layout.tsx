import './globals.css'
import Header002Hui from "@/components/header/header002_hui";


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
        <body className="font-graffiti min-h-screen max-w-screen bg-gradient-to-tr from-accented-dark-red to-flannel-red overflow-x-hidden">
        <Header002Hui/>
        {children}
        </body>
        </html>
    )
}
