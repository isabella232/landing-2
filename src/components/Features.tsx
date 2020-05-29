import React from 'react';

import { Box, Media, Heading, Icon, Text, Flex, Section } from '@components';

const Features = () => {
  return (
    <Section
      type="landing"
      alignItems="center"
      color="accent"
      pt={{ _: '40px', lg: '80px' }}
      pb={{ _: '40px', lg: '140px' }}
    >
      <Heading textAlign="center" width={{ _: '90%', lg: 'auto' }}>
        Managing and storing your assets has never been easier.
      </Heading>
      <Text
        textAlign="center"
        variant="subHeading"
        color="accent"
        my={{ _: '15px', lg: '0' }}
        width={{ _: '90%', lg: 'auto' }}
      >
        The MyCrypto apps put your safety & security first.
      </Text>
      <Flex
        flexDirection={{ _: 'column', lg: 'row' }}
        justifyContent={{ _: 'center', lg: 'space-between' }}
        alignItems={{ _: 'center', lg: 'flex-start' }}
        my={{ _: '20px', lg: '65px' }}
        width="100%"
      >
        <Box
          width={{ _: '90%', lg: 1 / 3 }}
          mt={{ _: '0', lg: '120px' }}
          mb="20px"
        >
          <Heading textAlign={{ _: 'center', lg: 'inherit' }}>
            Manage Your Wallets
          </Heading>
          <Text
            textAlign={{ _: 'center', lg: 'inherit' }}
            variant="largeBase"
            color="accent"
            my={{ _: '15px', lg: '0' }}
          >
            MyCrypto allows you to create, import, and manage all the wallets
            you'll ever need.
          </Text>
        </Box>
        <Box width={{ _: '100%', lg: 2 / 3 }}>
          <Media type="desktop">
            <Icon name="manageYourWallets" width="100%" />
          </Media>
          <Media type="mobile">
            <Icon name="manageYourWalletsMobile" width="100%" />
          </Media>
        </Box>
      </Flex>
      <Flex
        flexDirection={{ _: 'column-reverse', lg: 'row' }}
        justifyContent={{ _: 'center', lg: 'space-between' }}
        alignItems={{ _: 'center', lg: 'flex-start' }}
        my={{ _: '20px', lg: '65px' }}
        mb="20px"
        width="100%"
      >
        <Box width={{ _: '100%', lg: 3 / 4 }}>
          <Media type="desktop">
            <Icon name="dashboard" width="100%" />
          </Media>
          <Media type="mobile">
            <Icon name="dashboardMobile" width="100%" />
          </Media>
        </Box>
        <Box
          width={{ _: '90%', lg: 1 / 4 }}
          mt={{ _: '0', lg: '150px' }}
          mb="20px"
        >
          <Heading textAlign={{ _: 'center', lg: 'right' }}>
            View Your Dashboard
          </Heading>
          <Text
            textAlign={{ _: 'center', lg: 'right' }}
            variant="largeBase"
            color="accent"
            my={{ _: '15px', lg: '0' }}
          >
            See a detailed breakdown of all your wallets, tokens, and
            transactions.
          </Text>
        </Box>
      </Flex>
      <Flex
        flexDirection={{ _: 'column', lg: 'row' }}
        justifyContent={{ _: 'center', lg: 'space-between' }}
        alignItems={{ _: 'center', lg: 'flex-start' }}
        my={{ _: '20px', lg: '65px' }}
        width="100%"
      >
        <Box
          width={{ _: '90%', lg: 1 / 3 }}
          mt={{ _: '0', lg: '280px' }}
          mb="20px"
        >
          <Heading textAlign={{ _: 'center', lg: 'inherit' }}>
            Control Your Crypto
          </Heading>
          <Text
            textAlign={{ _: 'center', lg: 'inherit' }}
            variant="largeBase"
            color="accent"
            my={{ _: '15px', lg: '0' }}
          >
            Manage your information and your cryptocurrency easily and without
            fear.
          </Text>
        </Box>
        <Box width={{ _: '100%', lg: 2 / 3 }}>
          <Media type="desktop">
            <Icon name="controlCrypto" width="80%" />
          </Media>
          <Media type="mobile">
            <Icon name="controlCryptoMobile" width="100%" />
          </Media>
        </Box>
      </Flex>
    </Section>
  );
};

export default Features;
