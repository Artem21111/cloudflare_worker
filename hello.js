export default {
  async fetch(request) {
    return new Response("Hello!", {
      headers: { "Content-Type": "text/plain" },
    });
  },
};
