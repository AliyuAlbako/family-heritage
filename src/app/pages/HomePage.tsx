import { Link } from 'react-router-dom';
import { TreePine, Calendar, ImageIcon, BookOpen, Newspaper, Users, Info, Heart } from 'lucide-react';
import familyBg from "../assets/images/family-bg1.jpg";



export function HomePage() {
  const features = [
    {
      icon: TreePine,
      title: 'Family Tree',
      description: 'Explore our family lineage and discover your roots across generations.',
      link: '/family-tree',
      color: 'bg-primary',
    },
    {
      icon: Calendar,
      title: 'Events',
      description: 'Stay updated on upcoming Walimah ceremonies and family gatherings.',
      link: '/events',
      color: 'bg-accent',
    },
    {
      icon: ImageIcon,
      title: 'Gallery',
      description: 'Browse through cherished memories and family photographs.',
      link: '/gallery',
      color: 'bg-secondary',
    },
    {
      icon: BookOpen,
      title: 'Stories',
      description: 'Read and share heartfelt stories and memories from our family.',
      link: '/stories',
      color: 'bg-primary',
    },
    {
      icon: Newspaper,
      title: 'News',
      description: 'Get the latest announcements and updates from family members.',
      link: '/news',
      color: 'bg-accent',
    },
    {
      icon: Users,
      title: 'Directory',
      description: 'Find and connect with family members around the world.',
      link: '/directory',
      color: 'bg-secondary',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] mid:min-h-[85vh] bg-cover bg-top md:bg-center flex items-center pt-53 pb-32 px-4"
        style={{
          // backgroundImage: `linear-gradient(rgba(27, 94, 62, 0.7), rgba(27, 94, 62, 0.7)), url(https://images.unsplash.com/photo-1765248150485-a5efde8d2cdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBnYXRoZXJpbmclMjBoZXJpdGFnZXxlbnwxfHx8fDE3NjYzMTIxNDh8MA&ixlib=rb-4.1.0&q=80&w=1080)`,
          // backgroundImage: `linear-gradient(rgba(27, 94, 62, 0.7), rgba(27, 94, 62, 0.7)), url(${familyBg})`,
         backgroundImage: `
    linear-gradient(
    to bottom,
      rgba(20, 83, 45, 0.6),
      rgba(20, 83, 45, 0.6)),url(${familyBg})`, backgroundSize: "cover", backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl mb-6 text-white">Ramalan Descendants</h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Preserving our heritage, celebrating our unity, honoring our ancestors
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors gap-2"
            >
              <Info size={20} />
              Learn Our Story
            </Link>
            <Link
              to="/family-tree"
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors gap-2"
            >
              <TreePine size={20} />
              Explore Family Tree
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Welcome to Our Family Website</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Welcome to the Ramalan Descendant Family website, a place where we celebrate our shared heritage,
            preserve our family history, and stay connected across generations. Here, you'll find stories of
            our ancestors, updates on family events, and a way to connect with relatives near and far.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Explore Our Family Resources</h2>
            <p className="text-lg text-muted-foreground">
              Discover everything our family website has to offer
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={feature.title}
                  to={feature.link}
                  className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-border"
                >
                  <div className={`${feature.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Family Values */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Family Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide us as a family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Unity',
                description: 'Strengthening bonds across generations and geographical boundaries.',
              },
              {
                icon: BookOpen,
                title: 'Heritage',
                description: 'Preserving and sharing our family history and cultural traditions.',
              },
              {
                icon: Users,
                title: 'Respect',
                description: 'Honoring our elders and nurturing the young with care and wisdom.',
              },
            ].map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                    <Icon size={36} className="text-primary" />
                  </div>
                  <h3 className="mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-primary-foreground">Stay Connected with Your Family</h2>
          <p className="text-xl mb-8 opacity-90">
            Join us in preserving our heritage and building stronger family bonds
          </p>
          <Link
            to="/directory"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors gap-2"
          >
            <Users size={20} />
            View Family Directory
          </Link>
        </div>
      </section>
    </div>
  );
}
