import { Container, Text, Image } from '@react-three/uikit'
import { Album } from '../data/albums'
import { ComponentPropsWithoutRef } from 'react'
import { colors } from '@/theme'

export function AlbumArtwork({
  album,
  aspectRatio = 'portrait',
  width,
  height,
  ...props
}: {
  album: Album
  aspectRatio?: 'portrait' | 'square'
} & Omit<ComponentPropsWithoutRef<typeof Container>, 'aspectRatio'>) {
  return (
    <Container gap={12} {...props}>
      <Image
        borderRadius={6}
        src={album.cover}
        width={width}
        height={height}
        fit="cover"
        aspectRatio={aspectRatio === 'portrait' ? 3 / 4 : 1}
      />
      <Container gap={4}>
        <Text fontWeight="medium" fontSize={14} lineHeight={1}>
          {album.name}
        </Text>
        <Text fontSize={12} lineHeight={1.3333} color={colors.mutedForeground}>
          {album.artist}
        </Text>
      </Container>
    </Container>
  )
}
