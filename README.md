# 📋 Copy Selected Files

![VS Code Extension](https://img.shields.io/badge/VS%20Code-Extension-blue?logo=visualstudiocode) ![Version](https://img.shields.io/badge/version-0.0.1-green) 


🚀 **Copy multiple selected files into your clipboard as clean, structured Markdown — perfect for code reviews, documentation, bug reports, and AI prompts**.

---

## ✨ Features

- 📁 **Multi-File Selection** — Select multiple files directly from the VS Code Explorer
- 📋 **One-Click Copy** — Aggregate contents of all selected files into one clipboard action.
- 🧠 **Scalable & Efficient** — Handles 20–50+ files and 10,000+ lines safely.  
- 🛑 **Cancelable Operation** — Stop the process anytime if it’s taking too long.  
- 🧱 **Safe File Handling** — Automatically skips binary files** and **large files based on settings.  
- 🧠 **AI & Markdown Ready** — Outputs clean Markdown with optional code fences and language tags.

---

## 🚀 How to Use

### ▶ Method 1: Explorer Context Menu (Recommended)
1. Open the **VS Code Explorer** (or Search Results view).  
2. Select multiple files:  
   - **Windows / Linux:** `Ctrl + Click`  
   - **macOS:** `Cmd + Click`  
3. Right-click on the selection.  
4. Click **Copy Selected Files Content**.  
5. Paste anywhere —  
   - 🤖 ChatGPT / Copilot  
   - 📘 Docs / Notion  
   - 🧑‍💻 Code Editors  

### ▶ Method 2: Command Palette
1. Open the Command Palette:  
   - `Ctrl + Shift + P` (Windows / Linux)  
   - `Cmd + Shift + P` (macOS)  
2. Search for **Copy Selected Files Content**  
3. Press **Enter**

---

## ⚙️ Configuration

You can configure the extension via:

- **Settings → Copy Selected Files**, or  
- Directly in your `settings.json`:
```json
{
"copySelectedFiles.maxFileSizeKB": 1024,

"copySelectedFiles.enableCodeFences": true,

"copySelectedFiles.includeLanguage": true
}
```

| Setting | Description | Default |
|----------|-------------|----------|
| `copySelectedFiles.maxFileSizeKB` | Skip files larger than this size (KB) | `1024` |
| `copySelectedFiles.enableCodeFences` | Wrap content in Markdown code fences | `true` |
| `copySelectedFiles.includeLanguage` | Add language identifiers to code fences | `true` |

---

## 🛡️ Safety & Performance

- ⚡ **Non-Blocking** — Runs in background without freezing VS Code.  
- 🧬 **Binary Detection** — Prevents clipboard corruption.  
- 🔁 **Independent Processing** — One file failure won’t stop others.  
- 📏 **Size Limits** — Large files skipped automatically.  

---

## 🎯 Ideal Use Cases

- 🤖 **AI Prompts** (ChatGPT, Claude, Copilot)  
- 🔍 **Code Reviews**  
- 🐞 **Bug Reports**  
- 📘 **Documentation**  
- 🔗 **Context Sharing** with teammates  

---

## 🧠 Why This Extension?

Copying multiple files manually is:  
❌ Time-consuming  
❌ Error-prone  
❌ Painful for AI prompts  

✅ This extension **automates everything** and delivers **clean Markdown instantly**.

---

## 🐞 Report Issues & Request Features

We ❤️ feedback!

**Found a bug?**  
👉 [Open an Issue](https://github.com/Jeseem24/copy-selected-files/issues/new)



**Have an idea?**  
👉 Open a **Feature Request** and describe:
- The problem you’re facing  
- Your proposed solution  
- (Optional) Screenshots or examples  

---

## 📦 Release Notes

### 🟢 0.0.1 – Initial Release
- Multi-file copy support  
- Markdown formatting  
- Binary file detection  
- Cancelable operation  
- User-configurable settings  

---

## 🤝 Contributing

Pull requests are welcome!  
If you plan a **major change**, open an issue first to discuss your idea.

---

## ⭐ Support

If this extension saved you time:  
⭐ **Star the repo**  
🐞 **Report bugs**  
💡 **Suggest features**

---

**Made with ❤️**