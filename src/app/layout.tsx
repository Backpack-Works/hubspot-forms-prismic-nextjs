import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { Providers } from "@/components/Providers";
import { Poppins, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/index.css";

const jakarta = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="any"
          href="https://prismic.io/favicon.ico"
        />
      </head>
      <body className={`${poppins.variable} ${jakarta.variable}`}>
        <Providers>
          <div className="content">{children}</div>

          <PrismicPreview repositoryName={repositoryName} />
        </Providers>
      </body>
    </html>
  );
}
