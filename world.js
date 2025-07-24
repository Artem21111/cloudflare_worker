export default {
  async fetch(request) {
    return new Response("HI world", {
      headers: { "Content-Type": "text/plain" },
    });
  },
};
