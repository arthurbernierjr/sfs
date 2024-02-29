---
track: "Cheatsheets"
week: 1
day: 4
type: "homepage"
topics: "Cloud Deployment"
title: "cloud deployment cheatsheet"
category: "CLI"
---

# DigitalOcean, PM2, Nginx, and Certbot Cheat Sheet

This cheat sheet guides you through deploying applications on the internet using DigitalOcean for hosting, PM2 for process management, Nginx as a web server, and Certbot for HTTPS encryption.

## 1. Domain and DigitalOcean Setup

- **Get a Domain**: Purchase a domain from a registrar.
- **Set Nameservers**: Update your domain's nameservers to point to DigitalOcean. This is usually done from your domain registrar's dashboard.
- **Create Droplet**: In DigitalOcean, create a droplet with the following specs (or as needed):
  - 2 vCPUs
  - 2GB RAM
  - 90GB Disk
  - $24/mo
- **Set Up DNS**: Configure DNS settings in DigitalOcean to connect your domain to the newly created droplet.

## 2. SSH into Your Virtual Machine (VM)

- **SSH Command**: Use `ssh root@ipaddress` or `ssh root@yourdomain.me` (if the A record is set up).
- **Initial Server Setup**: Update the server, create a non-root user, and set up a firewall as per best practices.

## 3. Install Essential Packages

Run the following commands to install necessary packages:

```bash
apt update && apt install nodejs npm ranger neovim nginx -y
snap install certbot --classic
npm i -g n pm2
n lts
apt remove nodejs -y
```

- **Exit and Re-enter Terminal**: To refresh your environment and verify the Node.js installation with `which node` and `node -v`.

## 4. SSH Key and GitHub Setup

- **Generate SSH Key**: Run `ssh-keygen` and accept the defaults.
- **Copy Public Key**: Use `cat ~/.ssh/id_rsa.pub` to display your public key.
- **Add SSH Key to GitHub**: Navigate to `https://github.com/settings/keys` and add your public key.

## 5. Clone Your Project

- **Git Clone**: Clone your project repository to your VM.
- **Install Dependencies**: Navigate to your project directory, ensure Node.js versions between your local machine and droplet align, and run `npm i`.
- **Start with PM2**: Use PM2 to start your application, e.g., `pm2 start server.js --name "app_name"`.

## 6. Nginx Configuration

- **Edit Nginx Configuration**: Use `ranger` to navigate to `/etc/nginx/sites-available` and edit the `default` file with `neovim`.
- **Configure Proxy Pass**: Set `server_name` to your domain and configure `location /` with `proxy_pass http://localhost:YOUR_APP_PORT;`.

Example:
```nginx
server_name yourdomain.me;

location / {
    proxy_pass http://localhost:8000;
}
```

## 7. Set Up HTTPS with Certbot

- **Run Certbot**: Execute `certbot --nginx` and follow the prompts to secure your site with HTTPS.

## Key Steps Summary

1. **Domain and Hosting Setup**: Purchase a domain, set nameservers, create a DigitalOcean droplet, and configure DNS.
2. **SSH Access**: Securely access your VM via SSH.
3. **Install Packages**: Install Node.js, npm, Nginx, and other essential tools.
4. **GitHub Integration**: Generate an SSH key and add it to your GitHub account for secure repository cloning.
5. **Project Deployment**: Clone your project, install dependencies, and use PM2 for process management.
6. **Nginx Configuration**: Configure Nginx as a reverse proxy to forward requests to your application.
7. **HTTPS Encryption**: Secure your application with HTTPS using Certbot.

By following these steps, you'll have a solid foundation for deploying and managing web applications on the internet with DigitalOcean, PM2, Nginx, and Certbot.