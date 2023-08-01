// Import core libraries
import React, { FC } from 'react'

// Import utils
import { classy } from '@app/utils'

// Import interfaces
import {SectionPropsInterface} from '@app/interfaces/component.interfaces'

const Section: FC<SectionPropsInterface> = ({children, styles = null, fluid = false}) => {
  const stylesClasses = classy([
    'container mx-auto',
    'py-14',
    styles ? styles : '',
  ])

  return (
    <section className={stylesClasses}>
      {
        children
      }
    </section>
  )
}

export default Section
