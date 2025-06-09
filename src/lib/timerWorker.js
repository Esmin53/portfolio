let intervalId = null;

self.onmessage = function (e) {
  if (e.data === "start") {
    if (!intervalId) {
      intervalId = setInterval(() => {
        self.postMessage("tick");
      }, 1300);
    }
  }

  if (e.data === "stop") {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }
};