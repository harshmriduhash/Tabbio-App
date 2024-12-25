import Avatar from "../../components/Avatar2";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import getUserInitials from "../../lib/utils/getUserInitials";
import { uploadPhoto } from "../../services/authServices";
import defaultPfp from "../../assets/images/default-pfp.png";
import { BiLoaderAlt } from "react-icons/bi";
import { MdOutlineFileUpload } from "react-icons/md";

interface UploadProfilePhotoProps {
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  user: any;
  props?: any;
}

const UploadProfilePhoto: React.FC<UploadProfilePhotoProps> = ({
  setUrl,
  user,
}) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [logoUrl, setLogoUrl] = useState<string>(user?.photo_url || "");
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    const input = (hiddenFileInput.current as HTMLInputElement) || null;
    if (input) {
      input.click();
    }
  };

  const photoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    if (target) {
      if (target.files?.length) {
        const file = target.files[0];
        setLogoUrl(URL.createObjectURL(file) || "");

        const formData = new FormData();
        formData.append("file", file);
        formData.append("folder", `UserProfile/${user?._id}`);
        formData.append("access", `public`);

        //uploading the image

        try {
          setLoading(true);
          const resp = await uploadPhoto(formData);
          if (resp) {
            toast.success(resp.message);
            setLogoUrl(resp?.url);
            setUrl(resp?.url);
          }
        } catch (err: any) {
          toast.error(err.message || "Photo upload failed");
        } finally {
          setLoading(false);
        }
      }
    } else {
      setLogoUrl(user.photo_url || "");
    }
  };
  return (
    <label className="mb-9 flex gap-9 items-center">
      <div className="cursor-pointer">
        <Avatar
          size="xl"
          initials={
            logoUrl === ""
              ? getUserInitials(user?.first_name || "User", "")
              : undefined
          }
          src={logoUrl === "" ? undefined : logoUrl}
        />
      </div>

      <input
        type="file"
        className="hidden"
        ref={hiddenFileInput}
        onChange={photoUpload}
      />
      <button
        onClick={handleClick}
        disabled={loading}
        className="py-3 px-6 bg-primary/10 text-primary rounded opacity-95 hover:opacity-100"
      >
        {loading ? "Uploading Photo" : "Upload Photo"}
      </button>
    </label>
  );
};

export const UploadUserPhoto: React.FC<UploadProfilePhotoProps> = ({
  setUrl,
  user,
}) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [logoUrl, setLogoUrl] = useState<string>(defaultPfp || "");
  const [loading, setLoading] = useState(false);

  const photoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    if (target) {
      if (target.files?.length) {
        const file = target.files[0];
        setLogoUrl(URL.createObjectURL(file) || "");

        const formData = new FormData();
        formData.append("file", file);
        formData.append("folder", `UserProfile/${user?._id}`);
        formData.append("access", `public`);

        //uploading the image

        try {
          setLoading(true);
          const resp = await uploadPhoto(formData);
          if (resp) {
            toast.success(resp.message);
            setLogoUrl(resp?.url);
            setUrl(resp?.url);
          }
        } catch (err: any) {
          toast.error(err.message || "Photo upload failed");
        } finally {
          setLoading(false);
        }
      }
    } else {
      setLogoUrl(user.photo_url || "");
    }
  };
  return (
    <label className="items-center">
      <div className="cursor-pointer">
        <div className="relative w-30">
          {loading ? (
            <div className="bg-zinc-400 w-30 h-30 flex justify-center items-center rounded-full animate-pulse">
              <BiLoaderAlt size={40} className="animate-spin text-white" />
            </div>
          ) : (
            <img
              className="w-30 h-30 rounded-full absolute"
              src={logoUrl}
              alt=""
            />
          )}
          <div className="w-30 h-30 group hover:bg-zinc-400/80 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
            <img
              className="hidden group-hover:block w-9"
              src="https://www.svgrepo.com/show/33565/upload.svg"
              alt=""
            />
          </div>
        </div>
      </div>

      <input
        type="file"
        className="hidden"
        ref={hiddenFileInput}
        onChange={photoUpload}
      />
    </label>
  );
};

