export interface TenantData {
  emoji: string;
  title: string;
  description: string;
  createdAt: number;
}

export function isValidIcon(str: string) {
  if (str.length > 10) {
    return false;
  }

  try {
    const emojiPattern = /[\p{Emoji}]/u;
    if (emojiPattern.test(str)) {
      return true;
    }
  } catch (error) {
    console.warn(
      'Emoji regex validation failed, using fallback validation',
      error
    );
  }

  return str.length >= 1 && str.length <= 10;
}

export async function getTenantData(subdomain: string): Promise<TenantData | null> {
  const sanitizedSubdomain = subdomain.toLowerCase().replace(/[^a-z0-9-]/g, '');

  if (sanitizedSubdomain === 'ngo') {
    return {
      emoji: '🤝',
      title: 'NGO Portal',
      description: 'Making the world a better place through community action and volunteer work.',
      createdAt: Date.now()
    };
  }
  if (sanitizedSubdomain === 'business') {
    return {
      emoji: '💼',
      title: 'Business Hub',
      description: 'Your professional workspace for managing clients, projects, and growth.',
      createdAt: Date.now()
    };
  }
  if (sanitizedSubdomain === 'admin') {
    return {
      emoji: '⚡',
      title: 'Admin Dashboard',
      description: 'Platform administration and management controls.',
      createdAt: Date.now()
    };
  }

  return null;
}
