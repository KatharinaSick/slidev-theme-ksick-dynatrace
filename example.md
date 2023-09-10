---
theme: ./
title: Slidev Theme ksick-dynatrace
defaults:
  eventName: Slidev Theme Demo
  eventDate: September 10, 2023
speaker: Katharina Sick
jobTitle: Senior Software Engineer
---

# Slidev Theme: ksick-dynatrace

My Personal Dynatrace Theme for Slidev

---
layout: about
image: 'https://ksick.dev/resources/pictures/me/drawings/headphones.png'
speaker: Katharina Sick
jobTitle: Senior Software Engineer
website: ksick.dev
---

---
layout: center
---

# Center

This is a `center` slide

---
layout: custom
---

# Custom

This is a `custom` slide

<span style="position: absolute; left: 200px; top: 200px">🏗️</span>

---
layout: image-center
image: 'https://source.unsplash.com/collection/94734566/1920x1080'
---

---

# Code

Use code snippets and get the highlighting directly!

```ts
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}
```

---
layout: outro-speaker
image: 'https://ksick.dev/resources/pictures/me/drawings/headphones.png'
speaker: Katharina Sick
website: ksick.dev
---
