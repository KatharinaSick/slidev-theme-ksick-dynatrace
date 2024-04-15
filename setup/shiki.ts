import { defineShikiSetup } from '@slidev/types'
import catppuccinMocha from 'tm-themes/themes/catppuccin-mocha.json'

export default defineShikiSetup(() => {
  return {
    themes: {
      theme: catppuccinMocha
    },
  }
})