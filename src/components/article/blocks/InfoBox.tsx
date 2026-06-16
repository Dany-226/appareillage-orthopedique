type Props = { title?: string; text: string };

export default function InfoBox({ title, text }: Props) {
  return (
    <aside
      className="my-6 rounded-lg bg-brand-teal-light border-l-4 border-brand-teal p-6"
      role="note"
    >
      {title && (
        <p
          className="font-sans font-semibold text-brand-teal mb-2"
          style={{ fontSize: "16px" }}
        >
          {title}
        </p>
      )}
      <p
        className="font-sans text-on-surface"
        style={{ fontSize: "15px", lineHeight: 1.7 }}
      >
        {text}
      </p>
    </aside>
  );
}
