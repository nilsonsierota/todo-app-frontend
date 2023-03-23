import { Button, Input, List, Row, Text, Column, Logo } from 'components';
import { useState } from 'react';

export const Home = () => {
  const [taskName, setTaskName] = useState('');
  const [tasks, setTasks] = useState<{ label: string }[]>([]);

  const handleOkButton = () => {
    if (!taskName) return;

    setTasks((previous) => {
      const copy = [...previous];
      copy.push({ label: taskName });
      return copy;
    });

    setTaskName('');
  };

  return (
    <Column width="600px" margin="0 auto">
      <Column width="100%" alignItems="center" py="25px">
        <Logo />
      </Column>

      <Column
        width="100%"
        minHeight="300px"
        padding="20px"
        bg="rgba(255,255,255,0.2)"
        borderRadius="4px"
        alignItems="center"
      >
        <Text fontFamily="secondary" fontSize="bodyExtraLarge">
          Ready
        </Text>

        <Text fontFamily="secondary" fontSize="displayExtraLarge" fontWeight="bold" padding="30px">
          25:00
        </Text>

        <Button variant="primary">
          <Text fontFamily="secondary" fontSize="bodyExtraLarge" fontWeight="bold" color="primary">
            START
          </Text>
        </Button>
      </Column>

      <Text fontWeight="bold" my="18px" fontSize="bodyLarge" pl="10px">
        Tasks
      </Text>
      <Row width="100%">
        <Input
          flex={1}
          placeholder="Enter a task name here..."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <Button variant="default" onClick={handleOkButton}>
          Ok
        </Button>
      </Row>

      <List items={tasks} />
    </Column>
  );
};
