// Import core libraries
import React, { FC } from 'react'

// Import utils
import { classy } from '@app/utils'

// Import interfaces
import {SectionTitlePropsInterface} from '@app/interfaces/component.interfaces'

const SectionTitle: FC<SectionTitlePropsInterface> = ({ children, isCentered = false, subTitle = null }) => {
  const styles = classy([
    'font-title',
    'text-4xl',
    isCentered ? 'text-center' : '',
  ])

  return (
    <h2
      className={styles}
    >
      {
        children
      }
    </h2>
  )
}

export default SectionTitle
