---
track: "Unit 3"
title: "Our Own Full Stack React Framework"
week: 19
day: 1
type: "lecture"
topics: "MERN"
---

# Welcome to Webpack Babel and Gulp Zero to Hero
<p align="center">
    <img width="1241" alt="webpack" src="https://media.git.generalassemb.ly/user/15881/files/8b5cd280-1f37-11ea-9c27-c9bb294aa61f">
</p>

# Why do you want to know this information

<p align="center">
    <img width="1241" alt="webpack" src="https://media.git.generalassemb.ly/user/15881/files/f3131d80-1f37-11ea-973a-4e38298611d9">
</p>

# Today we are going to open up the blackbox
    - No CDN's
    - No Extra Frameworks
    - We are going to see how to do these features from Scratch
    - If you open up express or react you will see that they have there own dependencies and that developers just like you built these applications the same way you have been building yours.
    - Today I am going to show you how to build your own True Web Development Infrastructure for building Single page Applications

# What does Gulp do and hows it used in the industry today in production applications

<p align="center">
      <img width="241" alt="webpack" src="https://media.git.generalassemb.ly/user/15881/files/cf040c00-1f38-11ea-9236-4aa440fba591">
</p>

    - Gulp is what is known as a task runner.
    - Task runners are used to conduct complicated tasks and put them in a pre-defined list of operations
    - It allows to not only stay DRY in our code but also in our work flow...
    - For example if every time I need to change code, I need to recompile it and ship it to the browser and then delete the old files and then call nodemon , i can just put that string of commands in a gulp task.
    - Gulp is a tool that helps us code, unlike something like React or Express that we actually use to write the code that creates our app.

# What does Webpack do and is it used in the industry today in production applications

<p align="center">
<img width="1241" alt="webpack" src="https://media.git.generalassemb.ly/user/15881/files/c90e2b00-1f38-11ea-80c9-a30904d18c7e">
</p>

    - Webpack is a module bundler it solves numerous problems.
    - You have all used node and express and you have seen how convenient it is to use `require` instead of creating bloated        files, the problem is that can't be used in the browser just like window can't be used in node.
    - webpack lets us use require and still ship browser safe code and it also tree shakes our code.
    - Lets take a look at big library like Lodash.....
      [__lodash__](https://lodash.com/docs/4.17.15#cloneDeep)
    - You see all these lodash methods what if i only need 1. without webpack you would end up adding all this useless code to your codebase to only use one function.

# What does Babel do and is it used in the industry in production applications
![babel](https://media.git.generalassemb.ly/user/15881/files/379fb880-1f3a-11ea-9cb7-9a5ab6e60c33)

        - Babel lets us take new JS and turn it into browser safe ES5 JS.... It's that simple.
        - Let's go to the babel website and see what happens when we use JSX and how it is compiled to the browser
   [__Babel example__](https://babeljs.io/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=DwCwjAfCCWwPTgkA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.7.5&externalPlugins=)
        - Does this look fammiliar.

 My Powerpoint [Find the slides here](https://docs.google.com/presentation/d/1M8vLalEGiOWzuaDlsQSJUHbm9Y6AyVQvqfeudH_aEkI/edit?usp=sharing)

Lets look at a Web Developer Starter Kit built from scratch and dissect what it is doing

 Now We Want To Turn Our Application into an API that we can consume in our react application, in order to do this we will combine our application and run it locally in a full stack React Tool Chain

1. run npm i -g big-poppa-code-react-starter in your commandline and the lets-code command will will be added globally onto your computer
1. from the command line run lets-code in the parent folder that you desire the project to be in. i.e. if you put your projects in a projects folder run lets-code in your projects directory
1. You will be prompted to confirm you want to build a react project, confirm that by choosing get started or quit by pressing CTRL + C.
1. You will the be prompted to choose a project name, this will be the name of the directory your project is built in.
1. After choosing the project name, You will then see some terminal output while the template is copied and npm install and npm audit are ran in the background. (note you don't have to install the packages they are added by default)
1. Once the project is built you will see any npm output, including vulnerabilities, and instructions on how to start your project.
cd into your project from the commandline and Feel awesome


cd into your Directory

```
sudo npm i -g gulp-cli
npm i
```
# Now let's see how you would put these tools together

![together](https://media.git.generalassemb.ly/user/15881/files/92d1ab00-1f3a-11ea-93be-b7fcc6901778)
