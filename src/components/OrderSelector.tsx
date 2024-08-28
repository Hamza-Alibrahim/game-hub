import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import useGameQuery from "../Store";
import { Order } from "../entities/Order";

const OrderSelector = () => {
  const order = useGameQuery((s) => s.order);
  const setOrder = useGameQuery((s) => s.setOrder);
  const data: Order[] = [
    { val: "", title: "Revelance" },
    { val: "-added", title: "Date added" },
    { val: "name", title: "Name" },
    { val: "-released", title: "Release date" },
    { val: "-metacritic", title: "Popularity" },
    { val: "-rating", title: "Average raring" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Order by: {order?.title}
      </MenuButton>
      <MenuList>
        {data.map((o) => {
          return (
            <MenuItem key={o.val} onClick={() => setOrder(o)}>
              {o.title}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};
export default OrderSelector;
