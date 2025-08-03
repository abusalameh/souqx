import { customAlphabet } from 'nanoid';

// Create a custom alphabet for IDs (no special characters)
const nanoid = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 12);

export function generateId(): string {
  return nanoid();
}

export function getCurrentTimestamp(): Date {
  return new Date();
}

// Helper function to parse JSON safely
export function parseJSON<T>(json: string | null, fallback: T): T {
  if (!json) return fallback;
  try {
    return JSON.parse(json);
  } catch {
    return fallback;
  }
}

// Helper function to stringify JSON safely
export function stringifyJSON(data: any): string {
  try {
    return JSON.stringify(data);
  } catch {
    return '[]';
  }
}