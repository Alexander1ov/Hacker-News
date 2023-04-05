function calcTimes(sum: number) {
  let hours: number = 0;
  let min: number = 0;
  let sec: number = 0;

  if (sum >= 60) {
    min = Math.floor(sum / 60);

    if (min >= 60) {
      hours = Math.floor(min / 60);
      min = Math.floor(min - hours * 60);
      sec = Math.floor(sum - (hours * 60 + min) * 60);
    } else {
      sec = Math.floor(sum - min * 60);
    }
  } else {
    sec = Math.floor(sum);
  }
  return `${hours === 0 ? "" : hours + "h"} ${
    hours > 0 || min > 0 ? min + "m" : ""
  } ${sec}s ago`;
}

export function calcDate(time: number, cell: boolean) {
  const fullDate = new Date(time * 1000);
  const difference = Date.now() - time * 1000;
  const secSum = difference / 1000;
  if (cell === true) {
    return ` ${fullDate.getDate()}.${
      fullDate.getMonth() + 1
    }.${fullDate.getFullYear()}`;
  }
  if (secSum < 21600000) {
    return calcTimes(secSum);
  }
  return ` ${fullDate.getDate()}.${
    fullDate.getMonth() + 1
  }.${fullDate.getFullYear()}`;
}
