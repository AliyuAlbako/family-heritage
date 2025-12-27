import { Users, Search } from 'lucide-react';
import { useState } from 'react';

export function FamilyTreePage() {
  const [selectedGeneration, setSelectedGeneration] = useState('all');

  const familyMembers = [
    {
      id: 1,
      name: 'Haji Ramalan bin Abdullah',
      generation: 1,
      relation: 'Founder',
      birth: '1920',
      children: ['Ahmad', 'Fatimah', 'Hassan'],
    },
    {
      id: 2,
      name: 'Ahmad bin Ramalan',
      generation: 2,
      relation: 'Son of Haji Ramalan',
      birth: '1945',
      children: ['Yusof', 'Siti', 'Ali'],
    },
    {
      id: 3,
      name: 'Fatimah binti Ramalan',
      generation: 2,
      relation: 'Daughter of Haji Ramalan',
      birth: '1948',
      children: ['Zainab', 'Ibrahim'],
    },
    {
      id: 4,
      name: 'Hassan bin Ramalan',
      generation: 2,
      relation: 'Son of Haji Ramalan',
      birth: '1952',
      children: ['Nadia', 'Rahman', 'Sofia'],
    },
    {
      id: 5,
      name: 'Yusof bin Ahmad',
      generation: 3,
      relation: 'Grandson of Haji Ramalan',
      birth: '1970',
      children: ['Amir', 'Laila'],
    },
    {
      id: 6,
      name: 'Siti binti Ahmad',
      generation: 3,
      relation: 'Granddaughter of Haji Ramalan',
      birth: '1973',
      children: ['Nur', 'Hadi'],
    },
    {
      id: 7,
      name: 'Zainab binti Fatimah',
      generation: 3,
      relation: 'Granddaughter of Haji Ramalan',
      birth: '1975',
      children: ['Iman'],
    },
    {
      id: 8,
      name: 'Nadia binti Hassan',
      generation: 3,
      relation: 'Granddaughter of Haji Ramalan',
      birth: '1980',
      children: ['Aziz', 'Leena'],
    },
  ];

  const generations = [
    { value: 'all', label: 'All Generations' },
    { value: '1', label: '1st Generation - Founders' },
    { value: '2', label: '2nd Generation - Children' },
    { value: '3', label: '3rd Generation - Grandchildren' },
    { value: '4', label: '4th Generation - Great-Grandchildren' },
  ];

  const filteredMembers =
    selectedGeneration === 'all'
      ? familyMembers
      : familyMembers.filter((m) => m.generation.toString() === selectedGeneration);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4">Family Tree</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore the Ramalan family lineage spanning generations. Click on family members to learn more about
            their stories and connections.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="flex items-center gap-4 flex-wrap">
            <label className="text-muted-foreground">View:</label>
            <select
              value={selectedGeneration}
              onChange={(e) => setSelectedGeneration(e.target.value)}
              className="px-4 py-2 border border-border rounded-lg bg-card focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {generations.map((gen) => (
                <option key={gen.value} value={gen.value}>
                  {gen.label}
                </option>
              ))}
            </select>
          </div>

          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Search family members..."
              className="pl-10 pr-4 py-2 border border-border rounded-lg bg-card focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-64"
            />
          </div>
        </div>

        {/* Tree Visualization */}
        <div className="mb-12 bg-card rounded-xl p-8 shadow-sm border border-border">
          <div className="text-center mb-8">
            <h2 className="mb-2">Family Lineage Overview</h2>
            <p className="text-muted-foreground">Visual representation of our family tree</p>
          </div>

          <div className="flex flex-col items-center space-y-8">
            {/* Generation 1 */}
            <div className="text-center">
              <div className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg shadow-md">
                <Users size={24} className="mx-auto mb-2" />
                <h3 className="text-primary-foreground">Haji Ramalan</h3>
                <p className="text-sm text-primary-foreground/80">Founder (1920-2005)</p>
              </div>
            </div>

            {/* Connector */}
            <div className="w-0.5 h-12 bg-border"></div>

            {/* Generation 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
              {['Ahmad', 'Fatimah', 'Hassan'].map((name) => (
                <div key={name} className="text-center">
                  <div className="bg-accent text-accent-foreground px-6 py-4 rounded-lg shadow-md">
                    <Users size={20} className="mx-auto mb-2" />
                    <h4 className="text-accent-foreground">{name}</h4>
                    <p className="text-sm text-accent-foreground/80">2nd Generation</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Connector */}
            <div className="w-0.5 h-12 bg-border"></div>

            {/* Generation 3+ Indicator */}
            <div className="text-center bg-secondary/20 px-8 py-4 rounded-lg">
              <Users size={24} className="mx-auto mb-2 text-secondary" />
              <h4>Multiple Grandchildren & Great-Grandchildren</h4>
              <p className="text-sm text-muted-foreground">See detailed list below</p>
            </div>
          </div>
        </div>

        {/* Family Members Grid */}
        <div>
          <h2 className="mb-6">Family Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.relation}</p>
                  </div>
                </div>

                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span className="text-sm">Generation:</span>
                    <span className="text-sm font-medium">{member.generation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Born:</span>
                    <span className="text-sm font-medium">{member.birth}</span>
                  </div>
                  {member.children && member.children.length > 0 && (
                    <div className="pt-2 border-t border-border">
                      <span className="text-sm">Children: </span>
                      <span className="text-sm">{member.children.join(', ')}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <section className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Total Members', value: '50+' },
            { label: 'Generations', value: '4' },
            { label: 'Active Branches', value: '8' },
            { label: 'Countries', value: '3' },
          ].map((stat) => (
            <div key={stat.label} className="bg-card rounded-xl p-6 text-center shadow-sm border border-border">
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
