import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import { Platform } from "../hooks/usePlatform";

interface Props {
  curPlatform: Platform | null;
  setCurPlatform: (val: Platform) => void;
}

const PlatformsSelector = ({ curPlatform, setCurPlatform }: Props) => {
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
