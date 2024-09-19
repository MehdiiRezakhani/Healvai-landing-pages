import { errorResponse, successResponse } from "@/services/error";
import { httpRequest } from "@/services/http";
import { langLs } from "@/localStorage/auth";

export const contactUs = async (body) => {
  const lang = JSON.parse(langLs.get()) || 'en';
  try {
    const response = await httpRequest.post(`/communication/contact/create/`,body, {
      headers: {
        "Accept-Language" : lang,
      }
    });
    return successResponse(response.data);
  } catch (error) {
    return errorResponse(error);

  }
};
