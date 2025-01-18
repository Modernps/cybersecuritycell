'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Lock, ChevronDown, ChevronUp } from 'lucide-react'

interface TeamMember {
  name: string;
  role: string;
  quote: string;
  image: string;
}

interface Team {
  name: string;
  description: string;
  members: TeamMember[];
  isLocked?: boolean;
}

const teams: Team[] = [
  {
    name: "Core Team",
    description: "Our research team is at the forefront of cybersecurity innovation, developing cutting-edge solutions to protect against emerging threats.",
    members: [
      {
        name: "Kanak Lingwat",
        role: "President",
        quote: "In the realm of cybersecurity, knowledge is not just power—it's protection.",
        image: "/Kanak.png.JPG?height=300&width=300"
      },
      {
        name: "Rishita Kapile",
        role: "Vice President",
        quote: "Every line of code can be a fortress or a vulnerability. Choose wisely.",
        image: "/Rishita.png.JPG?height=300&width=300"
      },
      {
        name: "Bhuvnesh Marathe",
        role: "Secretary",
        quote: "Every line of code can be a fortress or a vulnerability. Choose wisely.",
        image: "/Bhuvanesh.png.JPG?height=300&width=300"
      },
      {
        name: "Rajiv Surgoniwar",
        role: "Treasurer",
        quote: "Every line of code can be a fortress or a vulnerability. Choose wisely.",
        image: "/Rajiv.png.JPG?height=300&width=300"
      }
    ]
  },
  {
    name: "Technical Team",
    description: "Our digital literacy team is dedicated to empowering individuals with the knowledge and skills to navigate the digital world safely.",
    members: [
      {
        name: "Arnav Bhandarkar",
        role: "Technical Lead",
        quote: "Empowering individuals with digital literacy is our path to a secure future.",
        image: "/Arnav.png.JPG?height=300&width=300"
      },
      {
        name: "Prabhakar Mishra",
        role: "Technical Team Member",
        quote: "In the dance of data, security leads and innovation follows.",
        image: "/Prabhakar.png.JPG?height=300&width=300"
      },
      {
        name: "Abhijit More",
        role: "Technical Team Member",
        quote: "In the dance of data, security leads and innovation follows.",
        image: "/Abhijit.png.JPG?height=300&width=300"
      },
      {
        name: "Dhiraj More",
        role: "Community Outreach Specialist",
        quote: "In the dance of data, security leads and innovation follows.",
        image: "/placeholder.svg?height=300&width=300"
      },
      {
        name: "Sahil Thomas",
        role: "Technical Team Member",
        quote: "In the dance of data, security leads and innovation follows.",
        image: "/placeholder.svg?height=300&width=300"
      },
      {
        name: "Arman Bansal",
        role: "Technical Team Member",
        quote: "In the dance of data, security leads and innovation follows.",
        image: "/placeholder.svg?height=300&width=300"
      }
    ]
  },
  {
    name: "Event Management Team",
    description: "Our incident response team is always ready to tackle cybersecurity breaches and minimize their impact on organizations.",
    members: [
      {
        name: "Maya Rodriguez",
        role: "Incident Response Lead",
        quote: "In the face of a cyber incident, speed and precision are our greatest allies.",
        image: "/placeholder.svg?height=300&width=300"
      },
      {
        name: "Jamal Washington",
        role: "Forensic Analyst",
        quote: "Every digital footprint tells a story. Our job is to read between the lines.",
        image: "/placeholder.svg?height=300&width=300"
      }
    ],
    isLocked: true
  },
  {
    name: "Content Team",
    description: "Our content team is dedicated to creating engaging and informative materials to educate the public on cybersecurity best practices.",
    members: [
      {
        name: "Ayush Chaudhary",
        role: "Content Team Lead",
        quote: "Fear the digital criminals, not enough to go crazy, but enough to not go lazy",
        image: "/Ayush.png.JPG?height=300&width=300"
      },
      {
        name: "Anay Kamdeo",
        role: "Content Team Member",
        quote: "Clear communication is our first line of defense in the cyber world.",
        image: "/Anay.JPG?height=300&width=300"
      }
    ]
  },
  {
    name: "Web Development Team",
    description: "Our digital literacy team is dedicated to empowering individuals with the knowledge and skills to navigate the digital world safely.",
    members: [
      {
        name: "Arnav Bhandarkar",
        role: "Web Lead",
        quote: "Empowering individuals with digital literacy is our path to a secure future.",
        image: "/Arnav.png.JPG?height=300&width=300"
      },
      {
        name: "Madhur Patil",
        role: "Full Stack Developer",
        quote: "In the dance of data, security leads and innovation follows.",
        image: "/Madhur.png.JPG?height=300&width=300"
      },
      {
        name: "Vishak Ranjan",
        role: "Front End Developer",
        quote: "In the dance of data, security leads and innovation follows.",
        image: "/Vishak.png.JPG?height=300&width=300"
      },
      {
        name: "Yash Shivakar",
        role: "Back End Developer",
        quote: "FIll",
        image: "/Yash.png.JPG?height=300&width=300"
      }
    ]
  },
  {
    name: "Social Media Team",
    description:  "CyberSakti empowers students with practical cybersecurity knowledge and real-world skills to stay safe online.",
    members : [
      {
        name: "Shreyas Kapre",
        role: "Social media Team Lead",
        quote: "Empowering individuals with digital literacy is our path to a secure future.",
        image: "/Shreyas.JPG?height=300&width=300"
      },
      {
        name: "Deepanika Sahu",
        role: "Social media Team Member",
        quote: "Empowering individuals with digital literacy is our path to a secure future.",
        image: "/Deepanika.JPG?height=300&width=300"
      },
      {
        name: "Shwetanshi Patro",
        role: "Social media Team Member",
        quote: "Empowering individuals with digital literacy is our path to a secure future.",
        image: "/Shwetanshi.JPG?height=300&width=300"
      },
      {
        name: "Sujal Virkhede",
        role: "Social media Team Member",
        quote: "",
        image: "/Sujal.JPG?height=300&width=300"
      },

    ]
  }
];

