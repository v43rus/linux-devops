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
