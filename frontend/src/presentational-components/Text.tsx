import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import React, { FC } from "react";
import { Link as RouteLink } from "react-router-dom";

interface TitleTextProps {
  value: string;
  to?: string;
  align?: "left" | "right" | "center";
  forceWhite?: boolean;
  fontSize?: number | string;
  onClick?: () => void;
}

export const TitleText: FC<TitleTextProps> = ({
  value,
  forceWhite,
  fontSize,
  align,
}) => {
  return (
    <Typography
      noWrap
      align={align}
      color="inherit"
      variant="h5"
      style={{
        fontWeight: "bold",
        fontSize: fontSize,
        ...(forceWhite && { color: "white" }),
      }}
    >
      {value}
    </Typography>
  );
};

export const TitleTextWithLink: FC<TitleTextProps> = ({
  value,
  fontSize,
  to,
}) => {
  return (
    <Link component={RouteLink} to={{ pathname: to }} underline="none">
      <TitleText value={value} fontSize={fontSize} />
    </Link>
  );
};

interface TextProps {
  value: string;
  to?: string;
  onClick?: () => void;
  fontSize?: number | string;
  align?: "left" | "center" | "right";
}

export const Text: FC<TextProps> = ({ value, align }) => {
  return <Typography align={align}>{value}</Typography>;
};

export const TextWithLink: FC<TextProps> = ({ value, to, align }) => {
  return (
    <Link component={RouteLink} to={{ pathname: to }} underline="none">
      <Typography variant="body2" align={align}>
        {value}
      </Typography>
    </Link>
  );
};

interface TextContentProps {
  value?: string | JSX.Element;
  label: string;
  align?: "left" | "center" | "right";
  bold?: boolean;
}

export const TextContent: FC<TextContentProps> = ({
  label,
  value,
  align,
  bold,
}) => {
  return (
    <>
      <Typography variant="body2" color="textSecondary" align={align}>
        {label}
      </Typography>
      <Typography
        variant="h6"
        align={align}
        style={{
          fontWeight: (bold && "bold") || "normal",
          wordWrap: "break-word",
          whiteSpace: "break-spaces",
        }}
      >
        {value}
      </Typography>
    </>
  );
};

export const Base64PDFLink: FC<TextContentProps> = ({
  value,
  label,
  align,
  bold,
}) => {
  return (
    <>
      <Typography
        variant="h6"
        align={align}
        style={{
          fontWeight: (bold && "bold") || "normal",
          wordWrap: "break-word",
          whiteSpace: "break-spaces",
        }}
      >
        <a href={`data:application/pdf;base64,${value}`} download={`${label}`}>
          {label}
        </a>
      </Typography>
    </>
  );
};
