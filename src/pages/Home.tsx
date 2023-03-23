import { Button, Input, List, Row, Text, Column, Logo, Icon } from 'components';
import { useState } from 'react';

const SECONDS_DEFAULT = 1500;

export const Home = () => {
  const [taskName, setTaskName] = useState('');
  const [tasks, setTasks] = useState<{ label: string }[]>([]);
  const [seconds, setSeconds] = useState(SECONDS_DEFAULT);
  const [timer, setTimer] = useState<any>();

  const handleOkButton = () => {
    if (!taskName) return;

    setTasks((previous) => {
      const copy = [...previous];
      copy.push({ label: taskName });
      return copy;
    });

    setTaskName('');
  };

  const secondsToMinutes = (secs: number) => {
    const divisorMinute = secs % 3600;

    const minutes = Math.floor(divisorMinute / 60);

    const seconds = Math.ceil(divisorMinute % 60);

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const startTimer = () => {
    const timerInterval = setInterval(() => {
      setSeconds((previousSeconds) => {
        if (previousSeconds === 0) {
          clearInterval(timerInterval);
          return 0;
        }
        return previousSeconds - 1;
      });
    }, 1000);

    setTimer(timerInterval);
  };

  const handlePauseButton = () => {
    clearInterval(timer);
    setTimer(undefined);
  };

  const handleStopButton = () => {
    handlePauseButton();
    setSeconds(SECONDS_DEFAULT);
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
          {secondsToMinutes(seconds)}
        </Text>

        <Button variant="primary" onClick={startTimer}>
          <Text fontFamily="secondary" fontSize="bodyExtraLarge" fontWeight="bold" color="primary">
            START
          </Text>
        </Button>

        <Row py="20px">
          <Button variant="primary" p="10px 20px" mx="5px" onClick={startTimer}>
            <Icon variant="play" />
          </Button>
          <Button variant="primary" p="10px 20px" mx="5px" onClick={handlePauseButton}>
            <Icon variant="pause" />
          </Button>
          <Button variant="primary" p="10px 20px" mx="5px" onClick={handleStopButton}>
            <Icon variant="stop" />
          </Button>
          <Button variant="primary" p="10px 20px" mx="5px" onClick={startTimer}>
            <Icon variant="restart" />
          </Button>
          <Button variant="primary" p="10px 20px" mx="5px">
            <Icon variant="done" />
          </Button>
        </Row>
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
