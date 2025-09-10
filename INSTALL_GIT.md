# 🔧 CARA INSTALL GIT DI WINDOWS

## 🚀 METODE 1: DOWNLOAD MANUAL (RECOMMENDED)

### Langkah-langkah:
1. **Buka browser** dan kunjungi: https://git-scm.com/download/win
2. **Download** "Git for Windows" (file .exe)
3. **Run installer** dengan default settings
4. **Restart** Command Prompt/PowerShell
5. **Test** dengan command: `git --version`

## 🚀 METODE 2: VIA CHOCOLATEY (Jika sudah ada)

```bash
# Install Chocolatey dulu (jika belum ada)
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# Install Git
choco install git
```

## 🚀 METODE 3: VIA WINGET (Windows 10/11)

```bash
# Install Git via winget
winget install --id Git.Git -e --source winget
```

## ✅ VERIFIKASI INSTALASI

Setelah install, test dengan:
```bash
git --version
```

## 🎯 SETELAH GIT TERINSTALL

### Konfigurasi Git:
```bash
# Set nama dan email
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Upload ke GitHub:
```bash
# Initialize repository
git init

# Add files
git add .

# Commit
git commit -m "Initial commit: Who Does What Game"

# Buat repository di GitHub.com
# Add remote & push
git remote add origin https://github.com/USERNAME/who-does-what-game.git
git branch -M main
git push -u origin main
```

---

**🎯 REKOMENDASI: Gunakan Metode 1 (Download Manual) untuk hasil terbaik!**
