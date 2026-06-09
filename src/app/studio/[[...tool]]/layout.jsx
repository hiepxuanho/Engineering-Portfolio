export const metadata = {
  title: 'Sanity Studio',
  description: 'Sanity Studio for Portfolio',
}

export default function StudioLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}
