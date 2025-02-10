export const formatLanguageName = (languageName: string) => {
  if (languageName == "javascript" || languageName == "typescript") {
    return (
      languageName.charAt(0).toUpperCase() +
      languageName.slice(1, 4) +
      languageName.charAt(4).toUpperCase() +
      languageName.slice(5)
    );
  }

  if (languageName == "js" || languageName == "ts") {
    return languageName.toUpperCase();
  }

  return languageName.charAt(0).toUpperCase() + languageName.slice(1);
};
