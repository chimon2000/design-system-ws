/* eslint-disable */

import { defineCustomElements, JSX as LocalJSX } from '@ds/components/loader'
import { HTMLAttributes } from 'react'

type StencilToReact<T> = {
    [P in keyof T]?: T[P] &
        Omit<HTMLAttributes<Element>, 'className'> & {
            class?: string
        }
}

declare global {
    export namespace JSX {
        interface IntrinsicElements extends StencilToReact<LocalJSX.IntrinsicElements> {}
    }
}

defineCustomElements(window)
