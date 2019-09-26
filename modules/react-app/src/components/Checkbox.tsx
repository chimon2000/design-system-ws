import React from 'react'

import useCustomElement from 'use-custom-element'
import { JSX as LocalJSX } from '@ds/components/loader'

type CheckboxProps = { children?: React.ReactNode } & LocalJSX.DsCheckbox

function Checkbox({ children, ...rest }: CheckboxProps) {
  const [customElementProps, ref] = useCustomElement(rest)

  return <ds-checkbox {...customElementProps} ref={ref}></ds-checkbox>
}

export default Checkbox
