import { useNavigate } from "react-router-dom";
import { useEffect, useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  password: string;
  confirmPassword: string;
}

const SetUpPassword: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    password: "",
    confirmPassword: "",
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<string | null>(null);
  // TODO: use loading state when user sends request to set up password
  // const [loading, setLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleOnCheck = () => {
    const pswd = document.getElementById("password") as HTMLInputElement;
    const conPswd = document.getElementById(
      "confirmPassword"
    ) as HTMLInputElement;
    if (pswd && conPswd) {
      if (pswd.type === "password") {
        pswd.type = "text";
        conPswd.type = "text";
      } else {
        pswd.type = "password";
        conPswd.type = "password";
      }
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add submit logic here
  };

  useEffect(() => {
    formData.password === formData.confirmPassword
      ? setError(null)
      : setError("Passwords must match");
  }, [formData]);

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="border-2 border-[#CACFD1] w-[40%] rounded p-14 mt-10">
        <div className="text-center mb-6">
          <h1 className="font-medium text-[44px]">Password Reset</h1>
        </div>
        {/* ...rest of your form code... */}
      </div>
    </main>
  );
};

export default SetUpPassword;
