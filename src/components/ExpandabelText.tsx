import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandabelText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (!children) return;

  return (
    <Text>
      {expanded ? children : children.slice(0, 300) + "..."}
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        ml={1}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};
export default ExpandabelText;
