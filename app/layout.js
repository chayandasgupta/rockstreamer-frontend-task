import "./globals.css";


export const metadata = {
  title: "Movie Discovery - Trending Movies & TV Shows",
  description:
    "Discover trending movies and TV shows with beautiful animations",
  keywords: "movies, tv shows, trending, entertainment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
