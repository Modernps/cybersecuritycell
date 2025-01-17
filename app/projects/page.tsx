'use client'

import { ExpandableArticle } from '@/components/ExpandableArticle'
import { motion } from 'framer-motion'

interface Project {
  title: string;
  description: string;
  date: string;
  type: 'event' | 'project';
  content: string;
  imageUrl: string;
  status: 'past' | 'current' | 'upcoming';
}

const projects: Project[] = [
  {
    title: "Kali-Yug",
    description: "Learn about the latest trends in cybersecurity and how to protect your digital assets.",
    date: "2024-03-15",
    type: "event",
    content: "Kali-Yug is our flagship cybersecurity event, bringing together experts from around the world to discuss the latest trends, threats, and defenses in the digital realm. This year's event will feature hands-on workshops, keynote speeches from industry leaders, and networking opportunities with top professionals in the field. Don't miss this chance to enhance your skills and stay ahead of cyber threats!",
    imageUrl: "kali-yug.jpg", // Update this to your image filename
    status: "past"
  },
  {
    title: "Club Catalyst",
    description: "Coming soon....",
    date: "Yet to be annouced",
    type: "event",
    content: "Join us for a thought-provoking symposium on AI Ethics. We'll delve into the complex moral and societal implications of artificial intelligence, discussing topics such as bias in AI algorithms, privacy concerns, and the future of work in an AI-driven world. Featuring panel discussions, interactive debates, and presentations from leading ethicists and AI researchers, this event is crucial for anyone interested in the responsible development and deployment of AI technologies.",
    imageUrl: "club-catalyst.jpg", // Update this to your image filename
    status: "upcoming"
  },
  {
    title: "BootCamp",
    description: "Coming soon....",
    date: "Yet to be announced",
    type: "event",
    content: "Our Quantum Computing Research project is at the forefront of exploring how quantum technologies can revolutionize cryptography. We're investigating quantum-resistant encryption methods, developing quantum key distribution protocols, and studying the potential impact of quantum computers on current cryptographic systems. This ongoing project aims to ensure the security of digital communications in the post-quantum era.",
    imageUrl: "bootcamp.jpg", // Update this to your image filename
    status: "past"
  },
  {
    title: "Jaagruti Event",
    description: "Spreading Awareness about CyberSecurity and How to remain safe online.",
    date: "2025-01-18",
    type: "event",
    content: "Coming Soon",
    imageUrl: "jaagruti-event.jpg", // Update this to your image filename
    status: "upcoming"
  }
];

export default function ProjectsPage() {
  const pastEvents = projects.filter(p => p.status === 'past');
  const currentAndUpcomingEvents = projects.filter(p => ['current', 'upcoming'].includes(p.status));

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <motion.h1 
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 text-white text-center font-press-start-2p tracking-wide"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Projects & Events
      </motion.h1>

      {/* Current and Upcoming Events Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <h2 className="text-base sm:text-lg md:text-xl font-bold mb-6 text-white font-press-start-2p">
          Current & Upcoming Events
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {currentAndUpcomingEvents.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ExpandableArticle project={item} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Past Events Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-base sm:text-lg md:text-xl font-bold mb-6 text-white font-press-start-2p">
          Past Events
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {pastEvents.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ExpandableArticle project={item} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

