import "./globals.css";


export const metadata = {
    title: "Faculdade Unica",
};

export default function RootLayout({ children }) {
    return (
    <html lang="pt-br">
        <body>
            {children}
        </body>
    </html>
    );
}
