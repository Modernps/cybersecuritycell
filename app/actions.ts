'use server'

import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://Moldy_Monkey:0cg1GwF3CYQJS2n8@yashcluster0.2skuf.mongodb.net/?retryWrites=true&w=majority&appName=YashCluster0'; // Replace with your MongoDB connection string
const client = new MongoClient(uri);
const dbName = 'YashCluster0'; // Replace with your database name
const collectionName = 'Cases'; // Replace with your collection name

interface ContactFormData {
  name: string;
  email: string;
  comment?: string;
}

export async function submitContactForm(data: ContactFormData) {
  try {
    await client.connect();
    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    // Insert the contact data into the MongoDB collection
    await collection.insertOne({
      ...data,
      createdAt: new Date().toISOString(),
    });

    return { success: true };
  } catch (error) {
    console.error('Error saving contact:', error);
    throw new Error('Failed to save contact');
  } finally {
    await client.close();
  }
}
