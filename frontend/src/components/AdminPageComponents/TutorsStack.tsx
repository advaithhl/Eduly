import {
  ActionIcon,
  Badge,
  Button,
  Center,
  Container,
  Group,
  Loader,
  Menu,
  rem,
  Stack,
  Table,
  Text,
  Tooltip,
} from '@mantine/core';
import {
  IconBan,
  IconCheck,
  IconDots,
  IconExternalLink,
  IconX,
} from '@tabler/icons-react';
import { useQuery } from '@tanstack/react-query';
import { adminService } from '../../service';

const tutorData2 = {
  content: [
    {
      id: 234,
      type: 'profile_image',
      link: 'https://demoeduly.blob.core.windows.net/demoeduly/profile_image_20',
      status: 'PENDING_APPROVAL',
      uploadTimestamp: '',
      tutorName: 'John Adams',
      tutorId: 455,
    },
    {
      id: 235,
      type: 'intro_video',
      link: 'https://demoeduly.blob.core.windows.net/demoeduly/intro_video_20',
      status: 'PENDING_APPROVAL',
      uploadTimestamp: '',
      tutorName: 'John Adams',
      tutorId: 455,
    },
    {
      id: 236,
      type: 'cv',
      link: 'https://demoeduly.blob.core.windows.net/demoeduly/cv_20',
      status: 'PENDING_APPROVAL',
      uploadTimestamp: '',
      tutorName: 'John Adams',
      tutorId: 455,
    },
  ],
};

export function TutorsStack() {
  const {
    data: tutorData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['getTutorContent'],
    queryFn: adminService.getTutorContent,
  });

  const contentTypeColors: Record<string, string> = {
    profile_image: 'blue',
    intro_video: 'cyan',
    cv: 'pink',
  };

  return (
    <>
      {isLoading && (
        <Container>
          <Center style={{ height: 'calc(100vh - 120px)' }}>
            <Loader type='bars'></Loader>
          </Center>
        </Container>
      )}
      {isError && (
        <Container>
          <Text ta='center'>
            An error occurred while fetching tutor contents.
          </Text>
        </Container>
      )}
      {tutorData?.content.length && (
        <Table verticalSpacing='md'>
          <Table.Thead>
            <Table.Tr>
              <Table.Th ta={'center'}>Name</Table.Th>
              <Table.Th ta={'center'}>Content Type</Table.Th>
              <Table.Th ta={'center'}>Content</Table.Th>
              <Table.Th ta={'right'}>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {tutorData?.content.map((item) => (
              <Table.Tr key={item.id}>
                <Table.Td>
                  <Stack gap={'sm'}>
                    <Text fz='sm' fw={500}>
                      {item.tutorName}
                    </Text>
                    <Text c='dimmed' fz='xs'>
                      #{item.tutorId}
                    </Text>
                  </Stack>
                </Table.Td>

                <Table.Td>
                  <Center>
                    <Badge color={contentTypeColors[item.type]} variant='light'>
                      {item.type.replace('_', ' ')}
                    </Badge>
                  </Center>
                </Table.Td>

                <Table.Td>
                  <Center>
                    <Button
                      size='xs'
                      radius={'xl'}
                      variant={'light'}
                      component={'a'}
                      target='_blank'
                      href={item.link}
                      rightSection={<IconExternalLink size={14} />}
                    >
                      View
                    </Button>
                  </Center>
                </Table.Td>

                <Table.Td>
                  <Group gap={10} justify='flex-end'>
                    <Tooltip
                      label={'Approve'}
                      transitionProps={{ transition: 'scale', duration: 300 }}
                    >
                      <ActionIcon variant='subtle' color='green'>
                        <IconCheck stroke={1.5} />
                      </ActionIcon>
                    </Tooltip>
                    <Menu
                      transitionProps={{ transition: 'scale-y' }}
                      withArrow
                      position='bottom-end'
                      withinPortal
                    >
                      <Menu.Target>
                        <ActionIcon variant='subtle' color='gray'>
                          <IconDots stroke={1.5} />
                        </ActionIcon>
                      </Menu.Target>
                      <Menu.Dropdown>
                        <Menu.Item
                          leftSection={
                            <IconX
                              style={{ width: rem(16), height: rem(16) }}
                              stroke={1.5}
                            />
                          }
                        >
                          Reject
                        </Menu.Item>
                        <Menu.Item
                          leftSection={
                            <IconBan
                              style={{ width: rem(16), height: rem(16) }}
                              stroke={1.5}
                            />
                          }
                          color='red'
                        >
                          Ban tutor
                        </Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      )}
    </>
  );
}
