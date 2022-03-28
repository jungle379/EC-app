import { useScrollLock } from "@mantine/hooks";
import { Button, Group } from "@mantine/core";
import { LockClosedIcon, LockOpen2Icon } from "@radix-ui/react-icons";

function Lock() {
  const [scrollLocked, setScrollLocked] = useScrollLock();

  return (
    <Group position="left">
      <Button
        onClick={() => setScrollLocked((c) => !c)}
        variant="outline"
        leftIcon={scrollLocked ? <LockClosedIcon /> : <LockOpen2Icon />}
      >
        {scrollLocked ? "Unlock scroll" : "Lock scroll"}
      </Button>
    </Group>
  );
}

export default Lock;
