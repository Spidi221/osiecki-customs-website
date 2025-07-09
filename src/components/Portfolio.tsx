import { projects } from '../data/galleryData';
import FadeIn from './animations/FadeIn';
import LazyImage from './LazyImage';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-black scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="down">
          <h2 className="text-4xl sm:text-5xl font-black text-center text-white mb-16">
            Nasze realizacje
          </h2>
        </FadeIn>
        <div className="space-y-20">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 150}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-lg text-zinc-400">
                    {project.category}
                  </p>
                  <p className="mt-4 text-zinc-300">
                    {project.description}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <LazyImage
                      src={project.beforeImage}
                      alt={`Przed naprawą: ${project.title}`}
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                      width={400}
                      height={256}
                    />
                    <p className="text-center mt-2 font-semibold text-red-400">PRZED</p>
                  </div>
                  <div>
                    <LazyImage
                      src={project.afterImage}
                      alt={`Po naprawie: ${project.title}`}
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                      width={400}
                      height={256}
                    />
                    <p className="text-center mt-2 font-semibold text-green-400">PO</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;