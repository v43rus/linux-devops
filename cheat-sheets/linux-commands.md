# 📋 Linux Commands Cheat Sheet

> Quick reference for essential Linux commands from [The Linux Terminal](../01-linux-fundamentals/01-the-linux-terminal.md) guide.

---

## 📖 Getting Help

| Command | Description |
|---------|-------------|
| `man <cmd>` | Open manual page for command |
| `man -k <keyword>` | Search all man pages |
| `apropos <keyword>` | Same as `man -k` |
| `whatis <cmd>` | One-line command description |
| `info <cmd>` | GNU-style manual (more detailed) |
| `<cmd> --help` | Quick syntax reference |
| `help <builtin>` | Help for shell built-ins |
| `type <cmd>` | Show command type (alias/builtin/executable) |

---

## 📁 Navigation & File Operations

### Navigation

| Command | Description |
|---------|-------------|
| `pwd` | Print working directory |
| `cd <dir>` | Change directory |
| `cd ~` or `cd` | Go to home directory |
| `cd -` | Go to previous directory |
| `cd ..` | Go up one directory |
| `ls` | List directory contents |
| `ls -l` | Long format listing |
| `ls -la` | Include hidden files |
| `ls -lh` | Human-readable sizes |
| `ls -lSh` | Sort by size |

### File Operations

| Command | Description |
|---------|-------------|
| `cp <src> <dest>` | Copy file |
| `cp -r <src> <dest>` | Copy directory recursively |
| `mv <src> <dest>` | Move or rename |
| `rm <file>` | Remove file |
| `rm -r <dir>` | Remove directory recursively |
| `rm -f <file>` | Force remove (no prompt) |
| `mkdir <dir>` | Create directory |
| `mkdir -p <path>` | Create nested directories |
| `touch <file>` | Create empty file / update timestamp |

---

## 📄 Viewing & Editing Files

| Command | Description |
|---------|-------------|
| `cat <file>` | Display entire file |
| `less <file>` | Page through file |
| `head <file>` | First 10 lines |
| `head -n 20 <file>` | First 20 lines |
| `tail <file>` | Last 10 lines |
| `tail -n 20 <file>` | Last 20 lines |
| `tail -f <file>` | Follow file (live updates) |
| `tail -F <file>` | Follow with retry (log rotation) |
| `wc <file>` | Line, word, byte count |
| `wc -l <file>` | Line count only |

---

## 🔍 Finding Files

### Quick Lookup

| Command | Description |
|---------|-------------|
| `which <cmd>` | Find executable in PATH |
| `which -a <cmd>` | Find all executables in PATH |
| `whereis <cmd>` | Find binary, man page, source |
| `locate <pattern>` | Search filename database (fast) |
| `locate -i <pattern>` | Case-insensitive |
| `sudo updatedb` | Update locate database |

### `find` — Real-time Search

```bash
find <path> [options] [expression]
```

| Option | Description |
|--------|-------------|
| `-name "pattern"` | Match filename (case-sensitive) |
| `-iname "pattern"` | Match filename (case-insensitive) |
| `-type f` | Files only |
| `-type d` | Directories only |
| `-size +100M` | Larger than 100MB |
| `-size -1k` | Smaller than 1KB |
| `-mtime -7` | Modified in last 7 days |
| `-mtime +30` | Modified over 30 days ago |
| `-user <name>` | Owned by user |
| `-perm 644` | Exact permissions |
| `-empty` | Empty files/directories |
| `-maxdepth n` | Limit search depth |
| `-exec cmd {} \;` | Execute command on each match |
| `-delete` | Delete matching files |

**Examples:**
```bash
find /var/log -name "*.log"
find . -type f -size +100M 2>/dev/null
find . -mtime -1
find . -type d -empty -delete
find . -name "*.sh" -exec chmod +x {} \;
```

---

## 🔎 Searching Content (`grep`)

```bash
grep [options] "pattern" <file(s)>
```

| Option | Description |
|--------|-------------|
| `-i` | Case-insensitive |
| `-v` | Invert match (show non-matching) |
| `-n` | Show line numbers |
| `-c` | Count matches |
| `-l` | List filenames with matches |
| `-r` / `-R` | Recursive search |
| `-w` | Match whole words |
| `-E` | Extended regex (egrep) |
| `-A n` | Show n lines after match |
| `-B n` | Show n lines before match |
| `-C n` | Show n lines around match |
| `-o` | Show only matching part |
| `--color` | Highlight matches |

**Examples:**
```bash
grep "error" logfile.txt
grep -in "warning" /var/log/syslog
grep -r "TODO" ./src/
grep -E "error|warning" log.txt
grep -C 3 "Exception" app.log
ps aux | grep nginx
```

### Regular Expressions

