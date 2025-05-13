import { useCallback, useState } from "react";

export const useDisclosure = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpen = useCallback(() => setIsOpen(true), []);

  const onClose = useCallback(() => setIsOpen(false), []);

  const toggleOpen = useCallback(() => setIsOpen((prev) => !prev), []);

  return { isOpen, onOpen, onClose, toggleOpen };
};
