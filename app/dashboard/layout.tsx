// app/layout.tsx



export const metadata = {
  title: 'My App',
  description: 'Deskripsi aplikasi',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        
        <main>{children}</main>
      </body>
    </html>
  );
}
