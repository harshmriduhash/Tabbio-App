import { useState } from "react";
import Modal from "../../components/modal";
import { FormProvider, useForm } from "react-hook-form";
import { AutoInput } from "../../components/form/customInput";
import { Textarea } from "../../components/form";
import { toast } from "react-toastify";
import { BsX } from "react-icons/bs";
import { truncateFilename } from "../../lib/utils/formatters";
import Button from "../../components/Button";

const ContactForm: React.FC<{ show: boolean; setShow: () => void }> = ({
  show,
  setShow,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const methods = useForm<any>();
  const [files, setFiles] = useState<File[]>([]);
  // const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles([...files, ...Array.from(e.target.files)]);
    }
  };

  const handleFileRemove = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const onSubmit = async (_data: any) => {
    const { errors } = methods.formState;
    // Check if there are any validation errors
    if (Object.keys(errors).length > 0) {
      return;
    }
    setIsLoading(true);

    try {
      //   await createSupportTicket(data);
      toast.success(
        "Successful! A support ticket has been created for you. We'll send you a response as soon as possible"
      );
      methods.reset();
      setShow();
    } catch (err: any) {
      toast.error(err.message || "An error occured! Please, try again");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <Modal show={show} onHide={setShow} size="" title="Contact Support">
        <section className="lg:max-h-[500px] max-h-[400px] pr-2 2xl:max-h-full overflow-y-auto custom-scrollbar">
          <p className="text-center mb-3">
            Fill the form below to submit an enquiry or complaint
          </p>
          <div className="pl-6">
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)} className="">
                <div>
                  <div>
                    <div className="grid gap-7">
                      <AutoInput
                        label="Full Name"
                        name="full_name"
                        isRequired
                        placeholder="Enter a preferred username"
                        rules={{
                          required: "Full name is required",
                        }}
                      />

                      <AutoInput
                        label="Email address"
                        name="email"
                        isRequired
                        placeholder="Email"
                        rules={{
                          required: "Email is required",
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Invalid email address",
                          },
                        }}
                      />

                      <AutoInput
                        label="Subject"
                        name="subject"
                        placeholder="A short summary/headline of your issue"
                        rules={{
                          required: false,
                        }}
                      />

                      <div className="mb-4">
                        <label
                          htmlFor="files"
                          className="block text-black mb-2"
                        >
                          Attach Files
                        </label>
                        <input
                          id="files"
                          type="file"
                          className="block w-full rounded-sm border-stroke text-sm text-gray-500 file:mr-4 file:py-3 file:px-4 file:border-0 border file:text-sm file:font-semibold file:bg-blue-50 file:hover:text-blue-700 hover:file:bg-blue-100"
                          onChange={handleFileChange}
                          multiple
                        />

                        {files.length > 0 && (
                          <div className="my-4">
                            <ul className="flex flex-wrap items-center gap-3">
                              {files.map((file, index) => (
                                <li
                                  key={index}
                                  className="flex items-center bg-neutral-100 rounded mb-2"
                                >
                                  <span className="text-gray-700 mr-3 py-2 pl-2">
                                    {truncateFilename(file.name)}
                                  </span>
                                  <button
                                    type="button"
                                    className="bg-transparent hover:bg-danger/20 text-black hover:text-red-500 font-bold py-3 px-1 h-full rounded-r focus:outline-none focus:shadow-outline"
                                    onClick={() => handleFileRemove(index)}
                                  >
                                    <BsX size={18} />
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      <Textarea
                        name="description"
                        isRequired
                        placeholder="Enter more details about your issue/inquiry"
                        label="Description"
                        rules={{ required: "This field is required" }}
                      />
                    </div>

                    <div className="mt-10">
                      <Button
                        type="submit"
                        width="full"
                        rounded
                        disabled={isLoading}
                        onClick={() => {}}
                      >
                        {isLoading ? "Loading..." : "Submit"}
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </FormProvider>
          </div>
        </section>
      </Modal>
    </div>
  );
};

export default ContactForm;
