interface StickyNoteProps {
  title?: string;
  description?: string;
  list?: string[];
}

const StickyNote = ({ title, description, list }: StickyNoteProps) => {
  return (
    <div className="p-5 aspect-square bg-[#FFD966] shadow-lg">
      <p className="font-bold">{title}</p>
      <p>{description}</p>
      {list && (
        <ul className="list-disc list-inside">
          {list.map((item) => (
            <li key={item} className="text-lg">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StickyNote;
