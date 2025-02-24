import { FC } from 'react'

export const GraphQLESLintLogo: FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      role="presentation"
      className={["bg-current inline-flex items-center justify-center size-8 rounded text-xs font-medium", className].filter(Boolean).join(' ')}
    >
      <span
        role="img"
        className="text-white dark:text-black"
      >
        ESL
      </span>
    </div>
  )
}
