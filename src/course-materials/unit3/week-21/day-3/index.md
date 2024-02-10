---
track: "Unit 3"
title: "Week 21 - Day 3"
week: 21
day: 3
type: "homepage"
topics: "The MERN Stack"
---

## The Make it Make Sense Unit
![mern architecture](https://i.imgur.com/uoJvBRK.jpg)

| Time  | Activity |
| ----- | ------ |
| 10:00 am - 11:00 am | The React Starter Kit |
| 11:00am - 11:30 am | Morning Coffee Break / Social Time |
| 11:30am - 1:00 pm | Todolist Backend Review |
| 1:00pm - 2:15 pm | Lunch Break |
| 2:15pm - 3:30pm | Looking at analyzing the frontend of a todolist |
| 3:30pm - 3:45pm | Break |
| 3:45pm - 6:00pm | Deploy to Digital Ocean & Review What We Did |

![](https://i.redd.it/ygd28n17lp751.png)

- No Markdown All Notes Should Be Taken in Your Todolist cheatsheet
- [Getting Started Guide](https://www.npmjs.com/package/big-poppa-code-react-starter)

## Deployment

- [ ] Get a domain if you don't have one and add the nameservers for your cloud provider i.e Digital Ocean
- [ ] Create droplet/virtual machine and set up DNS
- [ ] SSH into VM and install `nodejs npm ranger neovim nginx` the install `npm i -g n pm2` and `snap install certbot --classic`
- [ ] Create an SSH Key for your vm and connect it to github
- [ ] Git clone your project to the vm
- [ ] install dependencies, set up .env and start project with pm2
- [ ] Set up nginx with proxypass to the port running your app
- [ ] Set up certbot for https
