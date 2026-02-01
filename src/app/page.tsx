import Link from 'next/link';
import { protocol, rootDomain } from '@/lib/utils';
import { Building2, Globe2, ShieldCheck } from 'lucide-react';

export default async function HomePage() {
  const tenants = [
    {
      id: 'ngo',
      name: 'NGO Portal',
      description: 'For Non-Profit Organizations',
      emoji: '🤝',
      icon: Globe2,
      color: 'text-green-600',
      bg: 'bg-green-50 hover:bg-green-100',
    },
    {
      id: 'business',
      name: 'Business Portal',
      description: 'For Enterprise Solutions',
      emoji: '💼',
      icon: Building2,
      color: 'text-blue-600',
      bg: 'bg-blue-50 hover:bg-blue-100',
    },
    {
      id: 'admin',
      name: 'Admin Console',
      description: 'Platform Administration',
      emoji: '⚡',
      icon: ShieldCheck,
      color: 'text-purple-600',
      bg: 'bg-purple-50 hover:bg-purple-100',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white p-4">
      <div className="w-full max-w-4xl space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900">
            {rootDomain}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A multi-tenant platform example demonstrating custom subdomains for different user types.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tenants.map((tenant) => {
            const Icon = tenant.icon;
            return (
              <Link
                key={tenant.id}
                href={`${protocol}://${tenant.id}.${rootDomain}`}
                className={`group flex flex-col items-center p-8 rounded-2xl border transition-all duration-200 hover:shadow-xl ${tenant.bg} border-transparent hover:border-gray-200`}
              >
                <div className={`p-4 rounded-full bg-white shadow-sm mb-6 ${tenant.color}`}>
                  <Icon size={32} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-black transition-colors">
                  {tenant.name}
                </h2>
                <p className="text-gray-600 text-center mb-6">
                  {tenant.description}
                </p>
                <div className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110">
                  {tenant.emoji}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
