export function formatDate(mongoDate) {
  const date = new Date(mongoDate);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
