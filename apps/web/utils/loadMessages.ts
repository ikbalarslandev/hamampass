export async function loadMessages(locale: string) {
  try {
    const messages = await import(`@hamampass/i18n/locales/${locale}.json`);
    return messages.default;
  } catch (error) {
    throw new Error(`Could not load messages for locale: ${locale}`);
  }
}
