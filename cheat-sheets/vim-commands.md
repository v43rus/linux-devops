# ✏️ Vim Cheat Sheet

> Quick reference for Vim commands from the [Vim Guide](../01-linux-fundamentals/03-vim.md).

---

## 🔄 Modes

| Mode | Purpose | Enter | Exit |
|------|---------|-------|------|
| **Command** | Navigate, delete, copy | `Esc` | — |
| **Insert** | Edit text | `i`, `a`, `o` | `Esc` |
| **Last-Line** | Save, quit, settings | `:` | `Esc` |

---

## ✍️ Entering Insert Mode

| Key | Action |
|-----|--------|
| `i` | Insert before cursor |
| `I` | Insert at beginning of line |
| `a` | Append after cursor |
| `A` | Append at end of line |
| `o` | New line below |
| `O` | New line above |

---

## 💾 Save & Quit

| Command | Action |
|---------|--------|
| `:w` | Save |
| `:q` | Quit |
| `:q!` | Quit without saving |
| `:wq` | Save and quit |
| `ZZ` | Save and quit (command mode) |
| `:x` | Save (if changed) and quit |

---

## 🧭 Navigation

### Basic Movement

| Key | Action |
|-----|--------|
| `h` | Left |
| `j` | Down |
| `k` | Up |
| `l` | Right |

### Word Movement

| Key | Action |
|-----|--------|
| `w` | Next word |
| `b` | Previous word |
| `e` | End of word |

### Line Movement

| Key | Action |
|-----|--------|
| `0` | Beginning of line |
| `$` | End of line |
| `^` | First non-blank character |

### File Movement

| Key | Action |
|-----|--------|
| `gg` | Beginning of file |
| `G` | End of file |
| `:100` | Go to line 100 |
| `Ctrl + f` | Page down |
| `Ctrl + b` | Page up |

---

## ✂️ Editing

### Delete

| Command | Action |
|---------|--------|
| `x` | Delete character |
| `dw` | Delete word |
| `dd` | Delete line |
| `5dd` | Delete 5 lines |
| `d$` | Delete to end of line |
| `d0` | Delete to beginning of line |

### Copy (Yank)

| Command | Action |
|---------|--------|
| `yy` | Copy line |
| `5yy` | Copy 5 lines |
| `yw` | Copy word |
| `y$` | Copy to end of line |

### Paste

| Command | Action |
|---------|--------|
| `p` | Paste below/after |
| `P` | Paste above/before |

### Change

| Command | Action |
|---------|--------|
| `r` | Replace character |
| `cw` | Change word |
| `cc` | Change entire line |
| `c$` | Change to end of line |

### Undo/Redo

| Command | Action |
|---------|--------|
| `u` | Undo |
| `Ctrl + r` | Redo |
| `:e!` | Revert to saved |

---

## 🔍 Search & Replace

### Search

| Command | Action |
|---------|--------|
| `/pattern` | Search forward |
| `?pattern` | Search backward |
| `n` | Next match |
| `N` | Previous match |
| `*` | Search word under cursor |

### Replace

```vim
:s/old/new/         " Replace first on line
:s/old/new/g        " Replace all on line
:%s/old/new/g       " Replace all in file
:%s/old/new/gc      " Replace all with confirm
```

---

## 👁️ Visual Mode (Selection)

| Command | Action |
|---------|--------|
| `v` | Character selection |
| `V` | Line selection |
| `Ctrl + v` | Block selection |

After selecting:
- `y` — Copy
- `d` — Cut
- `>` — Indent
- `<` — Unindent

---

## 📂 Multiple Files

### Opening

```bash
vim file1 file2      # Sequential
vim -o file1 file2   # Horizontal split
vim -O file1 file2   # Vertical split
vim -d file1 file2   # Diff mode
```

### Navigation

| Command | Action |
|---------|--------|
| `:n` | Next file |
| `:N` | Previous file |
| `:ls` | List buffers |

### Splits

| Command | Action |
|---------|--------|
| `:sp file` | Horizontal split |
| `:vsp file` | Vertical split |
| `Ctrl + w w` | Switch window |
| `Ctrl + w q` | Close window |

---

## ⚙️ Settings

| Command | Action |
|---------|--------|
| `:set nu` | Show line numbers |
| `:set nonu` | Hide line numbers |
| `:syntax on` | Syntax highlighting on |
| `:syntax off` | Syntax highlighting off |
| `:set paste` | Paste mode (no auto-indent) |

---

## 🔧 Useful Commands

| Command | Action |
|---------|--------|
| `:!cmd` | Run shell command |
| `.` | Repeat last command |
| `>>` | Indent line |
| `<<` | Unindent line |
| `~` | Toggle case |
| `J` | Join lines |

---

## 📋 Common Workflows

### Delete line and start typing
```
cc
```

### Delete word and replace
```
cw
```

### Copy 5 lines and paste
```
5yy → move → p
```

### Search and replace all
```
:%s/old/new/g
```

### Save as new file
```
:w newfile.txt
```

### Compare two files
```bash
vimdiff file1 file2
```

---

> 💡 **Tip:** Run `vimtutor` for interactive practice!
