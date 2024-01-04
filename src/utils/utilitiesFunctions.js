import { formatDistanceToNow } from "date-fns";

export const converNumberIntoWords = (num) => {
  if (!num) return;
  if (num < 1000) {
    return num;
  } else if (num < 1000000) {
    return (num / 1000).toFixed(1) + "K";
  } else if (num < 1000000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else {
    return (num / 1000000000).toFixed(1) + "B";
  }
};

export const converUploadTimeIntoTimeAgo = (uploadTime) => {
  if (!uploadTime) {
    return;
  }
  const date = new Date(uploadTime);

  return formatDistanceToNow(date, {
    addSuffix: true,
    includeSeconds: true,
  });
};
