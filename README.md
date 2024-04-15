# slidev-theme-ksick-dynatrace

[![NPM version](https://img.shields.io/npm/v/slidev-theme-ksick-dynatrace?color=3AB9D4&label=)](https://www.npmjs.com/package/slidev-theme-ksick-dynatrace)

My personal Dynatrace theme for [Slidev](https://github.com/slidevjs/slidev).

I'm not a frontend dev and this theme is far from perfect, but it serves my needs until now. I'm sure I'll have to
adjust and improve it for future presentations.

<!--
  Put some screenshots here to demonstrate your theme

  Live demo: [...]
-->

## Install

Add the following frontmatter to your `slides.md`. Start Slidev then it will prompt you to install the theme
automatically.

<pre><code>---
theme: <b>ksick-dynatrace</b>
---</code></pre>

Learn more about [how to use a theme](https://sli.dev/themes/use).

## Layouts

### Common properties

By default, any layout will contain a footer expecting the following properties. I recommend settings these props
globally.

```
---
defaults:
  eventName: Slidev Theme Demo
  eventDate: September 10, 2023
---
```

The footer will then look like this:

![Footer](https://raw.githubusercontent.com/KatharinaSick/slidev-theme-ksick-dynatrace/main/screenshots/footer.png)

### Speaker `speaker`

Shows information about the speaker.

#### Properties

- `image`: URL to the speaker image
- `speaker`: The name of the speaker
- `jobTitle`: The job title of the speaker
- `website`: The website of the speaker

#### Usage

```
---
layout: about
image: 'https://ksick.dev/resources/pictures/me/drawings/headphones.png'
speaker: Katharina Sick
jobTitle: Senior Software Engineer
website: ksick.dev
---
```

#### Screenshots

| Dark                                                                                                              | Light             |
|-------------------------------------------------------------------------------------------------------------------|-------------------|
| ![About](https://raw.githubusercontent.com/KatharinaSick/slidev-theme-ksick-dynatrace/main/screenshots/about.png) | Not yet supported |

### Center `center`

Displays the given information in the center of the slide.

#### Usage

```
---
layout: center
---
```

#### Screenshots

| Dark                                                                                                                | Light             |
|---------------------------------------------------------------------------------------------------------------------|-------------------|
| ![Center](https://raw.githubusercontent.com/KatharinaSick/slidev-theme-ksick-dynatrace/main/screenshots/center.png) | Not yet supported |

### Cover `cover`

Shows a cover slide that contains the presentation title, subtitle and speaker information if available.

#### Properties

- `speaker` (optional): The name of the speaker
- `jobTitle` (optional): The job title of the speaker

#### Usage

```
---
layout: cover
speaker: Katharina Sick
jobTitle: Senior Software Engineer
---
```

#### Screenshots

| Dark                                                                                                              | Light             |
|-------------------------------------------------------------------------------------------------------------------|-------------------|
| ![Cover](https://raw.githubusercontent.com/KatharinaSick/slidev-theme-ksick-dynatrace/main/screenshots/cover.png) | Not yet supported |

### Image Center `image-center`

Shows an image in the center of the slide

#### Properties

- `image`: The image to display

#### Usage

```
---
layout: image-center
image: 'https://source.unsplash.com/collection/94734566/1920x1080'
---
```

#### Screenshots

| Dark                                                                                                                            | Light             |
|---------------------------------------------------------------------------------------------------------------------------------|-------------------|
| ![Image Center](https://raw.githubusercontent.com/KatharinaSick/slidev-theme-ksick-dynatrace/main/screenshots/image-center.png) | Not yet supported |

### Outro Image `outro-speaker`

Shows an outro slide that includes information about the speaker.

#### Properties

- `image`: URL to the speaker image
- `speaker`: The name of the speaker
- `website`: The website of the speaker

#### Usage

```
---
layout: outro-speaker
image: 'https://ksick.dev/resources/pictures/me/drawings/headphones.png'
speaker: Katharina Sick
website: ksick.dev
---
```

#### Screenshots

| Dark                                                                                                                              | Light             |
|-----------------------------------------------------------------------------------------------------------------------------------|-------------------|
| ![Outro Speaker](https://raw.githubusercontent.com/KatharinaSick/slidev-theme-ksick-dynatrace/main/screenshots/outro-speaker.png) | Not yet supported |

## Components

### Footer

The `Footer` component is automatically added to all Slides and shows information about the event, a Dynatrace logo and
the slide number.

## Contributing

- `npm install`
- `npm run dev` to start theme preview of `example.md`
- Edit the `example.md` and style to see the changes
- `npm run export` to generate the preview PDF
- `npm run screenshot` to generate the preview PNG
