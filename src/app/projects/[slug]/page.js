import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const revalidate = 60;

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const query = `*[_type == "project" && slug.current == $slug][0]`;
  const project = await client.fetch(query, { slug });

  if (!project) {
    notFound();
  }

  const ptComponents = {
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) {
          return null;
        }
        return (
          <img
            alt={value.alt || ' '}
            loading="lazy"
            src={urlForImage(value).url()}
            style={{ borderRadius: '0.75rem', margin: '2rem auto', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', maxHeight: '500px', objectFit: 'cover', width: '100%' }}
          />
        );
      },
    },
    block: {
      h1: ({children}) => <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginTop: '3rem', marginBottom: '1rem' }}>{children}</h1>,
      h2: ({children}) => <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginTop: '2.5rem', marginBottom: '1rem' }}>{children}</h2>,
      h3: ({children}) => <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>{children}</h3>,
      normal: ({children}) => <p style={{ fontSize: '1.125rem', lineHeight: '1.75', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>{children}</p>,
      blockquote: ({children}) => <blockquote style={{ borderLeft: '4px solid #6366f1', paddingLeft: '1rem', fontStyle: 'italic', margin: '1.5rem 0', color: 'var(--text-secondary)' }}>{children}</blockquote>,
    },
    list: {
      bullet: ({children}) => <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-secondary)' }}>{children}</ul>,
      number: ({children}) => <ol style={{ listStyleType: 'decimal', paddingLeft: '1.5rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-secondary)' }}>{children}</ol>,
    },
    marks: {
      link: ({children, value}) => {
        const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
        return (
          <a href={value.href} rel={rel} target="_blank" style={{ color: '#6366f1', textDecoration: 'none' }} onMouseOver={(e) => e.target.style.textDecoration = 'underline'} onMouseOut={(e) => e.target.style.textDecoration = 'none'}>
            {children}
          </a>
        );
      },
    },
  };

  return (
    <main className="projects-container">
      <article className="article-card">
        
        <Link href="/projects" className="back-link">
          <svg className="back-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </Link>

        {project.mainImage && (
          <div className="article-img-wrapper">
            <img 
              src={urlForImage(project.mainImage).url()} 
              alt={project.title} 
              className="project-img"
            />
          </div>
        )}

        <h1 className="article-title">{project.title}</h1>
        
        <div>
          {project.body ? (
            <PortableText value={project.body} components={ptComponents} />
          ) : (
            <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>No content provided.</p>
          )}
        </div>
      </article>
    </main>
  );
}
