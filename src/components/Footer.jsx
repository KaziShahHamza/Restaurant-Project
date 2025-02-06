import { SOCIAL_MEDIA_LINKS } from "../constants";

const Footer = () => {
  return (
    <div className="mb-2 mt-10">
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a
            href={link.href}
            key={index}
            target="_blank"
            rel="noreferrer noopenner"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <p className="mt-8 text-center tracking-tighter text-neutral-500">
        &copy; 2023 | Restaura
      </p>
    </div>
  );
};

export default Footer;
