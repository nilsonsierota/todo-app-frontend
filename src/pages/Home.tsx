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
        <Button onClick={handleOkButton}>Ok</Button>
      </Row>

      <List items={tasks} />
    </Column>
  );
};
