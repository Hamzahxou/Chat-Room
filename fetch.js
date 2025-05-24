async function fetchData(url) {
  let ready = false;
  while (!ready) {
    try {
      const res = await fetch(url, {
        mode: "no-cors",
      });

      ready = true;
      skeleton.remove();
    } catch (e) {
      await new Promise((r) => setTimeout(r, 5000));
    }
  }

  window.location.href = url;
}

fetchData("https://chats-room.glitch.me/");
