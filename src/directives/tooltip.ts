/**
 * The directive is used to display a tooltip next to elements when they are hovered. The directionn and margin can be configured.
 * The value of the directive must be of type string (then the value is used as the tooltips text) or of type {@link TooltipOptions}.
 */

import type { DirectiveBinding, App } from 'vue'
import colors from 'tailwindcss/colors'

export type TooltipOptions = {
  text: string
  direction: 'left' | 'up' | 'right' | 'down'
  /** in pixels */
  margin: number
}

const tooltipDirective = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const tooltipOptions: TooltipOptions = typeof binding.value === 'string'
      ? { text: binding.value, direction: 'up', margin: 5 }
      : binding.value as TooltipOptions

    let tooltip: HTMLElement | null = null

    el.addEventListener('mouseenter', () => {
      tooltip = createTooltipElement(tooltipOptions.text)
      positionTooltip(el, tooltip, tooltipOptions)
      document.body.appendChild(tooltip)
    })

    // remove tooltip when element is not hovered
    el.addEventListener('mouseleave', () => tooltip?.parentNode?.removeChild(tooltip))

    el.addEventListener('mousemove', () => {
      if (tooltip) {
        positionTooltip(el, tooltip, tooltipOptions)
      }
    })
  }
}

function createTooltipElement(text: string): HTMLElement {
  const tooltip = document.createElement('h5')
  const tooltipStyle = tooltip.style
  tooltip.textContent = text
  tooltipStyle.height = 'fit-content'
  tooltipStyle.position = 'fixed'
  tooltipStyle.pointerEvents = 'none'
  tooltipStyle.color = colors.white
  tooltipStyle.background = colors.gray[800]
  tooltipStyle.paddingTop = '2px'
  tooltipStyle.paddingBottom = '2px'
  tooltipStyle.paddingLeft = '6px'
  tooltipStyle.paddingRight = '6px'
  tooltipStyle.borderRadius = '6px'
  tooltipStyle.borderWidth = '1px'
  tooltipStyle.borderColor = colors.gray[700]
  return tooltip
}

function positionTooltip(target: HTMLElement, tooltip: HTMLElement | null, options: TooltipOptions) {
  if (tooltip) {
    const targetRect = target.getBoundingClientRect()
    const tooltipRect = tooltip.getBoundingClientRect()

    let bottom = 0
    let left = 0
    let top = 0

    switch (options.direction) {
      case 'up':
        bottom = window.innerHeight - targetRect.top + options.margin
        left = targetRect.left + targetRect.width / 2 - tooltipRect.width / 2
        break
      case 'down':
        top = targetRect.bottom + options.margin
        left = targetRect.left + targetRect.width / 2 - tooltipRect.width / 2
        break
      case 'right':
        top = targetRect.top + (targetRect.height / 2 - (tooltipRect.height / 2))
        left = targetRect.right + options.margin
        break
      case 'left':
        top = targetRect.top + (targetRect.height / 2 - (tooltipRect.height / 2))
        left = targetRect.left - options.margin
        break
    }

    if (bottom) tooltip.style.bottom = `${bottom}px`
    if (left) tooltip.style.left = `${left}px`
    if (top) tooltip.style.top = `${top}px`
  }
}

export default {
  install(app: App) {
    app.directive('tooltip', tooltipDirective)
  }
}
