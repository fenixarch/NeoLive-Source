import ActiveStatus from "./components/ActiveStatus";
import { Providers } from "./components/theme/Providers";
import AuthContext from "./context/AuthContext";
import ToasterContext from "./context/ToasterContext";
import "./globals.css";

export const metadata = {
  title: "Web NeoLive",
  description: "NeoLive - Web",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <AuthContext>
          <Providers>
            <>
              <ActiveStatus />
              <ToasterContext />
              {children}
            </>
          </Providers>
        </AuthContext>
      </body>
    </html>
  );
}
