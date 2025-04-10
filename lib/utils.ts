import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Smoothly scrolls to an element with the specified ID
 * @param href The anchor link or element ID to scroll to
 * @param options Optional configuration for the scroll behavior
 */
export function smoothScroll(
  href: string, 
  options?: { 
    block?: ScrollLogicalPosition, 
    updateUrl?: boolean,
    onComplete?: () => void 
  }
) {
  // Extract the ID from the href
  const targetId = href.startsWith('#') ? href.substring(1) : href
  const element = document.getElementById(targetId)
  
  if (element) {
    // Default options
    const { 
      block = 'start', 
      updateUrl = true,
      onComplete 
    } = options || {}

    // Scroll to the element
    element.scrollIntoView({ 
      behavior: 'smooth',
      block
    })
    
    // Update URL if requested
    if (updateUrl) {
      window.history.pushState(null, '', `#${targetId}`)
    }

    // Call the onComplete callback after animation
    if (onComplete) {
      // Approximate scroll animation duration
      setTimeout(onComplete, 800)
    }
  }
}

/**
 * Handler for smooth scrolling from link clicks
 * @param e The mouse event from the click
 * @param href The target href to scroll to
 * @param onComplete Optional callback after scrolling completes
 */
export function handleSmoothScroll(
  e: React.MouseEvent<HTMLAnchorElement>, 
  href: string,
  onComplete?: () => void
) {
  e.preventDefault()
  smoothScroll(href, { onComplete })
}
