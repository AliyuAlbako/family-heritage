import { Newspaper, Calendar, Bell } from 'lucide-react';

export function NewsPage() {
  const news = [
    {
      id: 1,
      title: 'Annual Family Reunion Scheduled for June 2025',
      date: 'January 20, 2025',
      category: 'Event',
      content:
        'We are excited to announce that our annual family reunion will take place on June 15, 2025, at the Family Estate in Kampung Ramalan. Mark your calendars and prepare to join us for a day of celebration, reconnection, and creating new memories together.',
      important: true,
    },
    {
      id: 2,
      title: 'New Addition to the Family - Congratulations!',
      date: 'January 10, 2025',
      category: 'Birth',
      content:
        'Congratulations to Yusof and his wife on the birth of their daughter, Amira! Born on January 8th, both mother and baby are healthy and doing well. The family extends warm wishes to the new parents.',
      important: false,
    },
    {
      id: 3,
      title: 'Family Website Updates and New Features',
      date: 'January 5, 2025',
      category: 'Website',
      content:
        'Our family website has been updated with new features including an improved photo gallery, easier navigation, and mobile-friendly design. We encourage all family members to explore the new features and share feedback.',
      important: false,
    },
    {
      id: 4,
      title: 'Save the Date: Walimah Ceremony in July',
      date: 'December 28, 2024',
      category: 'Event',
      content:
        'Ahmad and Siti cordially invite all family members to their Walimah ceremony on July 20, 2025. Formal invitations will be sent soon. Please save the date and join us in celebrating their union.',
      important: true,
    },
    {
      id: 5,
      title: 'Family Directory Updates Needed',
      date: 'December 15, 2024',
      category: 'Update',
      content:
        'We are updating our family directory to ensure we have current contact information for all members. If you have moved, changed your phone number, or email address, please update your information through the directory page.',
      important: false,
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4">News & Announcements</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay informed with the latest news, announcements, and important updates from our family.
          </p>
        </div>

        {/* News List */}
        <div className="space-y-6">
          {news.map((item) => (
            <article
              key={item.id}
              className={`bg-card rounded-xl p-8 shadow-sm border transition-all hover:shadow-md ${
                item.important ? 'border-primary/50 bg-primary/5' : 'border-border'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="hidden sm:block flex-shrink-0">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      item.important ? 'bg-primary' : 'bg-accent'
                    }`}
                  >
                    <Newspaper className="text-white" size={28} />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    {item.important && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm">
                        <Bell size={14} />
                        Important
                      </span>
                    )}
                    <span className="px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm">
                      {item.category}
                    </span>
                  </div>

                  <h2 className="mb-3">{item.title}</h2>

                  <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                    <Calendar size={16} />
                    <span className="text-sm">{item.date}</span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Subscribe Section */}
        <section className="mt-16 bg-muted rounded-xl p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <Bell size={48} className="mx-auto mb-6 text-primary" />
            <h2 className="mb-4">Stay Updated</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Never miss important family news. Get notifications about new announcements, events, and updates.
            </p>
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Subscribe to Updates
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
