export const copyToClipboard = (text: string) => {
  if (!navigator.clipboard) return;
  else navigator.clipboard.writeText(text);
};
