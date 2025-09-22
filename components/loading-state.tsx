"use client"

import { useState, useEffect } from 'react'
import React from 'react'
import { Loader2 } from 'lucide-react'

interface LoadingStateProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function LoadingState({ children, fallback }: LoadingStateProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoaded) {
    return fallback || (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return <>{children}</>
}

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
}

export function SectionWrapper({ children, className = "" }: SectionWrapperProps) {
  return (
    <LoadingState
      fallback={
        <section className={`py-20 ${className}`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center py-20">
              <div className="space-y-4 text-center">
                <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mx-auto"></div>
                <div className="h-4 w-96 bg-gray-200 rounded animate-pulse mx-auto"></div>
                <div className="h-4 w-80 bg-gray-200 rounded animate-pulse mx-auto"></div>
              </div>
            </div>
          </div>
        </section>
      }
    >
      <section className={`py-20 ${className}`}>
        <div className="container mx-auto px-4">
          {children}
        </div>
      </section>
    </LoadingState>
  )
}

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Oops! Terjadi Kesalahan
            </h2>
            <p className="text-gray-600 mb-6">
              Mohon maaf, terjadi kesalahan saat memuat konten ini. Silakan refresh halaman atau hubungi kami.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Refresh Halaman
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}