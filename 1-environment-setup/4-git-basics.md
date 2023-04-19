# Git Basics
Git is a version control system, which is a tool used to track and manage changes to code over time. You've already used Git to sync your local code up with the version that's in GitHub. The following are a few of the most common commands you might use in this internship.
## Common commands
### `git status`
A really useful command to show information about the local version of your code, including:
  - Which branch you're currently on, and whether it's up to date with the remote repo
    - e.g. if you've committed changes locally, but haven't yet pushed you'll see something like:
    ```
    On branch <branch name>
    Your branch is ahead of 'origin/<branch name>' by 1 commit.
    (use "git push" to publish your local commits)
    ```
    - e.g. if the remote branch has been updated but you haven't pulled the latest changes:
    ```
    On branch <branch name>
    Your branch is behind 'origin/<branch name>' by 6 commits, and can be fast-forwarded.
    (use "git pull" to update your local branch)
    ```
  - The state of any new/changed files in your repo
    - e.g. if you've made changes but haven't staged them for a commit yet:
    ```
    Changes not staged for commit:
      (use "git add <file>..." to update what will be committed)
      (use "git restore <file>..." to discard changes in working directory)
      modified:   day-one/day-one.md

    Untracked files:
      (use "git add <file>..." to include in what will be committed)
      CSS/
      environment-setup/git-basics.md
    ```
    - or when you've staged changes, but haven't committed:
    ```
    Changes to be committed:
      (use "git restore --staged <file>..." to unstage)
      modified:   day-one/day-one.md

    Untracked files:
      (use "git add <file>..." to include in what will be committed)
      CSS/
      environment-setup/git-basics.md
    ```
### `git fetch`
Get updated info of latest branches, commits from remote repo – **however, this does not push/pull any commits.** You can think of `git fetch` as the 'safe' version, as it will download the remote content, but not update your local repo, leaving your current work unchanged.
### `git pull`
Download any new commits from remote branch and update your local branch. Technically, this command is performing a `git fetch` followed by a `git merge` to apply the new commits on top of your work. You'll typically see an output showing what was changed, like this:
```
Updating db746c4..36a116e
Fast-forward
 CSS/CSS.md   | 191 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 HTML/HTML.md |  27 ++++++-------
 2 files changed, 204 insertions(+), 14 deletions(-)
 create mode 100644 CSS/CSS.md
```
### `git add`
Add changes to the staging area to be included in the next commit. This command takes an argument of the changed file(s) to be included – it can be a single file, or several (separated by spaces):
```bash
$ git add index.html                          # one changed file
$ git add index.html profile.html style.css   # multiple changed files
$ git add .                                   # adds all changed files
```
### `git commit`
Commit the staged changes to the project's history. Use the full command, including the `-m` flag, along with a short and descriptive message to describe the changes being committed:
```bash
$ git commit -m "Add styling to profile page"
```
### `git push`
Push up any recent commits to synchronize the remote branch with your local. After executing this, the code in GitHub will be up to date with the code on your local machine. Simply enter:
```bash
$ git push
```

Note: if you've just created the branch you're working on (or this is the first time pushing), you'll need to include a little more to create the remote version of the branch (only the first time pushing): 
```bash
$ git push -u origin <name of the local branch>
```

These last three commands will be the ones you use most often – the common flow will look something like:
1. Make some changes in VS Code
1. `git add` changed files
1. Repeat 1 & 2
1. `git commit -m "some commit message"` when you've completed a chunk of work
1. `git push` to update the remote repo

### `git branch`
Show a list of branches, as well as the current working branch (will be marked with `*`). Can also include remote branches by using `-a` flag:
```bash
$ git branch        # show list of local branches
$ git branch -v     # include the latest commit on each branch
$ git branch -a     # include both local and remote branches
```
### `git checkout`
Switch to a different branch (that already exists) – the code you see in VS Code will change to reflect the other branch
```bash
$ git checkout git-intro  # to switch to the local branch named 'git-intro'
```

To create a new branch as a copy of the current branch (and switch to it), include the `-b` flag as well as the name of the branch you'd like to create:
```bash
$ git checkout -b <new branch name>   # for example: git checkout -b add-profile-page
```

## Resources
- [What is Version Control?](https://www.atlassian.com/git/tutorials/what-is-version-control)
- [Saving changes](https://www.atlassian.com/git/tutorials/saving-changes) - more info on `git add` and `git commit`
- [Syncing with git push](https://www.atlassian.com/git/tutorials/syncing/git-push)
- [Git cheat sheet](https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet)
