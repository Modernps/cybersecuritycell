'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { ChevronDown, ChevronUp, Calendar } from 'lucide-react'

interface Project {
  title: string;
  description: string;
  date: string;
  type: 'event' | 'project';
  content: string;
  imageUrl: string;
}

interface ExpandableArticleProps {
  project: Project;
}

export function ExpandableArticle({ project }: ExpandableArticleProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="bg-purple-primary/20 overflow-hidden border-purple-accent/30">
      <CardHeader className="cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex justify-between items-center">
          <CardTitle className="font-press-start-2p text-xs sm:text-sm md:text-base text-white">{project.title}</CardTitle>
          <Badge variant={project.type === 'event' ? 'default' : 'secondary'} className="bg-purple-accent text-white font-press-start-2p text-[8px] sm:text-[10px] px-2 py-1">
            {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
          </Badge>
        </div>
        <CardDescription className="text-gray-300 font-press-start-2p text-[8px] sm:text-[10px] flex items-center gap-2">
          <Calendar className="w-3 h-3" />
          <span>{new Date(project.date).toLocaleDateString()}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-gray-300 text-[10px] sm:text-xs">{project.description}</p>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mt-4 space-y-4">
                <Image
                  src={`/images/${project.imageUrl}`}
                  alt={project.title}
                  width={1350}
                  height={600}
                  className="rounded-lg object-cover w-full h-48 sm:h-64"
                />
                <p className="text-foreground text-[10px] sm:text-xs">{project.content}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Button 
            onClick={() => setIsExpanded(!isExpanded)} 
            variant="outline"
            className="mt-4 font-press-start-2p text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3 flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
          >
            {isExpanded ? (
              <>
                Read Less
                <ChevronUp className="w-3 h-3" />
              </>
            ) : (
              <>
                Read More
                <ChevronDown className="w-3 h-3" />
              </>
            )}
          </Button>
        </motion.div>
      </CardContent>
    </Card>
  )
}

