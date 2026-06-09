import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';

export const revalidate = 60;

export default async function ProjectsPage() {
  const query = `*[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    mainImage,
    description
  }`;
  
  const projects = await client.fetch(query);

  return (
    <main className="projects-container">
      <h1 className="page-title">My Projects</h1>
      
      <div className="projects-grid">
        {projects.length === 0 ? (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: 'var(--text-secondary)' }}>
            No projects found. Add some in the Sanity Studio!
          </p>
        ) : (
          projects.map((project) => (
            <Link 
              key={project._id} 
              href={`/projects/${project.slug.current}`}
              className="project-card"
            >
              <div className="project-img-wrapper">
                {project.mainImage ? (
                  <img 
                    src={urlForImage(project.mainImage).url()} 
                    alt={project.title} 
                    className="project-img"
                  />
                ) : (
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
                    No Image
                  </div>
                )}
              </div>
              <div className="project-content">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-desc">{project.description}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </main>
  );
}
