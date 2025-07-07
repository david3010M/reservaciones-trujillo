export interface ContactRequest {
  primaryColor: string;
  secondaryColor: string;
  foreground: string;
  emails: string[];
  values: Value[];
}

interface Value {
  key: string;
  value: string;
}

export interface ContactResponse {
  message: string;
}
