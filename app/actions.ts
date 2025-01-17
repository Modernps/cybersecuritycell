'use server'

import fs from 'fs/promises'
import path from 'path'

interface ContactFormData {
  name: string
  email: string
  comment?: string
}

export async function submitContactForm(data: ContactFormData) {
  const filePath = path.join(process.cwd(), 'data', 'contacts.json')
  
  try {
    // Read existing data
    let contacts = []
    try {
      const fileContent = await fs.readFile(filePath, 'utf-8')
      contacts = JSON.parse(fileContent)
    } catch {
      // File doesn't exist or is empty, start with an empty array
    }

    // Add new contact
    contacts.push({
      ...data,
      id: Date.now(),
      createdAt: new Date().toISOString()
    })

    // Write updated data back to file
    await fs.writeFile(filePath, JSON.stringify(contacts, null, 2))

    return { success: true }
  } catch (error) {
    console.error('Error saving contact:', error)
    throw new Error('Failed to save contact')
  }
}

