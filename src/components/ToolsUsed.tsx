import * as React from 'react';
import {
  Text,
  Box,
  Stack,
  VStack,
  Heading,
  SimpleGrid,
  GridItem,
} from '@chakra-ui/react';
import { AtilaProgress } from '.';

const ToolsUsed: React.FC = () => {
  return (
    <Box pt={40}>
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
            <Heading size='lg' as='h1' textAlign={'center'}>
              Herramientas que uso:
            </Heading>
          </Stack>

          <Box textAlign={'center'} py={[10, 20, 30]}>
            <SimpleGrid columns={2} columnGap={2} rowGap={2} w={'full'}>
              <GridItem colSpan={2}>
                <AtilaProgress
                  label='JavaScript'
                  percentage={85}
                  color='yellow.500'
                />
                <AtilaProgress
                  label='TypeScript'
                  percentage={65}
                  color='blue.500'
                />
                <AtilaProgress
                  label='ReactJS'
                  percentage={80}
                  color='blue.300'
                />
                <AtilaProgress
                  label='React Native'
                  percentage={80}
                  color='blue.300'
                />
                <AtilaProgress
                  label='Expo'
                  percentage={90}
                  color='purple.500'
                />
                <AtilaProgress
                  label='RN Paper'
                  percentage={85}
                  color='purple.700'
                />
                <AtilaProgress
                  label='RN Elements'
                  percentage={85}
                  color='cyan.400'
                />
                <AtilaProgress
                  label='NativeBase'
                  percentage={70}
                  color='cyan.800'
                />
                <AtilaProgress
                  label='Chakra'
                  percentage={85}
                  color='green.400'
                />
                <AtilaProgress
                  label='Firebase'
                  percentage={90}
                  color='orange.300'
                />
                <AtilaProgress label='Git' percentage={75} color='red.400' />
                <AtilaProgress
                  label='Node.js'
                  percentage={47}
                  color='green.400'
                />
                <AtilaProgress
                  label='Next.js'
                  percentage={60}
                  color='gray.400'
                />
                <AtilaProgress
                  label='Vue.js'
                  percentage={65}
                  color='green.600'
                />
                <AtilaProgress
                  label='Quasar'
                  percentage={75}
                  color='cyan.600'
                />
                <AtilaProgress
                  label='Meteor.js'
                  percentage={60}
                  color='red.600'
                />
                <AtilaProgress
                  label='HTML'
                  percentage={100}
                  color='orange.300'
                />
                <AtilaProgress label='CSS' percentage={60} color='cyan.700' />
                <AtilaProgress
                  label='SwiftUI'
                  percentage={30}
                  color='blue.400'
                />
                <AtilaProgress
                  label='Comunicación'
                  percentage={100}
                  color='purple.300'
                />
                <AtilaProgress
                  label='Trab. en Equipo'
                  percentage={100}
                  color='purple.300'
                />
                <AtilaProgress
                  label='Cordialidad'
                  percentage={100}
                  color='purple.300'
                />
                <AtilaProgress
                  label='Iniciativa'
                  percentage={100}
                  color='purple.300'
                />
                <AtilaProgress
                  label='Proactividad'
                  percentage={100}
                  color='purple.300'
                />
                <AtilaProgress
                  label='Google 😅'
                  percentage={100}
                  color='green.500'
                />
                <AtilaProgress
                  label='Español'
                  percentage={100}
                  color='cyan.500'
                />
                <AtilaProgress label='Inglés' percentage={65} color='red.400' />
              </GridItem>
            </SimpleGrid>
          </Box>
        </VStack>
      </Stack>
    </Box>
  );
};

export default ToolsUsed;
