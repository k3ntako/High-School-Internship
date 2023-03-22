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
