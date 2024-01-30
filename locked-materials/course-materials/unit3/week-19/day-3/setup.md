# Heroku, Digital Ocean and Namecheap Primer

Alright coding aficionados! Let's get your Node.js apps on the world stage! Cue the Lights Cue The Music its Deploy Time....(Anyome ever seen super why... Disregard if yoou haven't) We're going to do this in three parts: deploying to Heroku, deploying to DigitalOcean, and setting up a domain name with Namecheap. 

1. **Deploying Node.js apps to Heroku:**

   - First, we need to install the Heroku CLI. You can download it from here: https://devcenter.heroku.com/articles/heroku-cli#download-and-install
   - Now, let's login to Heroku using your credentials. Open your terminal or command line, and type `heroku login`. Follow the prompt to open the web browser for login.
   - After logging in, go to your Node.js project directory. Create a new Heroku app by running `heroku create your-app-name`.
   - Make sure your app listens on the port Heroku provides. Heroku uses the `PORT` environment variable, so use `process.env.PORT` in your Node.js server script.
   - You also need to make sure you have a functional start and build script.
   - Now, it's time to push your app to the clouds! Commit your changes and run `git push heroku main`. 
   - Boom! Your app should now be live at `https://your-app-name.herokuapp.com`.

2. **Deploying Node.js apps to DigitalOcean:**

   - First, you need a Droplet (DigitalOcean's term for a server instance). Head over to DigitalOcean, create an account, and create a new Droplet.
   - Choose an OS for your Droplet. For a Node.js app, choose the latest Ubuntu version.
   - Then, select the size of your Droplet (this depends on your needs and budget).
   - Finally, hit the 'Create Droplet' button.
   - Next, we need to connect to our Droplet via SSH. On your local machine, open your terminal and type `ssh root@your-droplet-ip-address`.
   - After connecting, it's time to set up our environment. Install Node.js and npm using the package manager. 
   - Also we'll need nginx, ranger, neovim, and certbot
   - We'll get these setup according to best practices and then we have a ready droplet.
   - Now, clone your project into the Droplet using `git clone`.
   - Inside your project directory, install your dependencies using `npm install` and start your server.
   - Don't forget to expose the necessary port (usually 80 for HTTP or 443 for HTTPS) in your NGINX server script.
   - Then you'll use certbot to create an SSL certificate
   - Your Node.js app is now live and can be accessed using your Droplet's IP address.

3. **Setting up a domain name with Namecheap:**

   - Head over to Namecheap and find a domain you like. Once you've found one, purchase it.
   - After purchasing, go to the dashboard and select 'Domain List' from the left-hand sidebar, then click 'Manage' next to your domain.
   - Go to the 'Advanced DNS' tab and add a new record.
   - Point the name servers to digital ocean and then maintain the DNS at digital ocean.
   - For Heroku, you need to add a `CNAME` record where the host is `www` and the value is something simmilar to `your-app-name.herokuapp.com` or whatever we get provided with from heroku.
   - For DigitalOcean, add an `A` record where the host is `@` and the IP address is your Droplet's IP.
   - And voila! It may take a while to propagate, but soon your app will be accessible at your custom domain!

Remember, each of these steps is just the tip of the iceberg. There are more advanced concepts like managing environment variables, setting up a database, and handling HTTPS, but this guide should help you get started. Don't stop here! Keep learning, keep exploring, and keep coding!