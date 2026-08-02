// שליחת טפסים לתיבת המייל של בית הספר דרך FormSubmit.
// אין צורך בהרשמה או שרת עצמי. בשליחה הראשונה בלבד, בית הספר
// יקבל מייל אימות חד פעמי מ-FormSubmit שיש לאשר כדי להפעיל את התיבה.
const SCHOOL_EMAIL = "meledschool@gmail.com";

export async function submitForm(
  formEl: HTMLFormElement,
  subject: string
): Promise<boolean> {
  const formData = new FormData(formEl);
  formData.append("_subject", subject);
  formData.append("_captcha", "false");
  formData.append("_template", "table");

  try {
    const res = await fetch(`https://formsubmit.co/ajax/${SCHOOL_EMAIL}`, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });
    return res.ok;
  } catch {
    return false;
  }
}
