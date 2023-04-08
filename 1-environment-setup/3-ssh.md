# Setting Up SSH

1. Generate an SSH key:

   - Make sure to change the email to your Github email.

   ```bash
   $ ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

   - When asked to enter a file location, hit Enter to use the default location.
   - Similarly, you can hit Enter when asked for a passphrase.

1. Start the ssh-agent
   ```bash
   $ eval "$(ssh-agent -s)"
   ```
1. Create a config file
   ```bash
   $ touch ~/.ssh/config
   ```
1. Open your config file

   - This command will open the folder. Double click on the `config` file to open it in a text editor.

   ```bash
   $ open ~/.ssh
   ```

1. Paste the following into the config file:

   ```
   Host github.com
   AddKeysToAgent yes
   IdentityFile ~/.ssh/id_ed25519
   ```

1. Copy the SSH key to your clipboard
   ```bash
   $ pbcopy < ~/.ssh/id_ed25519.pub
   ```
1. Go to [SSH and GPG keys](https://github.com/settings/keys) in your Settings
   - Make sure you're logged to Github
1. Click "New SSH Key"
1. Set a descriptive title (example: School Laptop April 2023)
1. Paste the key into the "Key" textbox and click "Add SSH key"
1. Test your connection from your Terminal

   ```bash
   $ ssh -T git@github.com
   ```

   - You should see a message like this: "Hi USERNAME! You've successfully authenticated, but GitHub does not provide shell access."

1. When you clone repositories, make sure you select SSH

   <img src="https://raw.githubusercontent.com/k3ntako/High-School-Internship/ssh/1-environment-setup/images/clone-ssh.png" />

1. Try pushing your changes to Github

   - Replace `[project directory]` with the directory to your project. Example: `~/Documents/my-project`.
   - Replace `[branch]` with the current branch. If you're not sure, run `git branch` and it's the one with a star (`*`). If you haven't changed your branch it's likely `main` (or `master`).
     - Usually, you don't want to push directly to the `main` or `master`, but it's okay for now.

   ```bash
   $ cd [project directory]
   $ git push origin [branch]
   ```

1. Check your Github repository to see if the changes were pushed.

## Resources

- [Github - Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [Github - Adding a new SSH key to your GitHub account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
