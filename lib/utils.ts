import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const diffInMilliseconds = now.getTime() - createdAt.getTime();

  const seconds = Math.floor(diffInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return `${years} ${years === 1 ? 'year' : 'years'} ago`;
  } else if (months > 0) {
    return `${months} ${months === 1 ? 'month' : 'months'} ago`;
  } else if (weeks > 0) {
    return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
  } else if (days > 0) {
    return `${days} ${days === 1 ? 'day' : 'days'} ago`;
  } else if (hours > 0) {
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  } else if (minutes > 0) {
    return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
  } else {
    return `${seconds} ${seconds === 1 ? 'second' : 'seconds'} ago`;
  }
};

export const formatNumberAndDivideNumber = (number: number): string => {
  let formattedNumber: string;
  let divisionFactor: number;

  if (number >= 1000000) {
    formattedNumber = (number / 1000000).toFixed(1);
    divisionFactor = 1000000;
  } else if (number >= 1000) {
    formattedNumber = (number / 1000).toFixed(1);
    divisionFactor = 1000;
  } else {
    formattedNumber = number.toFixed(1);
    divisionFactor = 1;
  }

  if (formattedNumber.endsWith(".0")) {
    formattedNumber = formattedNumber.slice(0, -2); // Remove decimal point if no decimal values
  }

  return `${formattedNumber}${divisionFactor === 1 ? '' : divisionFactor === 1000000 ? 'M' : 'K'}`;
};

