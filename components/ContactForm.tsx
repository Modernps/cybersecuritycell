'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { submitContactForm } from '@/app/actions'
import { motion } from 'framer-motion'
import { Send, User, Mail, MessageSquare } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  comment: z.string().optional(),
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      comment: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      await submitContactForm(values)
      toast({
        title: "Form submitted",
        description: "Thank you for contacting us!",
      })
      form.reset()
    } catch {
      toast({
        title: "Error",
        description: "There was a problem submitting your form.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <motion.div 
          className="space-y-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg sm:text-xl font-bold tracking-tight font-press-start-2p codedex-gradient">Get in Touch</h2>
          <p className="text-xs text-muted-foreground">We&apos;d love to hear from you. Please fill out this form.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground font-press-start-2p text-xs">Name</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input placeholder="Your name" {...field} className="pl-8 text-xs" />
                    <User className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  </div>
                </FormControl>
                <FormMessage className="font-press-start-2p text-[10px]" />
              </FormItem>
            )}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground font-press-start-2p text-xs">Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input placeholder="Your email address" {...field} className="pl-8 text-xs" />
                    <Mail className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  </div>
                </FormControl>
                <FormMessage className="font-press-start-2p text-[10px]" />
              </FormItem>
            )}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground font-press-start-2p text-xs">Comment (Optional)</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Textarea placeholder="Your comment" {...field} className="min-h-[100px] pl-8 pt-8 text-xs" />
                    <MessageSquare className="absolute left-2 top-8 text-muted-foreground w-4 h-4" />
                  </div>
                </FormControl>
                <FormDescription className="text-[10px] text-muted-foreground font-press-start-2p">
                  Feel free to leave any additional comments or questions.
                </FormDescription>
                <FormMessage className="font-press-start-2p text-[10px]" />
              </FormItem>
            )}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button 
            type="submit" 
            disabled={isSubmitting} 
            className="w-full bg-purple-primary hover:bg-purple-secondary text-white font-press-start-2p text-xs sm:text-sm px-4 sm:px-6 py-3 sm:py-4 transition-all duration-300 shadow-lg hover:shadow-purple-500/20 flex items-center justify-center gap-2 mt-2"
          >
            {isSubmitting ? 'Submitting...' : (
              <>
                Send Message
                <Send className="w-4 h-4" />
              </>
            )}
          </Button>
        </motion.div>
      </form>
    </Form>
  )
}

