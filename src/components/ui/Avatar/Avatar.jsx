import styles from "./Avatar.module.css";
import defaultAvatar from "@/assets/images/avatar-default.png";

export default function Avatar({
  src,
  alt = "avatar",
  size = 32, // number(px) or string
  className = "",
  ...rest
}) {
  const dimension = typeof size === "number" ? `${size}px` : size;
  const imageSrc = src || defaultAvatar;

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={[styles.avatar, className].filter(Boolean).join(" ")}
      style={{ width: dimension, height: dimension }}
      {...rest}
    />
  );
}
