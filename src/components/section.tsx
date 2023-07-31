// Import core libraries
import React, { FC } from 'react'

// Import interfaces
import {SectionPropsInterface} from '@app/interfaces/component.interfaces'

const Section: FC<SectionPropsInterface> = ({children, styles = null, fluid = false}) => {
  return (
    <section className={'container'}></section>
  )
}

export default Section
