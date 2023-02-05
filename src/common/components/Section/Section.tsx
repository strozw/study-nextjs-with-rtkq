import { clsx } from 'clsx'
import { ReactNode, useId } from 'react'

import * as style from './Section.css'

export type SectionProps = {
  hideTitle?: boolean
  className?: string
  title: ReactNode
  children: ReactNode
}

export const Section = ({ hideTitle = false, className, title, children }: SectionProps) => {
  const headingId = useId()

  return (
    <section
      className={clsx(style.wrapper, className)}
      aria-label={hideTitle && typeof title === 'string' ? title : void 0}
      aria-labelledby={headingId}
    >
      {!hideTitle ? (
        <h2 className={style.heading} id={headingId}>
          {title}
        </h2>
      ) : (
        void 0
      )}

      <div className={style.body}>{children}</div>
    </section>
  )
}
