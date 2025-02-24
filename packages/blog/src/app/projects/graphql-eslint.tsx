import { FC } from 'react'

export const GraphQLESLintLogo: FC<{ className?: string }> = ({
  className = ''
}) => {
  return (
    <div
      role="presentation"
      className={[
        'inline-flex size-8 items-center justify-center rounded bg-current text-xs font-medium',
        className
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span role="img" className="text-white dark:text-black">
        ESL
      </span>
    </div>
  )
}
