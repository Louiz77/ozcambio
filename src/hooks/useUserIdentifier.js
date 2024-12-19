import { useEffect, useRef } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const useUserIdentifier = () => {
  const hasPosted = useRef(false);

  useEffect(() => {
    const fetchPublicIPAndStoreUser = async () => {
      if (hasPosted.current) return;
      hasPosted.current = true;

      try {
        const response = await axios.get("https://api.ipify.org?format=json");
        const publicIP = response.data.ip;

        let userId = localStorage.getItem("userId");

        if (!userId) {
          userId = uuidv4();
          localStorage.setItem("userId", userId);
          console.log("NewOK");
        } else {
          console.log("UserOK");
        }

        await axios.post("https://ozcambio.pythonanywhere.com//store-mdns", { ip: publicIP, userId });
        console.log("Dados enviados com sucesso.");
      } catch (error) {
        console.error("Erro ao buscar o IP ou enviar:", error);
      }
    };

    fetchPublicIPAndStoreUser();
  }, []);
};

export default useUserIdentifier;