const pastTeams: Team[] = [
  {
    name: "Core Team 2023",
    description: "The founding team that established the foundation of CyberShakti.",
    members: [
      {
        name: "Rashmi Deshpande",
        role: "Former President",
        quote: "Building the future of cybersecurity education.",
        image: "/placeholder.svg?height=300&width=300"
      },
      {
        name: "Mansi Jadhav",
        role: "Former Vice President",
        quote: "Creating a legacy of digital security.",
        image: "/placeholder.svg?height=300&width=300"
      },
      {
        name: "Kavin Padnekar",
        role: "Former Secretary",
        quote: "Building the future of cybersecurity education.",
        image: "/placeholder.svg?height=300&width=300"
      }
    ]
  },
  // Add more past teams as needed
];

export default function AboutPage() {
  const [activeTeam, setActiveTeam] = useState<string | null>(null);
  const [activePastTeam, setActivePastTeam] = useState<string | null>(null);
  const [hoveredLocked, setHoveredLocked] = useState(false);

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <motion.h1 
        className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center tracking-tight font-jersey text-white"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        About Us
      </motion.h1>

      {/* About Us Section */}
      <motion.div 
        className="bg-purple-primary/20 rounded-lg shadow-lg p-6 sm:p-8 mb-8 sm:mb-12 border border-purple-accent/30"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        id="about-us"
      >
        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-300">
          Cyber Shakti is a rising student-run organization at MIT-ADT dedicated to empowering students with the knowledge and skills to navigate the ever-evolving cybersecurity landscape. We host workshops, events, and competitions to foster a passionate and informed community of future cybersecurity professionals. Stay tuned for exciting initiatives and join us to become a part of the solution!
        </p>
      </motion.div>

      {/* Establishment Section */}
      <motion.div 
        className="bg-purple-primary/20 rounded-lg shadow-lg p-6 sm:p-8 mb-8 sm:mb-12 border border-purple-accent/30"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        id="establishment"
      >
        <h2 className="text-lg sm:text-xl font-bold mb-4 font-press-start-2p text-white">Establishment</h2>
        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-300">
          CyberShakti was established in 2023 as a response to the growing need for cybersecurity awareness and education among students. Founded by a group of passionate cybersecurity enthusiasts at MIT-ADT University, the cell has grown from a small group of dedicated individuals to a thriving community of learners and practitioners.
        </p>
      </motion.div>

      {/* Motto Section */}
      <motion.div 
        className="bg-purple-primary/20 rounded-lg shadow-lg p-6 sm:p-8 mb-8 sm:mb-12 border border-purple-accent/30"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        id="motto"
      >
        <h2 className="text-lg sm:text-xl font-bold mb-4 font-press-start-2p text-white">Our Motto</h2>
        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-300">
        &quot;Empowering Security, Enabling Trust&quot; - Our motto reflects our commitment to not just teaching cybersecurity, but empowering individuals to become active participants in creating a secure digital world. We believe that true security comes from understanding, and trust is built through knowledge and competence.
        </p>
      </motion.div>
      
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-center font-jersey text-white" id="our-team">Our Teams</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {teams.map((team, index) => (
          <motion.div
            key={team.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <Button
              onClick={() => {
                if (!team.isLocked) {
                  setActiveTeam(activeTeam === team.name ? null : team.name)
                }
              }}
              onMouseEnter={() => team.isLocked && setHoveredLocked(true)}
              onMouseLeave={() => team.isLocked && setHoveredLocked(false)}
              variant={activeTeam === team.name ? "default" : "outline"}
              className={`w-full h-full min-h-[80px] sm:min-h-[100px] relative overflow-hidden
                ${team.isLocked 
                  ? 'bg-purple-primary/10 text-gray-400 cursor-not-allowed' 
                  : ''
                } 
                transition-all duration-300 group`}
            >
              <div className="relative z-10 flex flex-col items-center justify-center space-y-2">
                {team.isLocked ? (
                  <>
                    <Lock className="w-5 h-5 mb-2" />
                    <span className="font-press-start-2p text-xs">
                      {hoveredLocked ? "Coming Soon" : team.name}
                    </span>
                  </>
                ) : (
                  <>
                    {activeTeam === team.name ? (
                      <ChevronUp className="w-5 h-5 mb-2" />
                    ) : (
                      <ChevronDown className="w-5 h-5 mb-2" />
                    )}
                    <span className="font-press-start-2p text-xs">{team.name}</span>
                  </>
                )}
              </div>
              {!team.isLocked && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              )}
            </Button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeTeam && (
          <motion.div
            key={activeTeam}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-purple-primary/20 rounded-lg shadow-lg overflow-hidden border border-purple-accent/30"
          >
            {teams.find(team => team.name === activeTeam)?.members.map((member, index) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="group relative flex flex-col md:flex-row border-b last:border-b-0 border-purple-accent/30 hover:bg-purple-primary/30 transition-colors duration-300"
              >
                <div className="md:w-1/3 p-4 sm:p-6 relative overflow-hidden">
                  <div className="relative">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="object-cover w-full h-64 rounded-lg transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
                  </div>
                </div>
                <div className="md:w-2/3 p-4 sm:p-6">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold mb-2 font-press-start-2p text-white group-hover:text-purple-accent transition-colors duration-300">
                    {member.name}
                  </h3>
                  <h4 className="text-xs sm:text-sm mb-4 text-purple-accent/80 font-press-start-2p">
                    {member.role}
                  </h4>
                  <p className="text-[10px] sm:text-xs italic mb-4 text-gray-300 font-press-start-2p">
                  &quot;{member.quote}&quot;
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-400 font-press-start-2p">
                    {teams.find(team => team.name === activeTeam)?.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-accent/0 via-purple-accent to-purple-accent/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Past Teams Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-16"
      >
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-center font-jersey text-white">Past Teams</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {pastTeams.map((team, index) => (
            <motion.div
              key={team.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Button
                onClick={() => setActivePastTeam(activePastTeam === team.name ? null : team.name)}
                variant={activePastTeam === team.name ? "default" : "outline"}
                className="w-full h-full min-h-[80px] sm:min-h-[100px] relative overflow-hidden transition-all duration-300 group"
              >
                <div className="relative z-10 flex flex-col items-center justify-center space-y-2">
                  {activePastTeam === team.name ? (
                    <ChevronUp className="w-5 h-5 mb-2" />
                  ) : (
                    <ChevronDown className="w-5 h-5 mb-2" />
                  )}
                  <span className="font-press-start-2p text-xs">{team.name}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Button>
            </motion.div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activePastTeam && (
            <motion.div
              key={activePastTeam}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-purple-primary/20 rounded-lg shadow-lg overflow-hidden border border-purple-accent/30"
            >
              {pastTeams.find(team => team.name === activePastTeam)?.members.map((member, index) => (
                <motion.div 
                  key={member.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="group relative flex flex-col md:flex-row border-b last:border-b-0 border-purple-accent/30 hover:bg-purple-primary/30 transition-colors duration-300"
                >
                  <div className="md:w-1/3 p-4 sm:p-6 relative overflow-hidden">
                    <div className="relative">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={300}
                        height={300}
                        className="object-cover w-full h-64 rounded-lg transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
                    </div>
                  </div>
                  <div className="md:w-2/3 p-4 sm:p-6">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold mb-2 font-press-start-2p text-white group-hover:text-purple-accent transition-colors duration-300">
                      {member.name}
                    </h3>
                    <h4 className="text-xs sm:text-sm mb-4 text-purple-accent/80 font-press-start-2p">
                      {member.role}
                    </h4>
                    <p className="text-[10px] sm:text-xs italic mb-4 text-gray-300 font-press-start-2p">
                    &quot;{member.quote}&quot;
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

