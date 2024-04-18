export function formatDate(dateString: string | undefined): string {
  return new Date(`${dateString}`).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
