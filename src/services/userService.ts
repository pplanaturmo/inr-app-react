import axios from "axios";

import {
  DosePatternResponse,
  RangeInrResponse,
  UpdatdePassword,
  UpdateRequest,
  UserResponse,
} from "../types";
import { dosePatternSchema, rangeInrSchema } from "../schemas";
import { Bounce, Zoom, toast } from "react-toastify";

const baseUrl = import.meta.env.VITE_BASE_API_URL;

export async function updateUser(
  setLoading: (isLoading: boolean) => void,
  data: UpdateRequest,
  user: UserResponse | null
) {
  const updateUrl = "/user/" + user?.id;

  const formData = {
    name: data.name,
    surname: data.surname,
    email: data.email,
    rangeInr: data.rangeInr,
    dosePattern: data.dosePattern,
  };

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user?.access_token}`,
    },
  };

  try {
    setLoading(true);
    const response = await axios.put(
      baseUrl + updateUrl,
      formData,
      axiosConfig
    );
    toast.success("Usuario actualizado correctamente", {
      transition: Bounce,
    });

    const userData: UserResponse = response.data;
    return userData;
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
}

export async function updatePassword(
  setLoading: (isLoading: boolean) => void,
  data: UpdatdePassword,
  user: UserResponse | null
) {
  const updateUrl = "/user/" + user?.id + "/password";

  const formData = {
    newPassword: data.password,
  };

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user?.access_token}`,
    },
  };

  try {
    setLoading(true);
    const response = await axios.put(
      baseUrl + updateUrl,
      formData,
      axiosConfig
    );
    toast.success("Usuario actualizado correctamente", {
      transition: Bounce,
    });

    const userData: UserResponse = response.data;
    return userData;
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
    setLoading(false);
  } finally {
    setLoading(false);
  }
}

export async function fetchRangeInr(
  setLoading: (isLoading: boolean) => void,
  setRangeInrList: (rangeInrList: RangeInrResponse[]) => void
) {
  const allRangeInrUrl = "/range-inr/all";

  try {
    setLoading(true);
    const { data } = await axios.get(baseUrl + allRangeInrUrl);

    const rangeInrList = data
      .map(rangeInrSchema.parse)
      .map((range: RangeInrResponse) => ({
        ...range,
      }));
    const validRangeInrList = rangeInrList.map(rangeInrSchema.parse);
    setRangeInrList(validRangeInrList);
  } catch (error) {
    toast.warning("No se ha podido conectar con el servidor", {
      transition: Zoom,
    });
    console.error("Failed to fetch Inr Ranges", error);
  }
}

export async function fetchDosePatterns(
  setLoading: (isLoading: boolean) => void,
  setDosePatternList: (dosePatternList: DosePatternResponse[]) => void
) {
  const allDosePatternsUrl = "/dose-pattern/all";

  try {
    setLoading(true);

    const { data } = await axios.get(baseUrl + allDosePatternsUrl);

    const dosePatternList = data
      .map(dosePatternSchema.parse)
      .map((pattern: DosePatternResponse) => ({
        ...pattern,
      }));
    const validDosePatternList = dosePatternList.map(dosePatternSchema.parse);
    setDosePatternList(validDosePatternList);
  } catch (error) {
    toast.warning("No se ha podido conectar con el servidor", {
      transition: Zoom,
    });
    console.error("Failed to fetch Inr Ranges", error);
  } finally {
    setLoading(false);
  }
}
