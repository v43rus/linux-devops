# ✏️ Vim

> *"Vim is hard at first, but once you learn the basics, you'll love it."*

---

#### [Cheat Sheet](../cheat-sheets/vim-commands.md)

## 📑 Table of Contents

- [🎯 Introduction](#-introduction)
- [🔄 Vim Modes](#-vim-modes)
- [✍️ Entering Insert Mode](#️-entering-insert-mode)
- [⌨️ Command Mode Basics](#️-command-mode-basics)
- [💾 Last-Line Mode (Saving & Quitting)](#-last-line-mode-saving--quitting)
- [🔍 Searching & Replacing](#-searching--replacing)
- [↩️ Undo & Redo](#️-undo--redo)
- [✂️ Cut, Copy & Paste](#️-cut-copy--paste)
- [🧭 Navigation](#-navigation)
- [📂 Working with Multiple Files](#-working-with-multiple-files)
- [⚙️ Settings & Configuration](#️-settings--configuration)
- [📚 Quick Reference Card](#-quick-reference-card)

---

## 🎯 Introduction

Vim is a powerful, lightweight terminal text editor available on virtually every Linux system. It's very worth learning for DevOps work.

```bash
# Install vim
sudo apt install vim

# Open or create a file
vim filename.txt

# Learn vim interactively
vimtutor
```

> 💡 **Tip:** Run `vimtutor` for an interactive tutorial built into vim.

---

## 🔄 Vim Modes

Vim operates in three main modes:

| Mode | Purpose | How to Enter |
|------|---------|--------------|
| **Command** | Navigate, delete, copy, paste | `Esc` (default mode) |
| **Insert** | Type and edit text freely | `i`, `a`, `o`, etc. |
| **Last-Line** | Save, quit, search, settings | `:` (colon) |

When you open a file, you start in **Command Mode**.

```
┌─────────────────────────────────────────────┐
│                                             │
│              COMMAND MODE                   │
│           (default on open)                 │
│                                             │
│      i, a, o, etc.          :               │
│           ↓                  ↓              │
│    ┌──────────────┐   ┌──────────────┐      │
│    │ INSERT MODE  │   │ LAST-LINE    │      │
│    │  (editing)   │   │   MODE       │      │
│    └──────────────┘   └──────────────┘      │
│           ↑                  ↑              │
│          Esc               Esc              │
│                                             │
└─────────────────────────────────────────────┘
```

---

## ✍️ Entering Insert Mode

From Command Mode, use these keys to enter Insert Mode:

| Key | Action |
|-----|--------|
| `i` | Insert before cursor |
| `I` | Insert at beginning of line |
| `a` | Append after cursor |
| `A` | Append at end of line |
| `o` | Open new line below |
| `O` | Open new line above |

Press `Esc` to return to Command Mode.

---

## ⌨️ Command Mode Basics

These commands work in Command Mode (press `Esc` first):

### Character Operations

| Key | Action |
|-----|--------|
| `x` | Delete character under cursor |
| `r` | Replace character under cursor |

### Movement

| Key | Action |
|-----|--------|
| `h` | Move left |
| `j` | Move down |
| `k` | Move up |
| `l` | Move right |
| `w` | Jump to next word |
| `b` | Jump to previous word |
| `0` | Jump to beginning of line |
| `$` | Jump to end of line |

---

## 💾 Last-Line Mode (Saving & Quitting)

Press `:` to enter Last-Line Mode, then type a command:

| Command | Action |
|---------|--------|
| `:w` | Save (write) file |
| `:q` | Quit (fails if unsaved changes) |
| `:q!` | Quit without saving (force) |
| `:wq` | Save and quit |
| `ZZ` | Save and quit (from Command Mode) |
| `:x` | Save and quit (only writes if changed) |

---

## 🔍 Searching & Replacing

### Searching

| Command | Action |
|---------|--------|
| `/pattern` | Search forward |
| `?pattern` | Search backward |
| `n` | Next match |
| `N` | Previous match |

### Search & Replace

```vim
:%s/old/new/g
```

| Part | Meaning |
|------|---------|
| `%` | Apply to all lines |
| `s` | Substitute command |
| `old` | Pattern to find |
| `new` | Replacement text |
| `g` | Global (all occurrences per line) |

```vim
:%s/foo/bar/g      " Replace all 'foo' with 'bar'
:%s/foo/bar/gc     " Replace with confirmation
:s/foo/bar/g       " Replace only on current line
```

### Run External Commands

```vim
:!ls               " Run ls command
:!pwd              " Show current directory
```

---

## ↩️ Undo & Redo

| Command | Action |
|---------|--------|
| `u` | Undo last change |
| `Ctrl + r` | Redo last undone change |
| `:e!` | Revert to last saved version |

---

## ✂️ Cut, Copy & Paste

### Quick Cut & Paste

| Command | Action |
|---------|--------|
| `dd` | Cut (delete) current line |
| `5dd` | Cut 5 lines |
| `10dd` | Cut 10 lines |
| `yy` | Copy (yank) current line |
| `5yy` | Copy 5 lines |
| `p` | Paste below cursor |
| `P` | Paste above cursor |

### Visual Selection

| Command | Action |
|---------|--------|
| `v` | Start character selection |
| `V` | Start line selection |
| `Ctrl + v` | Start block (column) selection |

After selecting:
- `y` — Copy (yank) selection
- `d` — Cut (delete) selection
- `p` — Paste

---

## 🧭 Navigation

### Moving Within File

| Command | Action |
|---------|--------|
| `gg` | Go to beginning of file |
| `G` | Go to end of file |
| `:100` | Go to line 100 |
| `Ctrl + f` | Page down |
| `Ctrl + b` | Page up |

---

## 📂 Working with Multiple Files

### Opening Multiple Files

```bash
vim file_a file_b           # Open files in sequence
vim -o file_a file_b        # Open in horizontal split
vim -O file_a file_b        # Open in vertical split
vim -d file_a file_b        # Open in diff mode (vimdiff)
```

### Navigating Between Files

| Command | Action |
|---------|--------|
| `:n` or `:next` | Go to next file |
| `:N` or `:prev` | Go to previous file |
| `:ls` | List open buffers |

### Comparing Files (Diff Mode)

```bash
vim -d file_a file_b
# or
vimdiff file_a file_b
```

Highlights differences between files — useful for comparing configs or code.

> ⚠️ **Warning:** If vim closes unexpectedly (crash, terminal closed), a swap file (`.swp`) is created. You'll see a recovery prompt next time you open the file. Always exit vim properly with `:wq` or `:q!`.

---

## ⚙️ Settings & Configuration

### Temporary Settings (Current Session)

| Command | Action |
|---------|--------|
| `:set nu` | Show line numbers |
| `:set nonu` | Hide line numbers |
| `:syntax on` | Enable syntax highlighting |
| `:syntax off` | Disable syntax highlighting |

### Permanent Settings

Edit `~/.vimrc` in your home directory to set global vim settings:

```vim
" ~/.vimrc example
set number          " Show line numbers
syntax on           " Enable syntax highlighting
set tabstop=4       " Tab width
set expandtab       " Use spaces instead of tabs
set autoindent      " Auto-indent new lines
```

---

## 📚 Quick Reference Card

### Mode Switching

```
Esc             → Command Mode
i, a, o         → Insert Mode
:               → Last-Line Mode
```

### Essential Commands

```
:w              → Save
:q              → Quit
:wq or ZZ       → Save and quit
:q!             → Quit without saving
```

### Navigation

```
h j k l         → Left, down, up, right
gg              → Beginning of file
G               → End of file
:100            → Go to line 100
```

### Editing

```
i               → Insert before cursor
a               → Append after cursor
o               → New line below
x               → Delete character
dd              → Delete line
yy              → Copy line
p               → Paste
u               → Undo
Ctrl + r        → Redo
```

### Search & Replace

```
/pattern        → Search forward
?pattern        → Search backward
n / N           → Next / previous match
:%s/old/new/g   → Replace all
```

### Multiple Files

```
:n              → Next file
:N              → Previous file
vim -d a b      → Diff mode
```

---

> 📝 **Note:** Vim has a steep learning curve, but mastering even the basics will make you significantly more productive. Run `vimtutor` for interactive practice!
