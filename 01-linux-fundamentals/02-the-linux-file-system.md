# 📂 The Linux File System

> *"Everything in Linux is a file - even the hardware."*

---

## 📑 Table of Contents

- [🗂️ What is a File System?](#️-what-is-a-file-system)
  - [Types of "Files" in Linux](#types-of-files-in-linux)
  - [Common Linux File Systems](#common-linux-file-systems)
  - [Key Characteristics](#key-characteristics)
- [🌳 The Filesystem Hierarchy Standard](#-the-filesystem-hierarchy-standard)
- [🚶 Walking Through the File System](#-walking-through-the-file-system)
- [📋 The `ls` Command](#-the-ls-command)
- [🕐 File Timestamps](#-file-timestamps)
- [👁️ Viewing Files](#️-viewing-files)
- [🛠️ Handling Files](#️-handling-files)
- [🔗 Hard Links vs Symbolic Links](#-hard-links-vs-symbolic-links)
- [📚 Quick Reference Card](#-quick-reference-card)

---

## 🗂️ What is a File System?

- A file system controls how data is stored and retrieved
- Each group of data is called a **file**, and the structure and logic rules used to manage files and their names are called **file systems**
- A file system is a logical collection of files on a partition or disk
- On a Linux system, **everything is considered to be a file**
- On Linux, file and directory names are **case-sensitive**

### Types of "Files" in Linux

Since everything is a file, Linux treats many things as files:

| Type | Examples |
|------|----------|
| Regular files | Text files, images, binaries |
| Directories | Folders containing other files |
| Device files | `/dev/sda` (disk), `/dev/null` |
| Symbolic links | Shortcuts to other files |
| Sockets & pipes | Inter-process communication |

### Common Linux File Systems

| File System | Description |
|-------------|-------------|
| **ext4** | Default for most Linux distros, reliable and mature |
| **xfs** | High-performance, good for large files (RHEL default) |
| **btrfs** | Modern with snapshots and compression support |
| **ntfs** | Windows file system (read/write support in Linux) |
| **vfat/fat32** | USB drives, cross-platform compatibility |

### Key Characteristics

- **No drive letters** — everything is mounted under a single root (`/`)
- **Hidden files** start with a dot (`.bashrc`, `.config/`)
- **Extensions are optional** — Linux identifies files by content, not extension
- **Path separator** is forward slash (`/`), not backslash

```bash
# Check what file system a partition uses
df -Th

# Identify a file's actual type (regardless of extension)
file myfile.txt
```

---

## 🌳 The Filesystem Hierarchy Standard

Linux follows the **Filesystem Hierarchy Standard (FHS)**, organizing all files under a single root (`/`).

| Directory | Description |
|-----------|-------------|
| `/bin` | Binaries or user executable files available to all users |
| `/sbin` | System binaries that only the superuser will need |
| `/boot` | Files required for starting your system |
| `/home` | User home directories (all users except root) |
| `/dev` | Device files |
| `/etc` | System-wide configuration files |
| `/lib` | Shared library files used by different applications |
| `/media` | Mount point for external storage (automatically mounted) |
| `/mnt` | Manual mount point (less commonly used these days) |
| `/tmp` | Temporary files saved by running applications. Non-privileged users may also store files here temporarily |
| `/proc` | Virtual directory with hardware info (CPU, RAM, Kernel). Generated at boot or on-the-fly as the system runs |
| `/sys` | Information about devices, drivers, and some kernel features |
| `/srv` | Data for servers |
| `/run` | Temporary file system which runs in RAM |
| `/usr` | User binaries, shared libraries, and more. On some distros (like CentOS), many commands are in `/usr/bin` and `/usr/sbin` instead of `/bin` and `/sbin` |
| `/var` | Variable-length files such as logs (files that register events on the system) |

```
/
├── bin/       → Essential user binaries
├── sbin/      → System binaries
├── boot/      → Boot loader files
├── home/      → User home directories
├── dev/       → Device files
├── etc/       → Configuration files
├── lib/       → Shared libraries
├── media/     → Removable media (auto-mount)
├── mnt/       → Manual mount point
├── tmp/       → Temporary files
├── proc/      → Process & hardware info (virtual)
├── sys/       → Device & kernel info (virtual)
├── srv/       → Server data
├── run/       → Runtime data (RAM)
├── usr/       → User programs & libraries
└── var/       → Variable data (logs, caches)
```

---

## 🚶 Walking Through the File System

### Essential Navigation Commands

| Command | Description |
|---------|-------------|
| `pwd` | Print working directory — shows your current location |
| `cd` | Change directory — move to a different location |
| `ls` | List contents of a directory |
| `tree` | Visual representation of directory structure |

### Path Shortcuts

| Symbol | Meaning |
|--------|---------|
| `~` | Current user's home directory |
| `/` | Root of the file system |
| `.` | Current directory |
| `..` | Parent directory |
| `-` | Previous directory |

### Examples

```bash
# Where am I?
pwd
# /home/v43

# Go to home directory
cd ~
cd          # Same as cd ~

# Go to root
cd /

# Go up one directory
cd ..

# Go to previous directory
cd -

# List files
ls
ls -la      # Long format with hidden files

# View directory tree
tree
tree -L 2   # Limit depth to 2 levels
```

---

## 📋 The `ls` Command

The `ls` command lists directory contents. Combine flags for more detailed output.

### Common Flags

| Flag | Description |
|------|-------------|
| `-l` | Long list format (permissions, owner, size, date) |
| `-a` | Show all files (including hidden files starting with `.`) |
| `-S` | Sort by size (descending) |
| `-h` | Human-readable sizes (KB, MB, GB) |
| `-x` | Sort by extension |

### Examples

```bash
# Basic listing
ls

# Long format
ls -l

# Show hidden files
ls -a

# Combine flags: long format, all files, human-readable sizes
ls -lah

# Sort by size (largest first)
ls -lSh

# Sort by extension
ls -lx
```

### Reading `ls -l` Output

```
-rw-r--r-- 1 user group 4096 Jan 20 10:00 file.txt
│└──┬───┘  │  │    │     │       │         └── Filename
│   │      │  │    │     │       └── Modification date
│   │      │  │    │     └── File size
│   │      │  │    └── Group owner
│   │      │  └── User owner
│   │      └── Number of hard links
│   └── Permissions (owner/group/others)
└── File type (- = file, d = directory, l = link)
```

---

## 🕐 File Timestamps

Every file in Linux has three timestamps that track different events.

| Timestamp | Name | Description | View with |
|-----------|------|-------------|-----------|
| **atime** | Access time | Last time the file was read | `ls -lu` |
| **mtime** | Modification time | Last time the file contents were modified | `ls -l`, `ls -lt` |
| **ctime** | Change time | Last time file metadata was changed (permissions, owner, etc.) | `ls -lc` |

### Viewing Timestamps

```bash
# Show modification time (default)
ls -l

# Sort by modification time (newest first)
ls -lt

# Show access time
ls -lu

# Show change time (metadata)
ls -lc

# Show all timestamps with stat
stat file.txt
```

### Example `stat` Output

```bash
$ stat file.txt
  File: file.txt
  Size: 4096       Blocks: 8          IO Block: 4096   regular file
Access: 2024-01-20 10:30:00.000000000 +0000
Modify: 2024-01-19 15:45:00.000000000 +0000
Change: 2024-01-19 15:45:00.000000000 +0000
 Birth: -
```

> 💡 **Note:** Reading a file updates **atime**, editing content updates **mtime**, and changing permissions/ownership updates **ctime**.

---

## 👁️ Viewing Files

### `cat` — Concatenate and Display

Displays file contents in the terminal. Best for smaller files.

```bash
cat file.txt              # Display file contents
cat -n file.txt           # Show line numbers
cat file1.txt file2.txt   # Display multiple files together
```

### `less` — Interactive Pager

Better for viewing long files with navigation and search capabilities.

```bash
less file.txt
```

| Key | Action |
|-----|--------|
| `h` | Show help |
| `Space` / `f` | Forward one page |
| `b` | Back one page |
| `/pattern` | Search forward |
| `?pattern` | Search backward |
| `n` | Next search result |
| `N` | Previous search result |
| `g` | Go to beginning |
| `G` | Go to end |
| `q` | Quit |

### `head` — View Beginning of File

Shows the first 10 lines of a file by default.

```bash
head file.txt             # First 10 lines
head -n 20 file.txt       # First 20 lines
```

### `tail` — View End of File

Shows the last 10 lines of a file by default.

```bash
tail file.txt             # Last 10 lines
tail -n 20 file.txt       # Last 20 lines
tail -f file.txt          # Follow file in real-time (great for logs)
```

### `watch` — Monitor Command Output

Runs a command repeatedly (every 2 seconds by default) and displays the output.

```bash
watch ls                  # Watch folder for changes
watch -n 1 ls             # Update every 1 second
watch "df -h"             # Monitor disk space
```

---

## 🛠️ Handling Files

### Creating Files and Directories

| Command | Description |
|---------|-------------|
| `touch file.txt` | Create an empty file (or update timestamp) |
| `mkdir dir` | Create a directory |
| `mkdir dir1 dir2` | Create multiple directories |
| `mkdir -p parent/child` | Create nested directories |

```bash
touch newfile.txt
mkdir projects
mkdir -p projects/web/src
```

### Copying Files — `cp`

```bash
cp file1.txt file2.txt              # Copy file1 to file2 (overwrites)
cp file1.txt file2.txt dir/         # Copy multiple files to directory
cp -r dir1/ dir2/                   # Copy directory recursively
cp -p file1.txt file2.txt           # Preserve permissions and ownership
```

> 💡 **Note:** By default, the user who copies becomes the owner of the new file. Use `-p` to preserve original permissions.

### Moving and Renaming — `mv`

```bash
mv file.txt /new/location/          # Move file to new location
mv oldname.txt newname.txt          # Rename file
mv file1.txt file2.txt dir/         # Move multiple files to directory
mv *.txt documents/                 # Move all .txt files to directory
```

> ⚠️ **Warning:** `mv` overwrites files without warning if they already exist at the destination.

### Removing Files and Directories — `rm`

```bash
rm file.txt                         # Remove file
rm file1.txt file2.txt              # Remove multiple files
rm -r directory/                    # Remove directory and contents
rm -f file.txt                      # Force remove (no confirmation)
rm -rf directory/                   # Force remove directory (use with caution!)
```

> ⚠️ **Safety Tips:**
> - Always use **tab-autocomplete** when removing files to avoid typos
> - `rm` removes file links and frees memory, but data may be recoverable
> - Use `shred` for secure deletion of sensitive files

### Secure Deletion — `shred`

```bash
shred -u file.txt                   # Overwrite and remove file securely
shred -n 5 file.txt                 # Overwrite 5 times (default is 3)
```

### Quick Reference

| Task | Command |
|------|---------|
| Create file | `touch file.txt` |
| Create directory | `mkdir dir` |
| Copy file | `cp src dest` |
| Copy directory | `cp -r src/ dest/` |
| Move/rename | `mv src dest` |
| Remove file | `rm file` |
| Remove directory | `rm -r dir/` |
| Secure delete | `shred -u file` |

---

## 🔗 Hard Links vs Symbolic Links

Links allow you to reference files from multiple locations without duplicating data.

### Hard Links

- Points directly to the file's data (inode) on disk
- Cannot link to directories
- Cannot cross filesystem boundaries
- File data remains until **all** hard links are deleted
- Same inode number as the original

```bash
ln original.txt hardlink.txt
ls -li    # Shows same inode number for both
```

### Symbolic (Soft) Links

- Points to the file's **path** (like a shortcut)
- Can link to directories
- Can cross filesystem boundaries
- Breaks if the target is moved or deleted

```bash
ln -s /path/to/original symlink.txt
ls -l symlink.txt
# symlink.txt -> /path/to/original
```

### Comparison

| Feature | Hard Link | Symbolic Link |
|---------|-----------|---------------|
| Links to | Inode (data) | Path (name) |
| Cross filesystem | No | Yes |
| Link to directory | No | Yes |
| Original deleted | Data preserved | Link breaks |
| Command | `ln file link` | `ln -s file link` |

### Managing Links

```bash
# Create hard link
ln original.txt hardlink.txt

# Create symbolic link
ln -s /path/to/original symlink.txt

# Find what a symlink points to
readlink symlink.txt

# Find all hard links to a file (by inode)
find / -inum $(stat -c %i original.txt) 2>/dev/null
```

---

## 📚 Quick Reference Card

### Navigation

```bash
pwd                     # Print working directory
cd /path/to/dir         # Change directory
cd ~                    # Go to home directory
cd -                    # Go to previous directory
ls -la                  # List all files with details
tree -L 2               # Directory tree (2 levels deep)
```

### Viewing Files

```bash
cat file.txt            # Display entire file
cat -n file.txt         # Display with line numbers
less file.txt           # Interactive pager
head -n 20 file.txt     # First 20 lines
tail -n 20 file.txt     # Last 20 lines
tail -f file.txt        # Follow file in real-time
```

### File Operations

```bash
touch file.txt          # Create empty file
mkdir -p dir/subdir     # Create nested directories
cp -r src/ dest/        # Copy directory recursively
cp -p file1 file2       # Copy preserving permissions
mv old.txt new.txt      # Rename file
mv file.txt dir/        # Move file to directory
rm file.txt             # Remove file
rm -r directory/        # Remove directory
```

### Links

```bash
ln file hardlink        # Create hard link
ln -s file symlink      # Create symbolic link
readlink symlink        # Show link target
```

### File Information

```bash
file myfile             # Identify file type
stat myfile             # Detailed file info
ls -li                  # Show inode numbers
df -Th                  # Disk space by filesystem
du -sh directory/       # Directory size
```

### Timestamps

```bash
ls -l                   # Show modification time
ls -lu                  # Show access time
ls -lc                  # Show change time
ls -lt                  # Sort by modification time
stat file.txt           # Show all timestamps
```

---

> 📝 **Note:** This guide covers standard Linux file system operations. Some commands may vary slightly between distributions. When in doubt, use `man <command>` for detailed documentation.
