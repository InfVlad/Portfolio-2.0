type Email = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const EMAIL_URL = "https://mailer.vladinfante.com/api/send-email";

export const emailSender = async (email: Email) => {
  try {
    const response = await fetch(EMAIL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    });

    if (!response.ok) {
      const errorMessage = `Failed to send email: ${response.statusText}`;
      console.error(errorMessage);
      return { success: false, error: errorMessage };
    }

    const responseData = await response.json();

    if (responseData.success) {
      return { success: true };
    } else {
      const errorMessage = responseData.error || "Unknown error occurred";
      console.error(errorMessage);
      return { success: false, error: errorMessage };
    }
  } catch (error) {
    console.error("An error occurred while sending the email:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
};
