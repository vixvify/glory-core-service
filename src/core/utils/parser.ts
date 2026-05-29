export function parseStringOrArray(input: string | string[] | unknown): string[] {
  if (!input) return [];
  if (Array.isArray(input)) {
    return input.map(item => String(item).trim()).filter(Boolean);
  }
  return String(input).split(",").map(item => item.trim()).filter(Boolean);
}
