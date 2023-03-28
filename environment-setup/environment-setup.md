# Environment Setup
There are a few tools we'll be using for this project, which make up what we'll call our **local development environment.**

## Command Line
We'll use the `Terminal` app to install some tools and access the files for our projects. This is called a **command-line interface.**

### Filesystem
The files on your computer are organized like a tree – the first directory is called the **root** and each other file or directory branches off from there. A **path** describes the location of a file within this tree structure. For example this path
```
/Users/mattreadout/blog/profile/mr-profile-sm.jpg
```
Says that this `jpg` image lives in a directory called `profile`, which is within `blog`, which is in my **root** directory `/Users/mattreadout`. NOTE: we'll use the term 'directory' most often, but it's the same as 'folder.'

### Some useful commands
You'll be able to navigate your filesystem and perform most tasks by using some simple commands in the `Terminal` app. Whenever you see the `$` symbol, that stands for the **command prompt** - basically the place we'll enter each command to perform some task. When typing commands, **don't include the `$`.**

Also, the `#` symbol creates a comment. This is how you can add a note or some bit of text that's not evaluated as code. In these examples, they just describe the command – don't enter anything starting with a `#`.

Getting info
```bash
$ pwd     # print working directory
$ ls      # list files in current directory
```
Moving around
```bash
$ cd      # change directory
$ cd ..   # move up one level
$ cd ~    # go to your home directory
```
Working with files
```bash
$ mkdir   # make (new) directory
$ touch   # create new file
```
## Excercise!
Using the command-line navigate to the `Documents` directory on your computer and create a new directory for this internship.
1. Open the `Terminal` app - open a new `Finder` window, click on the `Applications` directory, then in `Utilities`, double-click on `Terminal`
2. Print the name of the current directory with the command `pwd`
3. Change to the root directory with the command `cd ~`
4. List the current files and directories with the command `ls`
5. Change into the `Documents` directory with the command `cd Documents/`
6. Create a new directory for this project with the command `mkdir 2023-internship` (feel free to use another name if you prefer)
7. Use the `ls` command to confirm that the new directory was created
8. Change into the directory you just created
9. Create a new text file with the command `touch hello.txt`
10. Write a greeting to the file you just created with the command `echo "Hello world!" > hello.txt`
11. Open that file with the command `open hello.txt`

### _Extra Practice_
Try going through the excercises in this [Codeacademy course](https://www.codecademy.com/paths/learn-how-to-build-websites/tracks/build-websites-on-your-own-computer/modules/command-line-for-building-websites/lessons/navigation/exercises/introduction)

## Git and GitHub
**Git** is a version control system – a tool that allows developers to work on different versions of the same code base at the same time. **GitHub** is a website that stores code remotely, and allows us to track changes the team has made using Git.

### Getting started with GitHub
**NOTE:** If you already completed these steps on day one, skip to the next section `Setting up Git locally`
1. Go to [github.com](https://github.com/) and click on `Sign Up`
2. Follow the prompts to create a new account
    - Enter your email address (we recommend using a personal email address, so you'll have access to everything in the future)
    - Create a username and password
    - Verify your account (solve a puzzle?)
3. Check your email for a 7-digit code to enter on the next screen
4. Click 'Skip Personalization' to go to your dashboard
5. Post in the team Slack channel with a link to your profile

### Setting up Git locally
1. Your computer should already come with Git installed – confirm by opening up Terminal and entering the command:
```bash
$ git --version
```
You should see something like `git version 2.24.3 (Apple Git-128)` (the number might be different) – if you don't see that, follow these steps to [download and install the latest version of Git](https://git-scm.com/downloads)

2. Set your Git username – open Terminal and enter:
```bash
$ git config --global user.name "<enter your name here>"
```
3. Set your Git email address – in Terminal enter:
```bash
$ git config --global user.email "<enter your email here>"
```
Both of these will be connected to any code changes you make on this computer. For the username, use either the GitHub username you created, or just your name as you'd like it to appear.

4. Install Git Credential Manager to store your credentials
```bash
$ brew tap microsoft/git
$ brew install --cask git-credential-manager-core
```

### Cloning the project repo
1. On GitHub, go to [the repo for the internship](https://github.com/k3ntako/High-School-Internship)
2. Click on the green `<> Code` button and copy the URL in the box (should be `https://github.com/k3ntako/High-School-Internship.git`)
3. In a new Terminal window navigate to the directory you created for the internship (e.g. `2023-internship` or whatever you named it)
4. Clone the repo with the command
```bash
$ git clone https://github.com/k3ntako/High-School-Internship.git
```
5. Use the `ls` command to confirm that a new directory was just created – you just cloned your first remote repo!

## VS Code
Visual Studio Code is the program we'll use to write and edit all of the code for this project

### Setup
**NOTE:** If you already completed the first step on day one, skip to step `2.`
1. [Download and install the app](https://code.visualstudio.com/sha/download?build=stable&os=darwin-universal)
2. After it's finished installing, double-click on the icon in your Applications folder to open VS Code
3. Click on the `File` menu, select `Open Folder`, then find the project repo that you cloned in the previous section
4. You should see some files on the left side of the screen – click on `README.md` to open on the right.

### Introduction
There are some good [intro videos on the official site](https://code.visualstudio.com/docs/getstarted/introvideos) – check out the one titled 'Getting Started' and any others that look interesting!

The [Tips and Tricks](https://code.visualstudio.com/docs/getstarted/tips-and-tricks) is another good place to check out.

By selecting `Help > Editor Playground` you can open an interactive overview of some of the major code editing features you'll use in VS Code.