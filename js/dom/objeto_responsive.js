const d = document,
  w = window;

export default function responsiceMedia(d, mq, mobileContent, destopContent) {
  let breakpoint = w.matchMedia(mq);

  const responsive = (e) => {
    if (e.matches) {
      d.getElementById(id).innerHTML = destopContent;
    } else {
      d.getElementById(id).innerHTML = mobileContent;
    }

    //console.log("MQ", matches);
  };

  breakpoint.addListener(responsive);
  responsive(breakpoint);
}
