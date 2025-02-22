import ReactQuill from 'react-quill';
import { useDarkMode } from "@shared/hooks/useDarkMode";
import { Label } from "@shared/components/Form/components/Label";
import { ErrorMessage } from "@shared/components/Form/components/ErrorMessage";

import 'react-quill/dist/quill.snow.css';
import './css/styles.css';

interface Props {
  initialValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  label?: string;
  error?: string;
  style?: React.CSSProperties;
  isRequired?: boolean;
  isDisabled?: boolean;
  spanComponent?: React.ReactNode;
}

export const RichText = ({
  initialValue = '',
  value,
  onChange = () => {
  },
  error,
  label,
  style,
  className,
  isRequired = false,
  isDisabled = false,
  spanComponent
}: Props) => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={className} style={style}>
      <div className={'flex justify-between items-center'}>
        {label && (
          <Label>
            {label}
            {!isRequired && <span className="text-muted"></span>}
          </Label>
        )}

        {spanComponent && (
          <div>
            {spanComponent}
          </div>
        )}
      </div>
      <div className="flex gap-1 items-center relative">
        <ReactQuill
          theme={'snow'}
          value={value || initialValue}
          onChange={isDisabled ? () => {
          } : onChange}
          className={`w-full border-[1px] border-[#d9d9d9] dark:border-[#424242] rounded-lg overflow-hidden bg-white dark:bg-[#262626] ${isDarkMode ? 'ql-dark' : ''}`}
          modules={{
            toolbar: [
              [{ 'header': [] }],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              ['bold', 'italic', 'underline', 'strike'],
              ['link'],
              [{ 'align': [] }],
              [{ 'color': [] }, { 'background': [] }],
              ['blockquote'],
              ['clean']
            ]
          }}
        />
      </div>

      {error && <ErrorMessage message={error}/>}
    </div>
  );
};
