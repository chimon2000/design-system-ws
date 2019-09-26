import React from 'react'
import useCustomElement from 'use-custom-element'
import { JSX as LocalJSX } from '@ds/components/loader'

type ButtonProps = { children?: React.ReactNode } & LocalJSX.DsButton

function Button({ children, ...rest }: ButtonProps) {
  const [customElementProps, ref] = useCustomElement(rest)
  return (
    <ds-button {...customElementProps} ref={ref}>
      {children}
    </ds-button>
  )
}

export default Button
