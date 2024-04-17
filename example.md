---
theme: ./
title: Slidev Theme ksick-dynatrace
defaults:
  eventName: Slidev Theme Demo
  eventDate: September 10, 2023
speaker: Katharina Sick
---

# Slidev Theme: ksick-dynatrace

My Personal Dynatrace Theme for Slidev

---
layout: speaker
image: 'https://raw.githubusercontent.com/KatharinaSick/PresentationMaterials/main/About/Headphones.jpg'
speaker: Katharina Sick
description: Senior Software Engineer at Dynatrace
website: ksick.dev
---

---
layout: center
---

# Center

This is a `center` slide

---
layout: image-full
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
layout: two-cols
---

# Left

This shows on the left

- Item 1
- Item 2
- Item 3

::right::

# Right

This shows on the right

1. Item 1
2. Item 2
3. Item 3

---
layout: two-cols-header
---

# This spans both

::left::

# Left

This shows on the left

::right::

# Right

This shows on the right

---
layout: outro-speaker
image: 'https://raw.githubusercontent.com/KatharinaSick/PresentationMaterials/main/About/Headphones.jpg'
speaker: Katharina Sick
website: ksick.dev
---
