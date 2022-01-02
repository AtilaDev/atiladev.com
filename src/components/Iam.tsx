import { Text, Box, Stack, VStack, Heading } from '@chakra-ui/react';
import ExternalLink from './ExternalLink';

const Iam = () => {
  return (
    <Box pt={20}>
      <Stack
        alignItems='center'
        spacing={12}
        w='full'
        direction={{ base: 'column-reverse', md: 'row' }}
        as='section'
      >
        <VStack spacing={3} alignItems='flex-start' w='full'>
          <Stack
            spacing={3}
            w='full'
            direction={{ base: 'column', md: 'row' }}
            justifyContent={{ base: 'center', md: 'flex-start' }}
            alignItems='center'
          >
            <Heading size='lg' as='h1'>
              ¡Hola, soy Leandro!
            </Heading>
          </Stack>

          <Text lineHeight='175%' as='h2' fontSize='lg'>
            Soy Desarrollador de Software. Actualmente trabajo para{' '}
            <ExternalLink href='http://www.atiladev.com'>AtilaDev</ExternalLink>{' '}
            como <strong>React Native Developer Freelance</strong>.
          </Text>

          <Text lineHeight='175%' as='h2' fontSize='lg'>
            Me dedico al desarrollo de software desde el año 2017. He trabajado
            en varias empresas, entre las cuales se encuentran:
          </Text>

          <Text lineHeight='175%' as='h2' fontSize='lg'>
            <ExternalLink href='https://pabloheinig.com/'>
              - Pablo Heinig
            </ExternalLink>
            : Desarrollé 11 apps móviles pertenecientes al programa Exponential
            Apps.
          </Text>

          <Text lineHeight='175%' as='h2' fontSize='lg'>
            <ExternalLink href='https://www.tecnofarma.cl/'>
              - TECNOFARMA
            </ExternalLink>
            : Desarrollé la aplicación Agenda ELFE para el programa Exponential
            Learning for Excellence.
          </Text>

          <Text lineHeight='175%' as='h2' fontSize='lg'>
            <ExternalLink href='https://simtlix.com/'>- SimTLiX</ExternalLink>:
            Estuve trabajando en el equipo de{' '}
            <ExternalLink href='https://www.avaya.com/en/'>Avaya</ExternalLink>{' '}
            Spaces.
          </Text>

          <Text lineHeight='175%' as='h2' fontSize='lg'>
            <ExternalLink href='https://www.naranjax.com/'>
              - NaranjaX
            </ExternalLink>
            : Desarrollé una prueba de concepto en 12 días usando{' '}
            <ExternalLink href='https://developer.apple.com/xcode/swiftui/'>
              SwiftUI
            </ExternalLink>
            , framework que la empresa NaranjaX usará en los nuevos desarrollos.
            Hicimos una presentación de ésta PoC en el Google Development Group
            Córdoba. Link en Youtube:{' '}
            <ExternalLink href='https://youtu.be/3X1e1DZ7LB4?t=852'>
              Declarative UI Framework: Swift UI
            </ExternalLink>
            .
          </Text>

          <Text lineHeight='175%' as='h2' fontSize='lg'>
            También me gusta colaborar con la comunidad Open-Source. Algunas
            herramientas que he desarrollado:
          </Text>

          <Text lineHeight='175%' as='h2' fontSize='lg'>
            <ExternalLink href='https://icons.expo.fyi/'>- Icons</ExternalLink>:
            Utilidad que desarrollé para colaborar el Framework{' '}
            <ExternalLink href='https://expo.dev/'>Expo</ExternalLink>. Contiene
            filtros y atajos por teclado, facilitando el manejo de la utilidad.
          </Text>

          <Text lineHeight='175%' as='h2' fontSize='lg'>
            <ExternalLink href='https://directory.now.sh/'>
              - Directory
            </ExternalLink>
            : Utilidad que desarrollé para buscar Google Fonts usando la
            libreria{' '}
            <ExternalLink href='https://github.com/expo/google-fonts'>
              @expo-google-fonts
            </ExternalLink>
            . Contiene atajos por teclado y accesos fáciles para copiar el
            instalador exacto de cada font seleccionada.
          </Text>

          <Text lineHeight='175%' as='h2' fontSize='lg'>
            Me encanta viajar, conocer gente, aprender y compartir ideas. Si
            estás interesado en trabajar conmigo o simplemente conversar, ¡no
            dudes en contactarme!
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Iam;
