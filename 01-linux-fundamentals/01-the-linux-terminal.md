# 🐧 The Linux Terminal

> *"The command line is your superpower - master it, and you master the machine."*

---

#### [Cheat Sheet](../cheat-sheets/linux-commands.md)

## 📑 Table of Contents

- [📖 Getting Help](#-getting-help)
  - [`man` — Manual Pages](#man--manual-pages)
  - [Other Help Commands](#other-help-commands)
  - [`type` — Command Type Checker](#type--command-type-checker)
  - [`wc` — Word Count](#wc--word-count)
  - [Searching All Man Pages](#searching-all-man-pages)
- [⌨️ Keyboard Shortcuts](#️-keyboard-shortcuts)
  - [Navigation](#navigation)
  - [Editing](#editing)
  - [Control](#control)
  - [History](#history)
- [📜 Command History](#-command-history)
  - [History Expansion (Bang Commands)](#history-expansion-bang-commands)
  - [Managing History](#managing-history)
  - [History Environment Variables](#history-environment-variables)
- [🔐 Root vs Non-Root Users](#-root-vs-non-root-users)
  - [Ways to Gain Root Privileges](#ways-to-gain-root-privileges)
  - [Managing Sudo Sessions](#managing-sudo-sessions)
- [🔀 Piping and Command Redirection](#-piping-and-command-redirection)
  - [Understanding Standard Streams](#understanding-standard-streams)
  - [Piping](#piping-)
  - [Output Redirection](#output-redirection)
  - [Input Redirection](#input-redirection)
  - [The `tee` Command](#the-tee-command)
- [🔍 Finding Files and Directories](#-finding-files-and-directories)
  - [`which` — Find Executables](#which--find-executables)
  - [`locate` / `plocate` — Database Search](#locate--plocate--database-search)
  - [`find` — Real-time Search](#find--real-time-search)
- [🔎 `grep` — Search File Contents](#-grep--search-file-contents)
  - [Regular Expression Basics](#regular-expression-basics)
  - [`strings` — Extract Readable Text](#strings--extract-readable-text)
- [🎓 Additional Essential Commands](#-additional-essential-commands)
- [📚 Quick Reference Card](#-quick-reference-card)

---

## 📖 Getting Help

One of the most important skills in Linux is knowing how to find help. The terminal provides several built-in documentation systems.

### `man` — Manual Pages

```bash
man <command>
```

Opens the manual pages for any command. This is your primary reference.

**Navigation within man pages:**

| Key | Action |
|-----|--------|
| `h` | Display help |
| `q` | Quit |
| `f` or `Space` | Forward one page |
| `b` | Back one page |
| `/pattern` | Search forward |
| `?pattern` | Search backward |
| `n` | Next search result |
| `N` | Previous search result |
| `g` | Go to beginning |
| `G` | Go to end |

**Man page sections:**
| Section | Content |
|---------|---------|
| 1 | User commands |
| 2 | System calls |
| 3 | Library functions |
| 4 | Special files |
| 5 | File formats |
| 6 | Games |
| 7 | Miscellaneous |
| 8 | System administration |

> 💡 **Tip:** Use `man 5 passwd` to view section 5 of passwd (file format) vs `man passwd` (the command).

### Other Help Commands

| Command | Description |
|---------|-------------|
| `whatis <cmd>` | One-line description of a command |
| `info <cmd>` | GNU-style manual (often more detailed) |
| `<cmd> --help` | Built-in quick syntax reference |
| `help <builtin>` | Help for shell built-in commands |

### `type` — Command Type Checker

```bash
type <command>
```

Reveals whether a command is:
- A **shell builtin** (use `help` for documentation)
- An **alias**
- A **function**
- An **external executable** (use `man` for documentation)

```bash
$ type cd
cd is a shell builtin

$ type ls
ls is aliased to 'ls --color=auto'

$ type grep
grep is /usr/bin/grep
```

### `wc` — Word Count

```bash
wc <file>
```

Displays line count, word count, and byte count.

| Flag | Output |
|------|--------|
| `-l` | Line count only |
| `-w` | Word count only |
| `-c` | Byte count only |
| `-m` | Character count |

```bash
$ wc /etc/passwd
  45   89  2678 /etc/passwd
#lines words bytes
```

### Searching All Man Pages

```bash
man -k <keyword>
# or
apropos <keyword>
```

Search through all manual page descriptions.

```bash
$ man -k "copy files"
cp (1)     - copy files and directories
install (1) - copy files and set attributes
```

---

## ⌨️ Keyboard Shortcuts

Master these shortcuts to dramatically increase your terminal efficiency.

### Navigation

| Shortcut | Action |
|----------|--------|
| `Ctrl + A` | Move cursor to **beginning** of line |
| `Ctrl + E` | Move cursor to **end** of line |
| `Ctrl + B` | Move cursor **back** one character |
| `Ctrl + F` | Move cursor **forward** one character |
| `Alt + B` | Move cursor back one **word** |
| `Alt + F` | Move cursor forward one **word** |

### Editing

| Shortcut | Action |
|----------|--------|
| `Ctrl + U` | Delete everything **before** cursor |
| `Ctrl + K` | Delete everything **after** cursor |
| `Ctrl + W` | Delete word before cursor |
| `Alt + D` | Delete word after cursor |
| `Ctrl + Y` | Paste (yank) previously deleted text |
| `Ctrl + _` | Undo last edit |

### Control

| Shortcut | Action |
|----------|--------|
| `Ctrl + L` | Clear screen (same as `clear`) |
| `Ctrl + C` | Interrupt/kill current process |
| `Ctrl + Z` | Suspend current process (use `fg` to resume) |
| `Ctrl + D` | Exit shell / EOF signal |
| `Ctrl + S` | Pause terminal output |
| `Ctrl + Q` | Resume terminal output |

### History

| Shortcut | Action |
|----------|--------|
| `Ctrl + R` | Reverse search through history |
| `Ctrl + G` | Exit history search mode |
| `Ctrl + P` or `↑` | Previous command |
| `Ctrl + N` or `↓` | Next command |
| `Alt + .` | Insert last argument of previous command |

---

## 📜 Command History

Your shell maintains a persistent history of commands, making it easy to recall and reuse previous work.

### History Basics

```bash
history              # Display command history
history 20           # Show last 20 commands
```

**History file location:** `~/.bash_history` (or `~/.zsh_history` for Zsh)

### History Expansion (Bang Commands)

| Syntax | Description |
|--------|-------------|
| `!!` | Repeat the last command |
| `!n` | Execute command number `n` from history |
| `!-n` | Execute command `n` lines back |
| `!string` | Execute most recent command starting with `string` |
| `!?string` | Execute most recent command containing `string` |
| `!$` | Last argument of previous command |
| `!*` | All arguments of previous command |
| `!:n` | The nth argument of the last command |
| `^old^new` | Repeat last command, replacing `old` with `new` |

```bash
$ echo hello world
hello world

$ !!              # Runs: echo hello world
$ !echo           # Runs most recent 'echo' command
$ sudo !!         # Run last command with sudo
$ !echo:p         # Print (don't execute) the command
```

### Managing History

```bash
history -d <n>    # Delete line n from history
history -c        # Clear entire history
history -w        # Write current history to file
history -r        # Read history file into current session
```

### History Environment Variables

| Variable | Description |
|----------|-------------|
| `$HISTSIZE` | Number of commands kept in memory |
| `$HISTFILESIZE` | Number of commands saved to file |
| `$HISTFILE` | Location of history file |
| `$HISTCONTROL` | Controls what gets saved |
| `$HISTIGNORE` | Patterns to ignore |
| `$HISTTIMEFORMAT` | Timestamp format |

### `$HISTCONTROL` Values

| Value | Behavior |
|-------|----------|
| `ignorespace` | Ignore commands starting with a space |
| `ignoredups` | Ignore duplicate consecutive commands |
| `ignoreboth` | Combines `ignorespace` and `ignoredups` |
| `erasedups` | Remove all previous duplicates |

```bash
# Add to ~/.bashrc
export HISTCONTROL=ignoreboth:erasedups
```

### `$HISTTIMEFORMAT` — Add Timestamps

```bash
export HISTTIMEFORMAT="%F %T  "
# Output: 2024-01-15 14:30:45  command
```

| Format | Output |
|--------|--------|
| `%F` | Full date (YYYY-MM-DD) |
| `%T` | Time (HH:MM:SS) |
| `%d` | Day |
| `%m` | Month |
| `%y` | Year (2 digits) |

> 💡 **Pro tip:** Add a trailing space in the format string for readability.

---

## 🔐 Root vs Non-Root Users

Understanding privilege levels is fundamental to Linux security and administration.

### The Root User

- **UID 0** — The superuser with unrestricted access
- Can read, modify, or delete any file
- Can execute any command
- **Use with caution!** There's no "undo" for many root actions

### Ways to Gain Root Privileges

| Command | Description |
|---------|-------------|
| `sudo <command>` | Execute single command as root |
| `sudo -i` | Interactive root shell (root's environment) ✅ |
| `sudo su -` | Switch to root with root's environment ✅ |
| `sudo su` | Switch to root, keep current environment |
| `su` | Switch to root (requires root password) |
| `su - <user>` | Switch to another user |

> ⚠️ **Best Practice:** Prefer `sudo -i` or `sudo su -` to get a clean root environment.

### Managing Sudo Sessions

```bash
sudo -k          # Invalidate cached credentials immediately
sudo -v          # Extend sudo timeout without running a command
sudo -l          # List your sudo privileges
```

The default sudo timeout is typically **5 minutes** (configurable in `/etc/sudoers`).

### The `sudoers` File

```bash
sudo visudo      # Safe way to edit sudoers
```

**Never edit `/etc/sudoers` directly!** Use `visudo` for syntax checking.

### Checking Your Privileges

```bash
whoami           # Current username
id               # User ID, group ID, and groups
groups           # Groups you belong to
```

> 🛡️ **Security tip:** Only use root when necessary. Follow the **principle of least privilege**.

---

## 🔀 Piping and Command Redirection

One of Linux's most powerful features is the ability to chain commands together and redirect their input/output.

### Understanding Standard Streams

Every process has three standard streams:

| Stream | File Descriptor | Description |
|--------|-----------------|-------------|
| `stdin` | 0 | Standard input |
| `stdout` | 1 | Standard output |
| `stderr` | 2 | Standard error |

### Piping (`|`)

Pipes send the output of one command as input to another.

```bash
command1 | command2 | command3
```

**Examples:**

```bash
ls -la | less                    # Browse long output
cat file.txt | sort | uniq       # Sort and remove duplicates
ps aux | grep nginx              # Find nginx processes
history | tail -20               # Last 20 commands
ls -lSh /etc | head              # 10 largest items in /etc
```

### Output Redirection

| Operator | Description |
|----------|-------------|
| `>` | Redirect stdout (overwrite) |
| `>>` | Redirect stdout (append) |
| `2>` | Redirect stderr (overwrite) |
| `2>>` | Redirect stderr (append) |
| `&>` | Redirect both stdout and stderr |
| `&>>` | Append both stdout and stderr |

**Examples:**

```bash
ls -l > listing.txt              # Save output to file
echo "log entry" >> app.log      # Append to file
find / -name "*.conf" 2> /dev/null   # Discard errors
command &> output.log            # Capture everything
```

### Input Redirection

| Operator | Description |
|----------|-------------|
| `<` | Redirect stdin from file |
| `<<` | Here document (heredoc) |
| `<<<` | Here string |

```bash
sort < unsorted.txt              # Sort file contents
wc -l < data.txt                 # Count lines

# Heredoc - multi-line input
cat << EOF
Line 1
Line 2
EOF

# Here string
grep "pattern" <<< "search in this string"
```

### Combining Streams

```bash
# Redirect stderr to stdout
command 2>&1

# Redirect stdout to stderr
command 1>&2

# Send both to a file
command > output.log 2>&1

# Modern syntax (bash 4+)
command &> output.log
```

### The `tee` Command

Write to both stdout AND a file simultaneously.

```bash
command | tee file.txt           # Output to screen and file
command | tee -a file.txt        # Append to file
command | tee file1.txt file2.txt   # Write to multiple files
```

```bash
$ ls -la | tee directory.txt
# Shows output AND saves to directory.txt
```

### Process Substitution

Treat command output as a file.

```bash
diff <(command1) <(command2)     # Compare outputs
cat <(ls dir1) <(ls dir2)        # Concatenate outputs
```

> 💡 **Pro tip:** Use `/dev/null` as a "black hole" to discard unwanted output.

---

## 🔍 Finding Files and Directories

Linux provides several tools for locating files, each with different use cases.

### Quick Reference

| Command | Search Method | Speed | Use Case |
|---------|---------------|-------|----------|
| `which` | PATH only | Fast | Find executables |
| `whereis` | Standard locations | Fast | Find binaries, man pages, source |
| `locate`/`plocate` | Database | Very fast | Quick filename search |
| `find` | Real-time filesystem | Slower | Complex searches with actions |

### `which` — Find Executables

```bash
which python              # First match in PATH
which -a python           # All matches in PATH
```

### `whereis` — Find Related Files

```bash
whereis bash
# bash: /usr/bin/bash /usr/share/man/man1/bash.1.gz
```

### `locate` / `plocate` — Database Search

Searches a pre-built database (very fast but may be outdated).

```bash
locate filename           # Search for filename
locate -i filename        # Case-insensitive
locate -c filename        # Count matches
sudo updatedb             # Update the database
```

> ⚠️ **Note:** Database is typically updated daily via cron. Run `updatedb` for fresh results.

### `find` — Real-time Search

The most powerful and flexible file search tool.

```bash
find <path> <options> <expression>
```

**Basic Options:**

| Option | Description |
|--------|-------------|
| `-name "pattern"` | Match filename (case-sensitive) |
| `-iname "pattern"` | Match filename (case-insensitive) |
| `-type f` | Files only |
| `-type d` | Directories only |
| `-type l` | Symbolic links only |
| `-maxdepth n` | Limit search depth |
| `-mindepth n` | Start at depth n |

**By Size:**

| Option | Description |
|--------|-------------|
| `-size +100M` | Larger than 100MB |
| `-size -1k` | Smaller than 1KB |
| `-empty` | Empty files or directories |

**By Time:**

| Option | Description |
|--------|-------------|
| `-mtime -7` | Modified in last 7 days |
| `-mtime +30` | Modified more than 30 days ago |
| `-mmin -60` | Modified in last 60 minutes |
| `-newer file` | Modified after reference file |

**By Permissions/Ownership:**

| Option | Description |
|--------|-------------|
| `-user username` | Owned by user |
| `-group groupname` | Owned by group |
| `-perm 644` | Exact permissions |
| `-perm -644` | At least these permissions |

**Actions:**

| Option | Description |
|--------|-------------|
| `-print` | Print pathname (default) |
| `-ls` | List in `ls -l` format |
| `-delete` | Delete matching files |
| `-exec cmd {} \;` | Execute command on each file |
| `-exec cmd {} +` | Execute command on all files at once |

**Examples:**

```bash
# Find all .log files
find /var/log -name "*.log"

# Find files larger than 100MB
find / -type f -size +100M 2>/dev/null

# Find and delete empty directories
find . -type d -empty -delete

# Find files modified in last 24 hours
find . -mtime -1

# Find and change permissions
find . -type f -name "*.sh" -exec chmod +x {} \;

# Find with multiple conditions (AND)
find . -name "*.txt" -size +1M

# Find with OR condition
find . \( -name "*.jpg" -o -name "*.png" \)

# Find files NOT matching pattern
find . -type f ! -name "*.txt"
```

> 💡 **Pro tip:** Use `2>/dev/null` with find to suppress "Permission denied" errors.

---

## 🔎 `grep` — Search File Contents

`grep` (Global Regular Expression Print) searches for patterns within files.

### Basic Syntax

```bash
grep [options] "pattern" <file(s)>
command | grep [options] "pattern"
```

### Common Options

| Option | Description |
|--------|-------------|
| `-i` | Case-insensitive search |
| `-v` | Invert match (show non-matching lines) |
| `-n` | Show line numbers |
| `-c` | Count matching lines |
| `-l` | List only filenames with matches |
| `-L` | List filenames without matches |
| `-w` | Match whole words only |
| `-x` | Match whole lines only |
| `-r` / `-R` | Recursive search in directories |
| `-A n` | Show n lines after match |
| `-B n` | Show n lines before match |
| `-C n` | Show n lines before and after match |
| `-E` | Extended regex (same as `egrep`) |
| `-P` | Perl-compatible regex |
| `-o` | Show only matching part |
| `--color` | Highlight matches |

### Examples

```bash
# Basic search
grep "error" logfile.txt

# Case-insensitive, with line numbers
grep -in "warning" /var/log/syslog

# Search entire word only
grep -w "fail" results.txt

# Recursive search in directory
grep -r "TODO" ./src/

# Search multiple patterns
grep -E "error|warning|critical" log.txt

# Exclude certain files
grep -r "pattern" --exclude="*.log" .

# Include only certain files
grep -r "function" --include="*.js" .

# Show context around matches
grep -C 3 "Exception" app.log

# Count occurrences
grep -c "GET" access.log

# Pipe with other commands
ps aux | grep nginx
cat /etc/passwd | grep -v "nologin"
```

### Regular Expression Basics

| Pattern | Meaning |
|---------|---------|
| `.` | Any single character |
| `*` | Zero or more of previous |
| `+` | One or more of previous (use `-E`) |
| `?` | Zero or one of previous (use `-E`) |
| `^` | Start of line |
| `$` | End of line |
| `[abc]` | Any character in brackets |
| `[^abc]` | Any character NOT in brackets |
| `[a-z]` | Range of characters |
| `\b` | Word boundary |
| `\d` | Digit (use `-P`) |
| `\s` | Whitespace (use `-P`) |

```bash
# Lines starting with "Error"
grep "^Error" log.txt

# Lines ending with a number
grep "[0-9]$" data.txt

# Lines containing IP addresses (basic)
grep -E "[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+" access.log
```

### `strings` — Extract Readable Text

Extracts printable ASCII strings from binary files.

```bash
strings /usr/bin/ls           # See strings in binary
strings -n 10 binary          # Minimum 10 characters
strings binary | grep "pass"  # Search for patterns
```

> 💡 **Pro tip:** Combine `grep` with `find` using `xargs`:
> ```bash
> find . -name "*.py" | xargs grep "import"
> ```

---

## 🎓 Additional Essential Commands

### `xargs` — Build Commands from Input

Convert input into arguments for other commands.

```bash
# Find and remove files
find . -name "*.tmp" | xargs rm

# Parallel execution
cat urls.txt | xargs -P 4 -I {} curl {}

# Handle filenames with spaces
find . -name "*.txt" -print0 | xargs -0 cat
```

### `cut` — Extract Columns

```bash
cut -d':' -f1 /etc/passwd     # First field, colon delimiter
cut -c1-10 file.txt           # First 10 characters
```

### `sort` — Sort Lines

```bash
sort file.txt                 # Alphabetical
sort -n file.txt              # Numerical
sort -r file.txt              # Reverse
sort -u file.txt              # Unique (remove duplicates)
sort -k2 file.txt             # Sort by 2nd column
```

### `uniq` — Filter Duplicates

```bash
sort file.txt | uniq          # Remove duplicates (requires sorted input)
sort file.txt | uniq -c       # Count occurrences
sort file.txt | uniq -d       # Show only duplicates
```

### `head` & `tail` — View File Parts

```bash
head -n 20 file.txt           # First 20 lines
tail -n 20 file.txt           # Last 20 lines
tail -f /var/log/syslog       # Follow file (live updates)
tail -F log.txt               # Follow with retry (handles log rotation)
```

### `less` — Pager for Large Files

```bash
less large_file.txt
```

| Key | Action |
|-----|--------|
| `Space` | Next page |
| `b` | Previous page |
| `/pattern` | Search forward |
| `?pattern` | Search backward |
| `n` | Next search result |
| `N` | Previous search result |
| `q` | Quit |
| `g` | Go to beginning |
| `G` | Go to end |

---

## 📚 Quick Reference Card

### Essential Navigation

```bash
pwd                 # Print working directory
cd <dir>            # Change directory
cd ~                # Go to home directory
cd -                # Go to previous directory
ls -la              # List all files with details
```

### File Operations

```bash
cp src dest         # Copy file
mv src dest         # Move/rename file
rm file             # Remove file
rm -r dir           # Remove directory recursively
mkdir -p dir/sub    # Create nested directories
touch file          # Create empty file / update timestamp
```

### Viewing Files

```bash
cat file            # Display entire file
less file           # Page through file
head -n 10 file     # First 10 lines
tail -n 10 file     # Last 10 lines
tail -f file        # Follow file changes
```

### Getting Help

```bash
man command         # Manual page
command --help      # Quick help
whatis command      # One-line description
type command        # What type of command
```

---

> 📝 **Note:** This guide covers Bash, the default shell on most Linux distributions. Some features may differ in other shells like Zsh or Fish.