# 📂 The Linux File System

> *"Everything in Linux is a file - even the hardware."*

---

## 📑 Table of Contents

- [🗂️ What is a File System?](#️-what-is-a-file-system)
  - [Types of "Files" in Linux](#types-of-files-in-linux)
  - [Common Linux File Systems](#common-linux-file-systems)
  - [Key Characteristics](#key-characteristics)

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
