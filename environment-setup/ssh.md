# Setting Up SSH

1. Generate an SSH key:

   - Make sure to change the email to your Github email.

   ```bash
   $ ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

   - When asked to enter a file location, hit Enter to use the default location.
   - Similarly, you can hit Enter when asked for a passphrase.

2. Start the ssh-agent
   ```bash
   $ eval "$(ssh-agent -s)"
   ```
3. Create a config file
   ```bash
   $ touch ~/.ssh/config
   ```
4. Open your config file and paste the following:
   ```
   Host github.com
     AddKeysToAgent yes
     IdentityFile ~/.ssh/id_ed25519
   ```
5. Copy the SSH key to your clipboard
   ```bash
   $ pbcopy < ~/.ssh/id_ed25519.pub
   ```
6. Go to [SSH and GPG keys](https://github.com/settings/keys) in your Settings
   - Make sure you're logged to Github
7. Click "New SSH Key"
8. Set a descriptive title (example: School Laptop April 2023)
9. Paste the key into the "Key" textbox and click "Add SSH key"
10. Test your connection from your Terminal

    ```bash
    $ ssh -T git@github.com
    ```

    - You should see a message like this: "Hi USERNAME! You've successfully authenticated, but GitHub does not provide shell access."

11. When you clone repositories, make sure you select SSH

    <img src="https://raw.githubusercontent.com/k3ntako/High-School-Internship/ssh/environment-setup/images/clone-ssh.png" />

## Resources

- [Github - Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [Github - Adding a new SSH key to your GitHub account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
