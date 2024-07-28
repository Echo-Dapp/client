import React, { useEffect, useRef } from "react";

type DataFormProps = React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
> & {
  callback?: (data: Record<string, string>) => void;
  onChange?: (data: Record<string, string>) => void;
  setValidity?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function DataForm(props: DataFormProps) {
  const { callback, onChange, setValidity, ...formProps } = props;
  const formRef = useRef() as React.MutableRefObject<HTMLFormElement>;
  const flag = useRef(false);

  useEffect(() => {
    if (!flag.current) {
      flag.current = true;

      formRef.current.querySelectorAll("input").forEach((inp) =>
        inp.addEventListener("change", () => {
          setValidity && setValidity(formRef.current.checkValidity());

          const res: Record<string, string> = {};
          const data = new FormData(formRef.current as any);
          [...data.entries()].forEach((d, i) => {
            res[d[0]] = d[1].toString();
          });

          props.onChange && props.onChange(res);
        })
      );
    }
  }, []);

  return (
    <form
      ref={formRef}
      {...formProps}
      onSubmit={(event) => {
        event.preventDefault();
        if ((document.activeElement as any).type == "submit") {
          const res: Record<string, string> = {};
          const data = new FormData(event.target as any);
          [...data.entries()].forEach((d, i) => {
            res[d[0]] = d[1].toString();
          });
          callback && callback(res);
        }
      }}
    >
      {props.children}
    </form>
  );
}
