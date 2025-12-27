import { Heart, Users, TreePine, BookOpen } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4">About the Ramalan Family</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our family history, values, and the legacy we continue to build together
          </p>
        </div>

        {/* Family History */}
        <section className="mb-16">
          <div className="bg-card rounded-xl p-8 md:p-12 shadow-sm border border-border">
            <h2 className="mb-6">Our Family History</h2>
            <div className="prose max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Ramalan family story begins with Haji Ramalan bin Abdullah, born in 1920 in a small village
                in Malaysia. A man of deep faith, unwavering principles, and boundless compassion, he established
                the foundations upon which our family continues to thrive today.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Through his wisdom and dedication to family values, Haji Ramalan built not just a family, but a
                legacy of unity, respect, and mutual support. He instilled in his children the importance of
                education, hard work, and maintaining strong family bonds regardless of geographical distance.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Today, the Ramalan family spans four generations and three countries, with members succeeding in
                various fields while staying true to the values that Haji Ramalan cherished. We continue to gather
                regularly, celebrate our heritage, and support one another through life's joys and challenges.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This website serves as a digital home for our family, where we preserve our history, share our
                stories, and stay connected across the miles. It is a testament to the enduring strength of family
                bonds and our commitment to honoring those who came before us.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">
              The principles that guide us as a family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Heart,
                title: 'Unity & Togetherness',
                description:
                  'We believe in the strength of family bonds and the importance of staying connected. Whether near or far, we support each other through all of life\'s moments.',
              },
              {
                icon: TreePine,
                title: 'Heritage Preservation',
                description:
                  'We honor our ancestors by preserving and passing down our family history, traditions, and cultural values to future generations.',
              },
              {
                icon: Users,
                title: 'Respect & Care',
                description:
                  'We show deep respect for our elders, nurture our young with love and wisdom, and treat all family members with kindness and consideration.',
              },
              {
                icon: BookOpen,
                title: 'Education & Growth',
                description:
                  'We encourage learning, personal development, and the pursuit of excellence while maintaining humility and staying grounded in our values.',
              },
            ].map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="bg-card rounded-xl p-8 shadow-sm border border-border">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <h3 className="mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Family Statistics */}
        <section className="mb-16">
          <div className="bg-primary text-primary-foreground rounded-xl p-12">
            <h2 className="mb-8 text-center text-primary-foreground">Our Family Today</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Family Members', value: '50+' },
                { label: 'Generations', value: '4' },
                { label: 'Countries', value: '3' },
                { label: 'Years of Heritage', value: '100+' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="mb-16">
          <div className="bg-card rounded-xl p-8 md:p-12 shadow-sm border border-border text-center">
            <h2 className="mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              To preserve and celebrate our family heritage while building stronger connections across generations.
              We strive to honor our past, support our present, and inspire our future by maintaining the values of
              unity, respect, and mutual care that define the Ramalan family.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="text-center bg-muted rounded-xl p-12">
          <h2 className="mb-4">Get Involved</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Have questions or suggestions for our family website? Want to contribute to our family history?
            We'd love to hear from you.
          </p>
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            Contact Us
          </button>
        </section>
      </div>
    </div>
  );
}
