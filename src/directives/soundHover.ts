/**
 * The directive is used to play a sound when an element is hovered.
 * The value of the directive must be the sound-file-name, the file must be placed in the ```src/public/audio``` folder.
 * If no file extension is specified, mp3 will be asserted.
 */

import type { DirectiveBinding, App } from 'vue'

const soundHoverDirective = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    let soundName: string = binding.value as string

    if (!soundName.includes('.'))
      soundName = soundName + '.mp3'

    el.addEventListener('mouseenter', () => {
      const audio = new Audio(`/audio/${soundName}`)
      audio.play()
    })
  }
}

export default {
  install(app: App) {
    app.directive('sound-hover', soundHoverDirective)
  }
}
