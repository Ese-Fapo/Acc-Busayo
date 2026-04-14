import { createElement } from "react";

export default function IconBox({
  icon: Icon,
  title,
  description,
  imageSrc,
  imageAlt,
  footer,
  iconSize = 22,
  className = "",
}) {
  const hasRenderableIconType =
    typeof Icon === "function" ||
    (typeof Icon === "object" && Icon !== null && "$$typeof" in Icon);

  return (
    <article className={`icon-box ${className}`.trim()}>
      {imageSrc ? (
        <div className="icon-box__image-wrap">
          <img
            src={imageSrc}
            alt={imageAlt ?? title}
            className="icon-box__image"
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : null}

      <div className="icon-box__icon" aria-hidden="true">
        {hasRenderableIconType
          ? createElement(Icon, { size: iconSize, strokeWidth: 2 })
          : Icon ?? null}
      </div>
      <h3>{title}</h3>
      {description ? <p>{description}</p> : null}
      {footer ? <div className="icon-box__footer">{footer}</div> : null}
    </article>
  );
}
