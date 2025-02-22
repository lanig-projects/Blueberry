import { Upload } from "antd";
import { useAlert } from "@shared/components/Alert/hooks/useAlert";
import { FiUpload } from "react-icons/fi";

const { Dragger } = Upload;

interface Props {
  onChange?: (file: File | null) => void;
  label?: string;
  title?: string;
  multiple?: boolean;
  className?: string;
  isDisabled?: boolean;
  allowedFileTypes?: string[];
}

export const Dropzone = ({
  onChange,
  label = "Sube tu archivo",
  multiple = false,
  title = "Da click o arrastra tu archivo a esta área",
  className,
  isDisabled = false,
  allowedFileTypes = []
}: Props) => {
  const alert = useAlert();

  const handleBeforeUpload = async (file: File) => {
    if (allowedFileTypes.length > 0 && !allowedFileTypes.includes(file.type)) {
      alert.toastError("Tipo de archivo no permitido");
      return Upload.LIST_IGNORE;
    }

    onChange(file);
    return false;
  };

  const handleRemove = () => {
    onChange(null);
  };

  return (
    <div>
      <Dragger
        beforeUpload={handleBeforeUpload}
        onRemove={handleRemove}
        multiple={multiple}
        showUploadList={false}
        className={className}
        disabled={isDisabled}
      >
        <p className="ant-upload-drag-icon">
          <FiUpload className="text-6xl mx-auto text-gray-500"/>
        </p>
        <p className="ant-upload-text">{title}</p>
        <p className="ant-upload-hint">{label}</p>
      </Dragger>
    </div>
  );
};
