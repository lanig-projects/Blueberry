interface Props {
  children: React.ReactNode;
  htmlFor?: string;
}

export const Label = ({ children, htmlFor }: Props) => {
  return (
    <div className="flex gap-2 justify-between add-product add-newplus">
      <label htmlFor={htmlFor} className="form-label">
        {children}
      </label>
    </div>
  );
};
