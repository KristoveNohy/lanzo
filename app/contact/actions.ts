"use server";

type ContactState = {
  success: boolean;
  errors: Record<string, string>;
};

const initialState: ContactState = {
  success: false,
  errors: {}
};

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const budget = String(formData.get("budget") ?? "").trim();
  const projectType = String(formData.get("projectType") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const errors: Record<string, string> = {};

  if (!name) errors.name = "Please enter your name.";
  if (!email || !email.includes("@")) errors.email = "Enter a valid email.";
  if (!message) errors.message = "Tell us about your project.";

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      errors
    };
  }

  const provider = process.env.CONTACT_PROVIDER ?? "placeholder";

  void provider;
  void company;
  void budget;
  void projectType;

  return {
    success: true,
    errors: {}
  };
}

export { initialState };
