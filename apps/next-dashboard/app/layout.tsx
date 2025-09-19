export const metadata = {
  title: 'Next Dashboard',
  description: 'Next.js dashboard in the F1 monorepo'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, "Apple Color Emoji", "Segoe UI Emoji"', margin: 0 }}>
        <header style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
          <strong>Next Dashboard</strong>
        </header>
        <main style={{ padding: '1rem' }}>{children}</main>
      </body>
    </html>
  )
}
