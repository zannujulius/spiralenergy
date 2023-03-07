export const getInitials = (name) => {
  if (name) {
    const initials = name
      .split(" ")
      .map((name) => `${name.charAt(0).toUpperCase()}`)
      .join("");

    return initials;
  }
  return "N/A";
};
