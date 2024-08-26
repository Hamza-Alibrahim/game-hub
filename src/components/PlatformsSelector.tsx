import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGameQuery from "../Store";

const PlatformsSelector = () => {
  const curPlatform = useGameQuery((s) => s.curPlatform);
  const setCurPlatform = useGameQuery((s) => s.setCurPlatform);
  const { data } = usePlatform();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Platform: {curPlatform?.name}
      </MenuButton>
      <MenuList>
        {data?.results.map((p) => {
          return (
            <MenuItem
              key={p.id}
              onClick={() =>
                setCurPlatform({ id: p.id, name: p.name, slug: p.slug })
              }
            >
              {p.name}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};
export default PlatformsSelector;
