import { errorResponse, successResponse } from "@/services/error";
import { httpRequest } from "@/services/http";
import { langLs } from "@/localStorage/auth";

export const notifyForSoonUpdate = async (body) => {
  const lang = JSON.parse(langLs.get()) || 'en';
  try {
    const response = await httpRequest.post(`/subscribers/`,body, {
      headers: {
        "Accept-Language" : lang,
      }
    });
    return successResponse(response.data);
  } catch (error) {
    return errorResponse(error?.response?.data?.detail || error?.response?.data?.email?.[0]);

  }
};
