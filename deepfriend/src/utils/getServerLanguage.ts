import { AllowedLanguagesEncodedType } from '../hooks/slice/systemLanguage';

export const ALLOWED_LANGUAGES: AllowedLanguagesEncodedType[] = ['en', 'es'];
/*
import { headers } from 'next/headers';


export async function getServerLanguage(): Promise<AllowedLanguagesEncodedType> {
  const _headers = await headers();
  const acceptLang = _headers.get('accept-language') ?? '';
  const primary = acceptLang.split(',')[0]?.split('-')[0]?.toLowerCase();
  if (ALLOWED_LANGUAGES.includes(primary as AllowedLanguagesEncodedType)) return (primary as AllowedLanguagesEncodedType)
  else return 'es';
}

*/