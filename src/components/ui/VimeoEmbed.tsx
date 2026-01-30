import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface VimeoEmbedProps {
  videoId: string
  hash?: string
  title?: string
  className?: string
  mode?: 'click-to-play' | 'ambient'
  caption?: string
}

export function VimeoEmbed({ 
  videoId, 
  hash, 
  title = "Video", 
  className = "", 
  mode = 'click-to-play',
  caption
}: VimeoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(mode === 'ambient')
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "200px" })
  
  // Construct src
  const baseUrl = `https://player.vimeo.com/video/${videoId}`
  const params = new URLSearchParams()
  if (hash) params.append('h', hash)
  
  if (mode === 'ambient') {
    params.append('autoplay', '1')
    params.append('loop', '1')
    params.append('muted', '1')
    params.append('background', '1')
    params.append('autopause', '0')
  } else {
    // Click to play parameters
    params.append('autoplay', isPlaying ? '1' : '0')
    params.append('dnt', '1') // Do not track
  }

  const src = `${baseUrl}?${params.toString()}`

  // Handle reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches && mode === 'ambient') {
      setIsPlaying(false) // Disable autoplay for reduced motion
    }
  }, [mode])

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <div 
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-xl bg-black/20 ring-1 ring-white/10 shadow-2xl"
        style={{ aspectRatio: '16/9' }}
      >
        {isInView && (
          <>
            {/* Thumbnail/Placeholder (optional overlay before interaction) */}
            {!isPlaying && mode === 'click-to-play' && (
              <div 
                className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-colors cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg group-hover:bg-white/20 transition-all"
                >
                  <svg className="w-6 h-6 text-white fill-current ml-1" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.div>
              </div>
            )}

            <iframe
              src={isPlaying || mode === 'ambient' ? src : undefined}
              title={title}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              loading="lazy"
              onLoad={() => setIsLoaded(true)}
            />
            
            {/* Loading skeleton */}
            {!isLoaded && (
              <div className="absolute inset-0 bg-white/5 animate-pulse" />
            )}
          </>
        )}
      </div>
      
      {caption && (
        <p className="text-sm text-[var(--color-text-muted)] text-center px-4 leading-relaxed">
          {caption}
        </p>
      )}
    </div>
  )
}
