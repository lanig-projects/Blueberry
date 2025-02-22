import { IFormInput } from "@shared/components/Form/interfaces/IFormInput";
import { SelectController } from "@shared/components/Form/components/Select";
import { TextareaController } from "@shared/components/Form/components/Textarea";
import { SwitchController } from "@shared/components/Form/components/Switch";
import { DatePickerController } from "@shared/components/Form/components/DatePicker";
import { TimePickerController } from "@shared/components/Form/components/TimePicker";
import { DropzoneController } from "@shared/components/Form/components/Dropzone";
import { InputController } from "@shared/components/Form/components/Input";
import { RichTextController } from "@shared/components/Form/components/RichText";
import { FormContainer, FormItem } from "@shared/components/Form/styled";

interface Props {
  control: any;
  errors: any;
  inputs: IFormInput[];
}

export const Form = ({ inputs, control, errors }: Props) => {
  return (
    <FormContainer>
      {inputs.map((input: IFormInput) => {
        const baseProps = {
          control,
          errors,
          name: input.name,
          minLength: input.minLength,
          maxLength: input.maxLength,
          isLoading: input.isLoading,
          label: `${input.label}${input.isRequired ? ' *' : ''}`,
          placeholder: input.placeholder,
          isRequired: input.isRequired,
          isDisabled: input.isDisabled,
          className: input.className
        };

        return (
          <FormItem
            key={input.name}
            colSpan={input.colSpan || 12}
            breakpoints={input.breakpoints}
          >
            {(() => {
              switch (input.type) {
                case 'select':
                  return (
                    <SelectController
                      {...baseProps}
                      options={input.options || []}
                      isMulti={input.isMulti}
                      spanComponent={input.spanComponent}
                    />
                  );
                case 'textarea':
                  return (
                    <TextareaController {...baseProps} />
                  );
                case 'switch':
                  return (
                    <SwitchController {...baseProps} />
                  );
                case 'date':
                  return (
                    <DatePickerController {...baseProps} />
                  );
                case 'time':
                  return (
                    <TimePickerController {...baseProps} />
                  );
                case 'dropzone':
                  return (
                    <DropzoneController {...baseProps} />
                  );
                case 'rich-text':
                  return (
                    <RichTextController {...baseProps} />
                  );
                default:
                  return (
                    <InputController
                      {...baseProps}
                      type={input.inputType}
                      min={input.min}
                      max={input.max}
                    />
                  );
              }
            })()}
          </FormItem>
        );
      })}
    </FormContainer>
  );
};
