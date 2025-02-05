import { 
  type ContactMessage, 
  type InsertContact,
  type Newsletter,
  type InsertNewsletter
} from "@shared/schema";

export interface IStorage {
  createContactMessage(message: InsertContact): Promise<ContactMessage>;
  createNewsletterSubscription(sub: InsertNewsletter): Promise<Newsletter>;
}

export class MemStorage implements IStorage {
  private contacts: Map<number, ContactMessage>;
  private newsletter: Map<number, Newsletter>;
  private contactId: number;
  private newsletterId: number;

  constructor() {
    this.contacts = new Map();
    this.newsletter = new Map();
    this.contactId = 1;
    this.newsletterId = 1;
  }

  async createContactMessage(message: InsertContact): Promise<ContactMessage> {
    const id = this.contactId++;
    const contact: ContactMessage = {
      ...message,
      id,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async createNewsletterSubscription(sub: InsertNewsletter): Promise<Newsletter> {
    const id = this.newsletterId++;
    const newsletter: Newsletter = {
      ...sub,
      id,
      createdAt: new Date()
    };
    this.newsletter.set(id, newsletter);
    return newsletter;
  }
}

export const storage = new MemStorage();
