// Import core libraries
import { ReactNode } from 'react'

// Section
export interface SectionPropsInterface {
  children: ReactNode
  styles?: string | null
  fluid?: boolean
}

// Section title
export interface SectionTitlePropsInterface {
  children: ReactNode
  isCentered?: boolean
  subTitle?: string | null
}
