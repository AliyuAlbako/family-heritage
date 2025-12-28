import { Calendar, MapPin, Users, Clock } from 'lucide-react';

export function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Annual Family Reunion',
      date: 'Sunday, December 28, 2025',
      time: '10:00 AM - 6:00 PM',
      location: ' Majidadin Lafia (Grand Khadi) House. Musa Ilu Street, Bukan Ari, Lafia, Nasarawa State.',
      attendees: '50+ family members',
      description: 'Join us for our annual gathering where we celebrate our family bonds, share meals, and create new memories together.',
      type: 'Reunion',
    },
    // {
    //   id: 2,
    //   title: 'Walimah Ceremony - Ahmad & Siti',
    //   date: 'July 20, 2025',
    //   time: '2:00 PM - 10:00 PM',
    //   location: 'Dewan Serbaguna, Kuala Lumpur',
    //   attendees: '200+ guests',
    //   description: 'Celebrate the union of Ahmad bin Abdullah and Siti binti Rahman. All family members are cordially invited.',
    //   type: 'Walimah',
    // },
    // {
    //   id: 3,
    //   title: 'Elder Appreciation Day',
    //   date: 'August 10, 2025',
    //   time: '11:00 AM - 3:00 PM',
    //   location: 'Community Hall',
    //   attendees: '30+ family members',
    //   description: 'A special day dedicated to honoring our elders and learning from their wisdom and experiences.',
    //   type: 'Celebration',
    // },
  ];

  const pastEvents = [
    {
      id: 4,
      title: 'Annual Family Reunion',
      date: 'Sunday, December 28, 2025',
      location: ' Majidadin Lafia (Grand Khadi) House. Musa Ilu Street, Bukan Ari, Lafia, Nasarawa State.',
      attendees: '45 family members',
    },
    {
      id: 5,
      title: 'Annual Family Reunion',
      date: 'December 10, 2024',
      location: 'Grand Majidadin Lafia (Grand Khadi) House. Musa Ilu Street, Bukan Ari, Lafia, Nasarawa State.',
      attendees: '180 guests',
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4">Walimah & Family Events</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay informed about upcoming celebrations, reunions, and important family gatherings.
            Mark your calendars and join us in creating beautiful memories together.
          </p>
        </div>

        {/* Upcoming Events */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="mb-2">Upcoming Events</h2>
            <p className="text-muted-foreground">Don't miss these important family occasions</p>
          </div>

          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="bg-primary rounded-lg p-3">
                        <Calendar className="text-primary-foreground" size={24} />
                      </div>
                      <div>
                        <h3 className="mb-1">{event.title}</h3>
                        <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm">
                          {event.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Calendar size={20} className="text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Clock size={20} className="text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <MapPin size={20} className="text-primary" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Users size={20} className="text-primary" />
                        <span>{event.attendees}</span>
                      </div>
                    </div>
                  </div>

                  <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap">
                    RSVP Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section>
          <div className="mb-8">
            <h2 className="mb-2">Past Events</h2>
            <p className="text-muted-foreground">Memories from recent family gatherings</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-card rounded-xl p-6 shadow-sm border border-border">
                <h3 className="mb-4">{event.title}</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <Calendar size={18} className="text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-primary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users size={18} className="text-primary" />
                    <span>{event.attendees}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Add Event CTA */}
        <section className="mt-16 text-center bg-muted rounded-xl p-12">
          <h2 className="mb-4">Planning an Event?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            If you're organizing a family event or Walimah ceremony, let us know so we can add it to the calendar
            and keep everyone informed.
          </p>
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            Submit Event Details
          </button>
        </section>
      </div>
    </div>
  );
}
