export function formatEmail(email: string): string {
  const [username, domain] = email.split("@");
  const firstPart = username.slice(0, 4);
  const lastPart = username.slice(-1);
  const obfuscatedPart = "*****";
  return `${firstPart}${obfuscatedPart}${lastPart}@${domain}`;
}

export const formatDate = (dateString: string) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  // const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, "0");
  return `${day} ${month}, ${year}`;
};

export function truncateFilename(str: string) {
  var start = str.substring(0, 10);
  var end = str.replace(/^.*(?=\.[^.]+$)/g, "..");
  return start + end;
}

export const formatDateString = (dateInput: string | Date): string => {
  const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date input");
  }

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  return date.toLocaleString("en-US", options);
};





