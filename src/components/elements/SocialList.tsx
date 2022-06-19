import { Box, IconButton, Tooltip, useClipboard } from '@chakra-ui/react';
import { socials } from '../../data/socials';

export const SocialList = () => {
  const { hasCopied: hasCopiedEmail, onCopy: onCopyEmail } = useClipboard(
    'germanvazquezw99@gmail.com'
  );
  const { hasCopied: hasCopiedDiscord, onCopy: onCopyDiscord } =
    useClipboard('Gercor');

  if (!socials) return null;
  return (
    <>
      {socials?.map(({ Component, name, url, copy }) => (
        <Box key={name}>
          {copy ? (
            <Tooltip
              label={
                name === 'Email'
                  ? hasCopiedEmail
                    ? 'Email Copied!'
                    : 'Copy Email'
                  : hasCopiedDiscord
                  ? 'Discord Copied!'
                  : 'Copy Discord'
              }
              closeOnClick={false}
              hasArrow
            >
              <IconButton
                mb={8}
                aria-label='email'
                variant='ghost'
                size='lg'
                fontSize='3xl'
                icon={Component}
                _hover={{
                  bg: 'secondary',
                }}
                onClick={name === 'Discord' ? onCopyDiscord : onCopyEmail}
                isRound
              />
            </Tooltip>
          ) : (
            <IconButton
              aria-label={name}
              mb={10}
              as={'a'}
              size='lg'
              fontSize={30}
              borderRadius={100}
              variant='ghost'
              _hover={{ bg: 'primary' }}
              rel='noopener noreferrer'
              target='_blank'
              href={url!}
            >
              {Component}
            </IconButton>
          )}
        </Box>
      ))}
    </>
  );
};
