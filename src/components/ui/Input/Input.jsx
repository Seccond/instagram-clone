import styles from "./Input.module.css";

export default function Input({
  label,
  error,
  helperText,
  id,
  className = "",
  inputClassName = "",
  ...rest
}) {
  const inputId =
    id || rest.name || `input-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <div
      className={[styles.field, error ? styles.hasError : "", className]
        .filter(Boolean)
        .join(" ")}
    >
      {label ? (
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
      ) : null}

      <input
        id={inputId}
        className={[styles.input, inputClassName].filter(Boolean).join(" ")}
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={
          error
            ? `${inputId}-error`
            : helperText
            ? `${inputId}-help`
            : undefined
        }
        {...rest}
      />

      {error ? (
        <div id={`${inputId}-error`} className={styles.error} role="alert">
          {error}
        </div>
      ) : helperText ? (
        <div id={`${inputId}-help`} className={styles.help}>
          {helperText}
        </div>
      ) : null}
    </div>
  );
}
