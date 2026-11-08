'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();

  const changeLocale = (nextLocale: 'en' | 'id') => {
    if (nextLocale === locale) return;
    document.cookie = `portfolio-locale=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    router.refresh();
  };

  return (
    <div
      className="fixed right-4 top-4 z-50 flex items-center gap-1 border-2 border-black bg-white p-1 text-xs font-bold shadow-lg"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => changeLocale('en')}
        className={`px-2 py-1 transition-colors ${locale === 'en' ? 'bg-black text-white' : 'text-black hover:bg-gray-200'}`}
        aria-pressed={locale === 'en'}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => changeLocale('id')}
        className={`px-2 py-1 transition-colors ${locale === 'id' ? 'bg-black text-white' : 'text-black hover:bg-gray-200'}`}
        aria-pressed={locale === 'id'}
      >
        ID
      </button>
    </div>
  );
}
