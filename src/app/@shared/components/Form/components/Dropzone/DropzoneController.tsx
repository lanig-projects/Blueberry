import { Controller } from "react-hook-form";
import { ErrorMessage } from "@shared/components/Form/components/ErrorMessage";
import { Dropzone } from "@shared/components/Form/components/Dropzone";
import { FilePreview } from "@shared/components/Form/components/Dropzone/components/FilePreview";

interface Props {
  style?: React.CSSProperties;
  control: any;
  name: string;
  label?: string;
  className?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  errors?: any;
}

export const DropzoneController = ({
  style,
  control,
  label,
  className,
  name,
  isRequired,
  isDisabled,
  errors
}: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: isRequired ? 'Este campo es requerido' : false
      }}
      render={({ field }) => (
        <div style={style} className={'block'}>
          <Dropzone
            label={label}
            className={className}
            isDisabled={isDisabled}
            onChange={field.onChange}
          />

          {field.value && (
            <FilePreview file={field.value} onDelete={() => field.onChange(null)}/>
          )}

          {errors[name]?.message && (
            <ErrorMessage message={errors[name]?.message}/>
          )}
        </div>
      )}
    />
  );
};
