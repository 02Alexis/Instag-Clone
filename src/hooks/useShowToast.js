import { useCallback } from "react";
import { useToast } from "@chakra-ui/react";

const useShowToast = () => {
  const toast = useToast();

  // useCallback se usa para evitar un bucle infinito, almacenando en caché la función
  const showToast = useCallback(
    (title, description, status) => {
      toast({
        title: title,
        description: description,
        status: status,
        duration: 3000,
        isClosable: true,
      });
    },
    [toast]
  );

  return showToast;
};

export default useShowToast;
