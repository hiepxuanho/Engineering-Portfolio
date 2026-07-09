import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';

export const revalidate = 60;

export default async function HomelabPage() {
  const query = `*[_type == "homelab"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    mainImage,
    description
  }`;
  
  const posts = await client.fetch(query);

  return (
    <main className="projects-container">
      <h1 className="page-title">Homelab & Equipment</h1>
      
      <div className="projects-grid">
        {posts.length === 0 ? (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: 'var(--text-secondary)' }}>
            No homelab posts found. Add some in the Sanity Studio!
          </p>
        ) : (
          posts.map((post) => (
            <Link 
              key={post._id} 
              href={`/homelab/${post.slug.current}`}
              className="project-card"
            >
              <div className="project-img-wrapper">
                {post.mainImage ? (
                  <img 
                    src={urlForImage(post.mainImage).url()} 
                    alt={post.title} 
                    className="project-img"
                  />
                ) : (
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
                    No Image
                  </div>
                )}
              </div>
              <div className="project-content">
                <h2 className="project-title">{post.title}</h2>
                {post.description && <p className="project-desc">{post.description}</p>}
              </div>
            </Link>
          ))
        )}
      </div>
    </main>
  );
}
