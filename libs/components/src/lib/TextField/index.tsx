import { FC } from "react";
import cls from "classnames";
import Image from "next/image";
// svg
import SolarPenBoldSvg from "@bright-resume/assets/svg/solar-pen-bold.svg";
// types
import { TypographyVariant } from "../types/index.type";
// components
// locals
import { useData } from "./index.hook";
import classes from "./index.module.scss";
import Typography from "../Typography";

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: TypographyVariant;
};

export const TextField: FC<TextFieldProps> = ({ variant = "h3", ...props }) => {
  const data = useData();

  const renderTypography = () => {
    return (
      <>
        <Typography variant={variant}>
          {props.value || props.defaultValue}
        </Typography>
        <Image
          className={classes.editIcon}
          src={SolarPenBoldSvg}
          alt="solar-pen"
          width={18}
          height={18}
          onClick={() => data.setIsInputActive(!data.isInputActive)}
        />
      </>
    );
  };

  const renderInput = () => {
    return (
      <Typography
        component="input"
        autoFocus
        className={classes.input}
        disabled={!data.isInputActive}
        onKeyDown={(event) =>
          event.key === "Enter" && data.setIsInputActive(false)
        }
        variant={variant}
        {...props}
      />
    );
  };

  const renderBody = () => {
    if (!data.isInputActive) return renderTypography();
    else return renderInput();
  };

  return (
    <div
      className={cls(classes.root, {
        [classes.enableInput]: !!data.isInputActive,
      })}
      onBlur={() => data.setIsInputActive(false)}
    >
      {renderBody()}
    </div>
  );
};