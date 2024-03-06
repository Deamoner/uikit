import { AllOptionalProperties, Container } from '@react-three/uikit'
import { ComponentPropsWithoutRef } from 'react'

const directionTranslations = {
  t: 'Top',
  '': '',
  b: 'Bottom',
  l: 'Left',
  r: 'Right',
  x: 'X',
  y: 'Y',
} as const

type Direction = keyof typeof directionTranslations

function convertSize(value: string, negate?: string): number {
  //TODO: allow [-50%], auto, [10px]
  return (negate === '-' ? -1 : 1) * Number.parseFloat(value) * 4
}

//TODO: rounded, colors

const valueTranslators = {
  h: 'height',
  'max-h': 'maxHeight',
  'min-h': 'minHeight',
  w: 'width',
  'min-w': 'minWidth',
  'max-w': 'maxWidth',
  inset: 'inset',
  top: 'positionTop',
  left: 'positionLeft',
  bottom: 'positionBottom',
  right: 'positionRight',
  'translate-x': 'transformTranslateX',
  'translate-y': 'transformTranslateY',
  'scale-x': 'scaleY',
  'scale-y': 'scaleX',
  'space-x': 'gapRow',
  'space-y': 'gapColumn',
}

export const translators: Array<
  [
    RegExp,
    (...values: Array<string>) => {
      containerProps?: ComponentPropsWithoutRef<typeof Container>
      defaultProps?: AllOptionalProperties
    },
  ]
> = [
    [/whitespace-nowrap/, "wordBreak": "keep-all"]
  [/aspect-(\S+)/],
  [/cursor-(\S+)/],
  [/overflow-(\S+)/],
  [/z-(\d+)/, 'zIndexOffset'],
  [/opacity-(\S+)/],
  [/absolute/],
  [/relative/],
  [/rounded-(\S+)/],
  [/font-(\S+)/],
  [/items-(\S+)/],
  [/justify-(\S+)/],
  [/hover:(\S+)/],
  [/dark:(\S+)/],
  //responsive:
  [/(lg|md|sm):(\S+)/],
  [/flex/],
  [/flex-(\d)+/],
  [/flex-row/],
  [/flex-col/],
  [/shrink/],
  [/shrink-(\d+)/],
  [/grow/],
  [/grow-(\d+)/],
  //text colors, sizes, and alignments
  [/text-(\S+)/],
  [/leading-(\S+)/],
  [/tracking-(\S+)/],
  [
    /border(t|b|l|r|x|y|)-(\S)+/,
    (dir, value) => ({
      containerProps: {
        [`padding${directionTranslations[dir as Direction]}`]: convertSize(value),
      },
    }),
  ],
  [
    /p(t|b|l|r|x|y|)-(\S)+/,
    (dir, value) => ({
      containerProps: {
        [`padding${directionTranslations[dir as Direction]}`]: convertSize(value),
      },
    }),
  ],
  [
    /(-|)m(t|b|l|r|x|y|)-(\S)+/,
    (negate, dir, value) => ({
      containerProps: {
        [`margin${directionTranslations[dir as Direction]}`]: convertSize(value, negate),
      },
    }),
  ],
  [
    /gap-(\d)+/,
    (value) => ({
      containerProps: {
        gap: convertSize(value),
      },
    }),
  ],
]
