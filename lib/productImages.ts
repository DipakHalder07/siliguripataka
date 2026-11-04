// All product images are self-hosted locally within the shop (in /public/assets/ or /api/media/).
// External CDNs are disabled so that the shop has zero external image dependencies.
export const IMAGE_HOSTS: string[] = [];

/** Photos uploaded in the admin are stored in the database and served from here. */
export const MEDIA_PREFIX = "/api/media/";

export function isAllowedImage(src: string) {
  if (src.startsWith("/") && !src.startsWith("//")) return true;
  try {
    const url = new URL(src);
    return url.protocol === "https:" && IMAGE_HOSTS.includes(url.hostname);
  } catch {
    return false;
  }
}
