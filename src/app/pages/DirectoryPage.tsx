import { User, Mail, Phone, MapPin, Search } from 'lucide-react';

export function DirectoryPage() {
  const familyContacts = [
    {
      id: 1,
      name: 'Ahmad bin Ramalan',
      generation: '2nd Generation',
      location: 'Kuala Lumpur, Malaysia',
      email: 'ahmad.ramalan@email.com',
      phone: '+2348043800631',
    },
    {
      id: 2,
      name: 'Fatimah binti Ramalan',
      generation: '2nd Generation',
      location: 'Penang, Malaysia',
      email: 'fatimah.r@email.com',
      phone: '+2348043800631',
    },
    {
      id: 3,
      name: 'Hassan bin Ramalan',
      generation: '2nd Generation',
      location: 'Johor Bahru, Malaysia',
      email: 'hassan.ramalan@email.com',
      phone: '+2348043800631',
    },
    {
      id: 4,
      name: 'Yusof bin Ahmad',
      generation: '3rd Generation',
      location: 'Singapore',
      email: 'yusof.ahmad@email.com',
      phone: '+2348043800631',
    },
    {
      id: 5,
      name: 'Siti binti Ahmad',
      generation: '3rd Generation',
      location: 'Shah Alam, Malaysia',
      email: 'siti.ahmad@email.com',
      phone: '+2348043800631',
    },
    {
      id: 6,
      name: 'Zainab binti Fatimah',
      generation: '3rd Generation',
      location: 'London, UK',
      email: 'zainab.f@email.com',
      phone: '+2348043800631',
    },
    {
      id: 7,
      name: 'Rahman bin Hassan',
      generation: '3rd Generation',
      location: 'Dubai, UAE',
      email: 'rahman.hassan@email.com',
      phone: '+2348043800631',
    },
    {
      id: 8,
      name: 'Nadia binti Hassan',
      generation: '3rd Generation',
      location: 'Kuala Lumpur, Malaysia',
      email: 'nadia.hassan@email.com',
      phone: '+60 12-678 9012',
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4">Family Directory</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Connect with family members around the world. Find contact information and stay in touch with relatives near and far.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Search by name or location..."
              className="w-full pl-12 pr-4 py-4 border border-border rounded-xl bg-card focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
            />
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {familyContacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <User size={28} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="mb-1">{contact.name}</h3>
                  <p className="text-sm text-muted-foreground">{contact.generation}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin size={18} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-sm">{contact.location}</span>
                </div>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <Mail size={18} className="text-primary flex-shrink-0 mt-1" />
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm hover:text-primary transition-colors break-all"
                  >
                    {contact.email}
                  </a>
                </div>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <Phone size={18} className="text-primary flex-shrink-0 mt-1" />
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Update Info CTA */}
        <section className="mt-16 text-center bg-muted rounded-xl p-12">
          <div className="max-w-2xl mx-auto">
            <User size={48} className="mx-auto mb-6 text-primary" />
            <h2 className="mb-4">Update Your Information</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Moved recently or changed contact details? Help us keep our directory up to date so family members can reach you.
            </p>
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Update My Details
            </button>
          </div>
        </section>

        {/* Privacy Notice */}
        <div className="mt-8 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          <p>
            Your contact information is private and only visible to verified family members. We respect your privacy
            and will never share your details outside the family.
          </p>
        </div>
      </div>
    </div>
  );
}
