import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Linkedin, Mail } from "lucide-react";
import { Link } from "react-router";

export function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Aria Chen",
      role: "Founder & CEO",
      bio: "Visionary leader with 15 years in luxury wellness. Former VP at La Mer.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
      email: "aria@rare.com",
      linkedin: "#",
    },
    {
      id: 2,
      name: "Marcus Williams",
      role: "Chief Experience Officer",
      bio: "Curates transformative journeys. Previously with Aman Resorts.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
      email: "marcus@rare.com",
      linkedin: "#",
    },
    {
      id: 3,
      name: "Sofia Patel",
      role: "Head of Product Curation",
      bio: "Expert in clean beauty and sustainable sourcing. Former buyer at Net-a-Porter.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80",
      email: "sofia@rare.com",
      linkedin: "#",
    },
    {
      id: 4,
      name: "James Anderson",
      role: "Director of Technology",
      bio: "Built Mishti AI platform. Previously led ML initiatives at Glossier.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
      email: "james@rare.com",
      linkedin: "#",
    },
    {
      id: 5,
      name: "Amara Johnson",
      role: "Chief Wellness Advisor",
      bio: "Licensed esthetician and holistic health practitioner. 20+ years expertise.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
      email: "amara@rare.com",
      linkedin: "#",
    },
    {
      id: 6,
      name: "Luca Romano",
      role: "Creative Director",
      bio: "Shapes RARE's visual language. Former creative lead at Byredo.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80",
      email: "luca@rare.com",
      linkedin: "#",
    },
    {
      id: 7,
      name: "Maya Rodriguez",
      role: "Head of Partnerships",
      bio: "Cultivates relationships with luxury spas and beauty brands worldwide.",
      image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=600&q=80",
      email: "maya@rare.com",
      linkedin: "#",
    },
    {
      id: 8,
      name: "Oliver Kim",
      role: "Data & Insights Lead",
      bio: "Drives personalization through analytics. Former data scientist at Sephora.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
      email: "oliver@rare.com",
      linkedin: "#",
    },
    {
      id: 9,
      name: "Isabella Santos",
      role: "Community Manager",
      bio: "Nurtures RARE's community of wellness seekers. Expert in mindful living.",
      image: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=600&q=80",
      email: "isabella@rare.com",
      linkedin: "#",
    },
  ];

  return (
    <div className="bg-cream pt-32 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-16">
        <p className="text-gold text-[9px] uppercase tracking-[5px] mb-3 text-center">
          The People
        </p>
        <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl text-dark text-center mb-6">
          Meet the <em className="text-rose">Team</em>
        </h1>
        <p className="text-mauve text-sm text-center max-w-2xl mx-auto leading-relaxed">
          A collective of wellness visionaries, beauty experts, and technology innovators
          united by a shared passion for transformative self-care experiences.
        </p>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-linen overflow-hidden hover:shadow-[0_8px_20px_rgba(46,26,26,0.12)] transition-all duration-500"
            >
              {/* Photo */}
              <div className="relative h-80 sm:h-96 overflow-hidden bg-cream">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Info */}
              <div className="p-6 sm:p-8">
                <h3 className="font-playfair text-2xl text-dark mb-1">
                  {member.name}
                </h3>
                <p className="text-rose text-[10px] uppercase tracking-[3px] mb-4">
                  {member.role}
                </p>
                <p className="text-mauve text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Contact */}
                <div className="flex items-center gap-4 pt-4 border-t border-dark/5">
                  <a
                    href={`mailto:${member.email}`}
                    className="text-mauve hover:text-rose transition-colors duration-300"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail size={16} strokeWidth={1.3} />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-mauve hover:text-rose transition-colors duration-300"
                    aria-label={`View ${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin size={16} strokeWidth={1.3} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Join Team CTA */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 mt-20 sm:mt-24 md:mt-32">
        <div className="bg-dark p-8 sm:p-12 md:p-16 text-center">
          <p className="text-gold text-[9px] uppercase tracking-[5px] mb-4">
            Careers
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl text-cream mb-4">
            Join Our <em className="text-rose">Journey</em>
          </h2>
          <p className="text-cream/60 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            We're always seeking passionate individuals who share our vision of
            redefining wellness and beauty. Explore opportunities to grow with RARE.
          </p>
          <Link
            to="/careers"
            className="inline-block border border-gold/35 text-gold px-10 py-4 text-[10px] uppercase tracking-[3px] hover:bg-gold hover:text-dark transition-all duration-300"
          >
            View Open Positions
          </Link>
        </div>
      </div>
    </div>
  );
}
