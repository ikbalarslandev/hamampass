function convertImageUrl(url: string): string {
  const baseUrl = "https://www.hamampass.com/_next/image";
  const encodedUrl = encodeURIComponent(url);
  const width = 640; // Define the width parameter
  const quality = 75; // Define the quality parameter

  // Construct the final URL with encoded image URL, width, and quality
  return `${baseUrl}?url=${encodedUrl}&w=${width}&q=${quality}`;
}

export default convertImageUrl;
