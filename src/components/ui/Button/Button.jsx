import styles from "./Button.module.css";

export default function Button({
  children,
  type = "button",
  variant = "primary", // primary | secondary | ghost | danger
  size = "md", // sm | md | lg
  fullWidth = false,
  loading = false,
  disabled = false,
  className = "",
  onClick,
  ...rest
}) {
  const isDisabled = disabled || loading;

  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : "",
    isDisabled ? styles.disabled : "",
    loading ? styles.loading : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classes}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={loading || undefined}
      onClick={isDisabled ? undefined : onClick}
      {...rest}
    >
      {loading ? (
        <span className={styles.content}>
          <span className={styles.spinner} aria-hidden="true" />
          <span className={styles.label}>{children}</span>
        </span>
      ) : (
        children
      )}
    </button>
  );
}
