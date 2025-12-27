import { BookOpen, Heart, User } from 'lucide-react';

export function StoriesPage() {
  const stories = [
    {
      id: 1,
      title: 'Memories of Haji Ramalan',
      author: 'Ahmad bin Ramalan',
      date: 'January 15, 2025',
      excerpt:
        'My father, Haji Ramalan, was a man of great wisdom and kindness. I remember how he would gather us every evening to share stories of our ancestors and teach us the values that have guided our family for generations...',
      fullStory: 'Full story content here...',
      category: 'Heritage',
    },
    {
      id: 2,
      title: 'The Family Home on the Hill',
      author: 'Fatimah binti Ramalan',
      date: 'December 28, 2024',
      excerpt:
        'The old house still stands on the hill where we grew up. Every corner holds a memory - the mango tree where we played, the kitchen where grandmother taught us to cook, the veranda where grandfather told his tales...',
      fullStory: 'Full story content here...',
      category: 'Memories',
    },
    {
      id: 3,
      title: 'Learning from Our Elders',
      author: 'Yusof bin Ahmad',
      date: 'December 10, 2024',
      excerpt:
        'Growing up, I had the privilege of spending time with my grandparents. Their lessons about patience, respect, and family unity have shaped who I am today. I want to share these valuable teachings with the younger generation...',
      fullStory: 'Full story content here...',
      category: 'Wisdom',
    },
    {
      id: 4,
      title: 'Traditional Recipes Passed Down',
      author: 'Siti binti Ahmad',
      date: 'November 22, 2024',
      excerpt:
        'Our family has treasured recipes that have been passed down through four generations. Each dish carries not just flavors, but stories of love, celebration, and togetherness. Here are some of those special recipes...',
      fullStory: 'Full story content here...',
      category: 'Tradition',
    },
    {
      id: 5,
      title: 'Journey to New Horizons',
      author: 'Rahman bin Hassan',
      date: 'October 5, 2024',
      excerpt:
        'When I decided to pursue opportunities abroad, I carried with me not just belongings, but the spirit of our family. This is my story of staying connected to our roots while embracing new experiences...',
      fullStory: 'Full story content here...',
      category: 'Modern Life',
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4">Family Stories & Memories</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A collection of heartfelt stories, memories, and wisdom passed down through generations.
            Read, reflect, and contribute your own experiences to our family legacy.
          </p>
        </div>

        {/* Stories List */}
        <div className="space-y-8">
          {stories.map((story) => (
            <article
              key={story.id}
              className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-6">
                <div className="hidden sm:block flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <BookOpen className="text-primary" size={28} />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm">
                      {story.category}
                    </span>
                    <span className="text-sm text-muted-foreground">{story.date}</span>
                  </div>

                  <h2 className="mb-3">{story.title}</h2>

                  <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                    <User size={16} />
                    <span className="text-sm">By {story.author}</span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">{story.excerpt}</p>

                  <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                    <span>Read Full Story</span>
                    <BookOpen size={18} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Share Your Story CTA */}
        <section className="mt-16 bg-primary text-primary-foreground rounded-xl p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <Heart size={48} className="mx-auto mb-6" />
            <h2 className="mb-4 text-primary-foreground">Share Your Story</h2>
            <p className="text-lg mb-8 opacity-90">
              Every family member has unique experiences and memories to share. Your story could inspire and
              connect generations. We'd love to hear from you.
            </p>
            <button className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors">
              Write Your Story
            </button>
          </div>
        </section>

        {/* Categories */}
        <section className="mt-16">
          <h3 className="mb-6 text-center">Browse by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Heritage', 'Memories', 'Wisdom', 'Tradition', 'Modern Life'].map((category) => (
              <button
                key={category}
                className="px-4 py-3 bg-card rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors text-center"
              >
                {category}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
