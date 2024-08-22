import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const SkeletonCard = () => {
  return (
    <Card overflow="hidden" borderRadius="10px">
      <Skeleton height="200px" />

      <CardBody mt={4} p={2}>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default SkeletonCard;
