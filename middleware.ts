import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Uma lista de todas as localidades que são suportadas
  locales: ['en', 'pt'],

  // Se a localidade solicitada não for suportada, usará essa localidade padrão
  defaultLocale: 'en',

  // Detecta automaticamente a localidade preferida com base no cabeçalho Accept-Language
  localeDetection: true
});

export const config = {
  // Intercepta solicitações para todas as rotas, exceto para rotas do sistema Next.js como /_next/ ou /api/
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}; 