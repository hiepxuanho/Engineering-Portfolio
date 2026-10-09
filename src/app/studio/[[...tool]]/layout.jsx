export const metadata = {
  title: 'Sanity Studio',
  description: 'Sanity Studio for Portfolio',
}

export default function StudioLayout({ children }) {
  return (
    <div style={{ height: '100vh', width: '100vw', margin: 0, padding: 0, position: 'relative', zIndex: 60 }}>
      {children}
    </div>
  )
}
