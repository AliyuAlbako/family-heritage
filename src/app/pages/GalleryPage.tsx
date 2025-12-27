import { ImageIcon } from 'lucide-react';

export function GalleryPage() {
  const albums = [
    {
      id: 1,
      title: 'Family Reunion 2025',
      date: 'January 2025',
      photoCount: 45,
      coverImage: 'https://images.unsplash.com/photo-1544863308-ae78b44e143c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjByZXVuaW9uJTIwd2FybXxlbnwxfHx8fDE3NjYzMTIxNTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Walimah - Ahmad & Siti',
      date: 'December 2024',
      photoCount: 120,
      coverImage: 'https://images.unsplash.com/photo-1765990153175-38d1a875be65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGZhbWlseSUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc2NjMxMjE0OXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Heritage Photos',
      date: '1950s - 1990s',
      photoCount: 78,
      coverImage: 'https://images.unsplash.com/photo-1763154431744-67550662000d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBmYW1pbHklMjBwaG90b3MlMjB2aW50YWdlfGVufDF8fHx8MTc2NjMxMjE1MHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      title: 'Children Gathering 2024',
      date: 'September 2024',
      photoCount: 34,
      coverImage: 'https://images.unsplash.com/photo-1765248150485-a5efde8d2cdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBnYXRoZXJpbmclMjBoZXJpdGFnZXxlbnwxfHx8fDE3NjYzMTIxNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 5,
      title: 'Eid Celebrations',
      date: 'April 2024',
      photoCount: 56,
      coverImage: 'https://images.unsplash.com/photo-1761233976686-f43410a4f5d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjB0cmVlJTIwZ2VuZXJhdGlvbnN8ZW58MXx8fHwxNzY2MzEyMTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 6,
      title: 'Elder Appreciation Day',
      date: 'March 2024',
      photoCount: 29,
      coverImage: 'https://images.unsplash.com/photo-1544863308-ae78b44e143c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjByZXVuaW9uJTIwd2FybXxlbnwxfHx8fDE3NjYzMTIxNTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4">Photo Gallery</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Browse through our collection of cherished family moments, from historic photographs to recent celebrations.
            Each image tells a story of our shared heritage and precious memories.
          </p>
        </div>

        {/* Albums Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album) => (
            <div
              key={album.id}
              className="group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 bg-card border border-border"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={album.coverImage}
                  alt={album.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <ImageIcon size={20} />
                    <span className="text-sm">{album.photoCount} photos</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2">{album.title}</h3>
                <p className="text-sm text-muted-foreground">{album.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Upload Section */}
        <section className="mt-16 text-center bg-muted rounded-xl p-12">
          <div className="max-w-2xl mx-auto">
            <ImageIcon size={48} className="mx-auto mb-6 text-primary" />
            <h2 className="mb-4">Share Your Photos</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Have photos from family events? Help us preserve our memories by uploading your pictures to share with everyone.
            </p>
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Upload Photos
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
