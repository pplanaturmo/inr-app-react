import axios from "axios";

import { AlertResponse } from "../types";
import dayjs from "dayjs";
import { Zoom, toast } from "react-toastify";
import { alertResponseSchema } from "../schemas";
import { alertSchema } from "../schemas/alertSchema";

const baseUrl = import.meta.env.VITE_BASE_API_URL;

export const fetchAlerts = async (
  setLoading: (isLoading: boolean) => void,
  setAlerts: (alert: AlertResponse[]) => void
) => {
  const pendingAlertsUrl = "/alerts/pending";

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${user?.accessToken}`,
    },
  };

  try {
    setLoading(true);
    const { data } = await axios.get(baseUrl + pendingAlertsUrl, axiosConfig);

    const alertList = data
      .map(alertResponseSchema.parse)
      .map((alert: AlertResponse) => ({
        ...alert,
        date: dayjs(alert.date).toDate(),
      }));

    const validAlertList = alertList.map(alertSchema.parse);

    setAlerts(validAlertList);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      toast.error(`${error.response.data.message || error.response.status}`, {
        transition: Zoom,
      });
      console.log(`${error.response.data.message || error.response.status}`);
    } else {
      console.log(error);
      toast.warning("No se ha podido conectar con el servidor", {
        transition: Zoom,
      });
    }
  } finally {
    setLoading(false);
  }
};

export const updateAlertReviewed = async (
  alertId: number,
  alerts: AlertResponse[],
  setAlerts: (alerts: AlertResponse[]) => void,
  setLoading: (isLoading: boolean) => void
) => {
  try {
    const alertUpdate = "/alerts/revised";
    const body = JSON.stringify({
      id: alertId,
      revised: true,
    });

    const axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${user?.accessToken}`,
      },
    };

    setLoading(true);

    await axios.put(baseUrl + alertUpdate, body, axiosConfig);

    const updatedAlerts = alerts.filter((alert) => alert.id !== alertId);

    setAlerts(updatedAlerts);

    toast.success("Alerta marcada como vista correctamente", {
      transition: Zoom,
    });
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      toast.error(`${error.response.data.message || error.response.status}`, {
        transition: Zoom,
      });
    } else {
      toast.warning("No se ha podido conectar con el servidor", {
        transition: Zoom,
      });
    }
  } finally {
    setLoading(false);
  }
};
