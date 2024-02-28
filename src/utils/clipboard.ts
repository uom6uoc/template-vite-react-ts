const unsecuredCopyToClipboard = (text: string): void => {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
  } catch (err) {
    console.error('Unable to copy to clipboard', err);
  }
  document.body.removeChild(textArea);
};

const copy = (clipText: string) => {
  if (window.isSecureContext && navigator.clipboard) {
    navigator.clipboard.writeText(clipText);
  } else {
    // execCommand for http
    unsecuredCopyToClipboard(clipText);
  }
};

export default { copy };
