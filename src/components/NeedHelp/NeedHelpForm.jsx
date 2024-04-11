import { useRef } from "react";
import { toast } from "react-toastify";
import { fetchEmailDB } from "../../services/emailPost";
import emailRegex from "../../regex/emailRegex";
import { commonToastOptions } from "../../helpers/toastOptions";
import emailjs from "@emailjs/browser";
import {
  NeedHelpFormWrapper,
  NeedHelpInput,
  NeedHelpText,
  NeedHelpBtn,
  NeedHelpTitle,
  NeedHelpCloseModal,
} from "./NeedHelpForm.styled";

const { VITE_EMAIL_ID, VITE_EMAIL_TEMPLATE_ID, VITE_EMAIL_API_KEY } =
  import.meta.env;

// eslint-disable-next-line react/prop-types
function NeedHelpForm({ handleNeedHelpCloseModal, setNeedHelp }) {
  const form = useRef();

  const handleNeedHelp = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      message: e.target.comment.value,
    };

    const validEmail = emailRegex.test(data.email);
    const validMessage = data.message.length > 0;

    if (!(validEmail && validMessage)) {
      if (!validMessage && data.email.length === 0) {
        toast.warning(
          "Please fill in all required fields!",
          commonToastOptions
        );
      } else if (!validEmail) {
        toast.warning(
          "Please enter a valid email address!",
          commonToastOptions
        );
      } else {
        toast.warning("Please enter a message!", commonToastOptions);
      }
      return;
    }

    try {
      await fetchEmailDB(data);
      await emailjs.sendForm(
        VITE_EMAIL_ID,
        VITE_EMAIL_TEMPLATE_ID,
        form.current,
        {
          publicKey: VITE_EMAIL_API_KEY,
        }
      );

      toast.success(
        "Thank you for reaching out! Your message has been received.",
        commonToastOptions
      );

      setNeedHelp((prevState) => !prevState);
    } catch (error) {
      toast.error(
        "Error submitting request. Please try again later.",
        commonToastOptions
      );
    }
  };

  return (
    <>
      <NeedHelpCloseModal onClick={handleNeedHelpCloseModal} />
      <NeedHelpFormWrapper ref={form} onSubmit={handleNeedHelp}>
        <NeedHelpTitle>NeedHelp</NeedHelpTitle>
        <NeedHelpInput name="email" type="text" placeholder="Email address" />
        <NeedHelpText
          name="comment"
          cols="30"
          rows="10"
          placeholder="Leave your message"
        ></NeedHelpText>
        <NeedHelpBtn type="submit">Submit</NeedHelpBtn>
      </NeedHelpFormWrapper>
    </>
  );
}

export default NeedHelpForm;
