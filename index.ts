
const server = Bun.serve({
    port: 3000,
    fetch(req)
    {
        const url = new URL (req.url);
        if (url.pathname === "/home") 
        {
            return new Response("Home page!");
        }
        else if (url.pathname === "/blog") 
        {
            return new Response("Blog!");
        }
        else
        {
            return new Response("404! please check URL");
        }
        
        // return new Response("Bun is running successfully on ports ..!")
        // console.log("This is another line of code i have written");
    },
});
// console.log(`Bun Server is running at http://localhost:${server.port}`);
// console.log("This is another line of code i have written");