| Pattern | Meaning |
|---------|---------|
| `.` | Any single character |
| `*` | Zero or more of previous |
| `+` | One or more (use `-E`) |
| `^` | Start of line |
| `$` | End of line |
| `[abc]` | Any char in brackets |
| `[^abc]` | Any char NOT in brackets |
| `[a-z]` | Range of characters |

---

## 🔀 Piping & Redirection

### Piping

```bash
command1 | command2 | command3
```

| Example | Description |
|---------|-------------|
| `ls -la \| less` | Browse long output |
| `cat file \| sort \| uniq` | Sort and dedupe |
| `ps aux \| grep nginx` | Find processes |
| `history \| tail -20` | Last 20 commands |

### Output Redirection

| Operator | Description |
|----------|-------------|
| `>` | Redirect stdout (overwrite) |
| `>>` | Redirect stdout (append) |
| `2>` | Redirect stderr |
| `2>>` | Append stderr |
| `&>` | Redirect both stdout and stderr |
| `&>>` | Append both |

### Input Redirection

| Operator | Description |
|----------|-------------|
| `<` | Redirect stdin from file |
| `<<` | Here document (heredoc) |
| `<<<` | Here string |

### Special

| Command | Description |
|---------|-------------|
| `command 2>&1` | Redirect stderr to stdout |
| `command > file 2>&1` | Both to file |
| `command &> file` | Both to file (modern) |
| `tee file` | Write to stdout AND file |
| `tee -a file` | Append to file |

---

## 📜 Command History

| Command | Description |
|---------|-------------|
| `history` | Display command history |
| `history 20` | Last 20 commands |
| `history -d <n>` | Delete line n |
| `history -c` | Clear history |

### Bang Commands

| Syntax | Description |
|--------|-------------|
| `!!` | Repeat last command |
| `!n` | Execute command #n |
| `!-n` | Execute nth previous command |
| `!string` | Last command starting with string |
| `!$` | Last argument of previous command |
| `!*` | All arguments of previous command |
| `^old^new` | Replace in last command |
| `sudo !!` | Run last command with sudo |

---

## 🔐 User & Privileges

| Command | Description |
|---------|-------------|
| `whoami` | Current username |
| `id` | User ID, group ID, groups |
| `groups` | Groups you belong to |
| `sudo <cmd>` | Execute as root |
| `sudo -i` | Interactive root shell |
| `sudo su -` | Switch to root |
| `sudo -k` | Invalidate sudo cache |
| `sudo -v` | Extend sudo timeout |
| `sudo -l` | List your sudo privileges |
| `sudo visudo` | Safely edit sudoers |

---

## 🛠️ Text Processing

| Command | Description |
|---------|-------------|
| `sort <file>` | Sort lines alphabetically |
| `sort -n <file>` | Sort numerically |
| `sort -r <file>` | Sort reverse |
| `sort -u <file>` | Sort and remove duplicates |
| `sort -k2 <file>` | Sort by 2nd column |
| `uniq` | Remove adjacent duplicates |
| `uniq -c` | Count occurrences |
| `uniq -d` | Show only duplicates |
| `cut -d':' -f1 <file>` | Extract first field |
| `cut -c1-10 <file>` | Extract characters 1-10 |
| `strings <binary>` | Extract readable text from binary |

### `xargs` — Build Commands

```bash
find . -name "*.tmp" | xargs rm
cat urls.txt | xargs -P 4 -I {} curl {}
find . -name "*.txt" -print0 | xargs -0 cat
```

---

## ⌨️ Keyboard Shortcuts

### Navigation

| Shortcut | Action |
|----------|--------|
| `Ctrl + A` | Beginning of line |
| `Ctrl + E` | End of line |
| `Alt + B` | Back one word |
| `Alt + F` | Forward one word |

### Editing

| Shortcut | Action |
|----------|--------|
| `Ctrl + U` | Delete before cursor |
| `Ctrl + K` | Delete after cursor |
| `Ctrl + W` | Delete word before |
| `Ctrl + Y` | Paste deleted text |
| `Ctrl + _` | Undo |

### Control

| Shortcut | Action |
|----------|--------|
| `Ctrl + L` | Clear screen |
| `Ctrl + C` | Interrupt/kill process |
| `Ctrl + Z` | Suspend process |
| `Ctrl + D` | Exit shell / EOF |
| `Ctrl + R` | Reverse history search |

---

## 📊 Quick Examples

```bash
# Find large files
find / -type f -size +100M 2>/dev/null

# Search recursively for pattern
grep -rn "TODO" ./src/

# Count lines in all Python files
find . -name "*.py" | xargs wc -l

# Last 20 commands containing "git"
history | grep git | tail -20

# Monitor log file live
tail -f /var/log/syslog

# Find and delete old temp files
find /tmp -type f -mtime +7 -delete
```

---

> 📝 For detailed explanations, see [The Linux Terminal](../01-linux-fundamentals/01-the-linux-terminal.md) guide.
