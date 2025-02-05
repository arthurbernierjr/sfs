# Quick Lesson: Introduction to Command Line and SSH Key Pair

## Terminal Learning Objectives
1. Understand the basic functions of a command-line interface (CLI).
2. Learn essential CLI commands like `cd`, `ls`, `pwd`, `mkdir`, `touch`, `mv`, `cp`, `rm`, and `less`.
3. Get familiar with keyboard shortcuts for Terminal navigation.
4. Understand what an SSH key pair is and its applications.

---

### Introduction to Command Line Interface (CLI)
Think of the command line as the backstage of your computer. It allows you to perform tasks without a graphical interface, directly communicating with the computer in text form. Imagine it as a text-based remote control for your computer.

---

### Basic Commands

- **`cd` (Change Directory)**  
  Navigate between directories.  
  ```bash
  cd Documents
  ```
  
- **`ls` (List)**  
  Display the list of files and directories.  
  ```bash
  ls
  ```

- **`pwd` (Present Working Directory)**  
  Show the current directory.  
  ```bash
  pwd
  ```

- **`mkdir` (Make Directory)**  
  Create a new directory.  
  ```bash
  mkdir NewFolder
  ```

#### Check for Understanding
What commands would you use to navigate to a directory and then list its contents?

---

### File Operations

- **`touch` (Create File)**  
  Create an empty file.  
  ```bash
  touch newfile.txt
  ```

- **`mv` (Move)**  
  Move or rename files and directories.  
  ```bash
  mv oldfile.txt newfile.txt
  ```

- **`cp` (Copy)**  
  Copy files and directories.  
  ```bash
  cp file1.txt file1_copy.txt
  ```

- **`rm` (Remove)**  
  Delete files.  
  ```bash
  rm unwantedfile.txt
  ```

- **`less` (View File)**  
  View file content in a scrollable manner.  
  ```bash
  less file.txt
  ```

---

### Keyboard Shortcuts

- `⌘ K`: Clear the Terminal window  
- `option arrow`: Move cursor by word  
- `Ctrl A`: Go to beginning of line  
- `Ctrl E`: Go to end of line  
- `Ctrl K`: Kill line to end  
- `Ctrl U`: Kill line to beginning  
- `Ctrl Y`: Paste killed line  
- `cd -`: Toggle previous directory

#### Check for Understanding
What keyboard shortcut would you use to clear the terminal window?

---

### SSH Key Pair

An SSH key pair consists of a public key and a private key. They're like a set of digital keys used to authenticate to servers securely. The public key is shared openly, but the private key must be kept secret. It's akin to a two-layer security system: anyone you want can have or see the front door to your house (public key), but only you should have the key (private key) to open it.

#### Generating an SSH Key Pair  
```bash
ssh-keygen -t rsa -b 4096
```

---

## Key Takeaways
- The CLI is a text-based way to interact with your computer.
- Basic commands like `cd`, `ls`, `pwd`, etc., help in file and directory management.
- Keyboard shortcuts streamline Terminal navigation.
- An SSH key pair is used for secure authentication and consists of a public and private key.

By mastering these basics, you'll be well on your way to becoming proficient in software engineering tasks that require command-line skills.