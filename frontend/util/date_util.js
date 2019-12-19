const timeSince = prevDate => {
    const currDate = Date.now();
    const seconds = Math.floor((currDate - prevDate) / 1000);
    if (seconds < 60) {
      return `MOMENTS AGO`;
    }
  
    if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60);
      if (minutes === 1) {
        return `${minutes} MINUTE AGO`;
      } else {
        return `${minutes} MINUTES AGO`;
      }
    }
  
    if (seconds < 86400) {
      const hours = Math.floor(seconds / 3600);
      if (hours === 1) {
        return `${hours} HOUR AGO`;
      } else {
        return `${hours} HOURS AGO`;
      }
    }
  
    if (seconds < 604800) {
      const days = Math.floor(seconds / 86400);
      if (days === 1) {
        return `YESTERDAY`;
      } else {
        return `${days} DAYS AGO`;
      }
    }
  
    const days = Math.floor(seconds / 86400);
    if (days < 30) {
      const weeks = Math.floor(days / 7);
      if (weeks === 1) {
        return `${weeks} WEEK AGO`;
      } else {
        return `${weeks} WEEKS AGO`;
      }
    }
  
    const weeks = Math.floor(days / 7);
    if (weeks < 53) {
      const months = Math.floor( weeks / 4);
      if (months === 1) {
        return `${months} MONTH AGO`;
      } else {
        return `${months} MONTHS AGO`;
      }
    }
    
    prevDate = new Date(prevDate);
    return `${prevDate.getMonth() + 1}/${prevDate.getDate()}/${prevDate.getFullYear()}`;
  };
  
  export default timeSince;
  