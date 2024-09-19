import { errorResponse, successResponse } from "@/services/error";
import { httpRequest } from "@/services/http";
import { langLs } from "@/localStorage/auth";

export const donate = async (body) => {
  const lang = JSON.parse(langLs.get()) || 'en';
  try {
    const response = await httpRequest.post(`/communication/donation/create/`,body, {
      headers: {
        "Accept-Language" : lang,
      }
    });
    return successResponse(response.data);
  } catch (error) {
    return errorResponse(error);

  }
};
