import { emailApi } from "@/lib/config";
import { ContactRequest, ContactResponse } from "./contact.interface";

export async function sendContactRequest(
  payload: ContactRequest
): Promise<ContactResponse> {
  const { data } = await emailApi.post<ContactResponse>(
    "/contactByValues",
    payload
  );
  return data;
}