export const UploadResumePhoto: React.FC<UploadProfilePhotoProps> = ({
  setUrl,
  user,
  props,
}) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [logoUrl, setLogoUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const photoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    if (target) {
      if (target.files?.length) {
        const file = target.files[0];
        setLogoUrl(URL.createObjectURL(file) || "");

        const formData = new FormData();
        formData.append("file", file);
        formData.append("folder", `UserProfile/${user?._id}`);
        formData.append("access", `public`);

        //uploading the image

        try {
          setLoading(true);
          const resp = await uploadPhoto(formData);
          if (resp) {
            toast.success(resp.message);
            setLogoUrl(resp?.url);
            setUrl(resp?.url);
          }
        } catch (err: any) {
          toast.error(err.message || "Photo upload failed");
        } finally {
          setLoading(false);
        }
      }
    } else {
      setLogoUrl(user.photo_url || "");
    }
  };
  return (
    <label className="items-center">
      <div className="cursor-pointer">
        <div className={`relative ${props?.size ? props?.size : 'w-40 h-40'}`}>
          {loading ? (
            <div className={`bg-zinc-400 ${props?.size ? props?.size : 'w-40 h-40'} flex justify-center items-center rounded-full animate-pulse`}>
              <BiLoaderAlt size={40} className="animate-spin text-white" />
            </div>
          ) : logoUrl ? (
            <img
              className={`rounded-full object-cover absolute w-full h-full`}
              src={logoUrl}
              alt=""
            />
          ) : (
            <div className={`${props?.size ? props?.size : 'w-40 h-40'} group bg-zinc-400 hover:bg-zinc-500 text-white text-sm rounded-full absolute flex flex-col space-y-2 justify-center items-center cursor-pointer transition duration-500`}>
              <MdOutlineFileUpload />
              <p>Upload Image</p>
            </div>
          )}
        </div>
      </div>

      <input
        type="file"
        className="hidden"
        ref={hiddenFileInput}
        onChange={photoUpload}
      />
    </label>
  );
};

export const UpdateProfilePhoto: React.FC<UploadProfilePhotoProps> = ({
  setUrl,
  user,
}) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [logoUrl, setLogoUrl] = useState<string>(user?.photo_url || "");
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    const input = (hiddenFileInput.current as HTMLInputElement) || null;
    if (input) {
      input.click();
    }
  };

  const photoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    if (target) {
      if (target.files?.length) {
        const file = target.files[0];
        setLogoUrl(URL.createObjectURL(file) || "");

        const formData = new FormData();
        formData.append("file", file);
        formData.append("folder", `UserProfile/${user?._id}`);
        formData.append("access", `public`);

        //uploading the image

        try {
          setLoading(true);
          const resp = await uploadPhoto(formData);
          if (resp) {
            toast.success(resp.message);
            setLogoUrl(resp?.url);
            setUrl(resp?.url);
          }
        } catch (err: any) {
          toast.error(err.message || "Photo upload failed");
        } finally {
          setLoading(false);
        }
      }
    } else {
      setLogoUrl(user.photo_url || "");
    }
  };
  return (
    <div className="mb-9 flex gap-9 items-center">
      <div className="" onClick={handleClick}>
        <Avatar
          size="xl"
          initials={
            logoUrl === ""
              ? getUserInitials(user?.user_name || user?.name || "User", "")
              : undefined
          }
          src={logoUrl === "" ? undefined : logoUrl}
        />
      </div>

      <input
        type="file"
        className="hidden w-1"
        ref={hiddenFileInput}
        onChange={photoUpload}
      />
      <button
        onClick={handleClick}
        disabled={loading}
        className="py-3 px-6 bg-primary/10 text-primary rounded opacity-95 hover:opacity-100"
      >
        {loading ? "Uploading Photo" : "Change Profile Photo"}
      </button>
    </div>
  );
};

export default UploadProfilePhoto;
