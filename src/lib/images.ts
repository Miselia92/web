// Helper to resolve image paths
// TinaCMS saves images in public folder with leading slash (e.g. /images/foo.jpg)
// Astro handling of public images is direct.
// This utility is a placeholder for more complex logic if we move images to src/assets.

export function resolveImagePath(path: string | null | undefined) {
    if (!path) return undefined;
    // If we wanted to transform the path or add a domain, we'd do it here.
    return path;
}
