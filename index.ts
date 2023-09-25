console.log("Hello via Bun!");

const server = Bun.serve({
    port: 3000,
    fetch(req)
    {
        return new Response("Bun is running successfully..!")
    }
});
console.log(`Bun Server is running at http://localhost:${server.port}`);
console.log("This is another line of code i have written");