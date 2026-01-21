---
layout: home

hero:
  name: Linux DevOps
  text: Learning Journey
  tagline: Comprehensive notes, tutorials, and hands-on labs for mastering Linux & DevOps
  image:
    src: https://freepngimg.com/download/logo/66632-gnu-controversy-linux-logo-naming-mint-software.png
    alt: Logo
  actions:
    - theme: brand
      text: Get Started
      link: /01-linux-fundamentals/01-the-linux-terminal
    - theme: alt
      text: View on GitHub
      link: https://github.com/v43rus/linux-devops
    - theme: alt
      text: Cheat Sheets
      link: /cheat-sheets/

features:
  - icon: 🐧
    title: Linux Fundamentals
    details: Master the terminal, file systems, permissions, and bash scripting from scratch
    link: /01-linux-fundamentals/01-the-linux-terminal
  
  - icon: 🔧
    title: System Administration (Coming Soon)
    
  - icon: 💲
    title: Basics of Bash (Coming Soon)
---

## 🎯 Learning in Public

I'm documenting my entire DevOps journey publicly to:
- Solidify understanding through teaching
- Help other learners along the way
- Build a portfolio recruiters can explore
- Create accountability for consistent progress

## ✅ Current Progress

<script setup>
import { ref } from 'vue'
const progress = ref(15) // Update this as you progress
</script>

<div style="margin: 20px 0;">
  <div style="background: #eee; border-radius: 8px; overflow: hidden;">
    <div :style="`width: ${progress}%; background: linear-gradient(90deg, #42b883 0%, #35495e 100%); padding: 8px; text-align: center; color: white; font-weight: bold;`">
      {{ progress }}% Complete
    </div>
  </div>
</div>

- ✅ Linux Terminal Fundamentals
- 🔄 File System Navigation
- ⏳ User & Permission Management (In Progress)
- ⏳ Process Management (Coming Soon)
- ⏳ Bash Scripting (Coming Soon)

## 📦 Related Projects

- [MEAP](https://github.com/v43rus/meap) - Production-grade admin platform where I apply these DevOps concepts

## 🤝 Contributing

Found an error? Have suggestions? [Open an issue](https://github.com/v43rus/linux-devops/issues) or submit a PR!